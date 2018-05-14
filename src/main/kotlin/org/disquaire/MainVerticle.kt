package org.disquaire

import io.vertx.core.AbstractVerticle
import io.vertx.core.Future
import io.vertx.core.http.HttpHeaders
import io.vertx.ext.web.Router
import io.vertx.ext.web.handler.StaticHandler
import io.vertx.kotlin.core.http.HttpServerOptions

class MainVerticle : AbstractVerticle() {

    private val baseUrl = "localhost"
    private val port = 8081

    override fun start(startFuture: Future<Void>?) {
        val disquaires = DisquairesRepository(vertx, port, baseUrl)
        val router = Router.router(vertx).apply {
            get("/hello").handler { ctx -> ctx.response().end("Hello World!") }
            get("/disquaires").produces("application/json").handler { ctx ->
                disquaires.getDisquaires()?.send {
                    if (it.failed()) {
                        println(it.cause())
                    } else {
                        ctx.response().headers().add(HttpHeaders.CONTENT_TYPE, "application/json")
                        ctx.response().end(it.result().body())
                    }
                };
            }
            route("/*").handler(StaticHandler.create())
            route("/js/*").handler(StaticHandler.create("js"))
            route("/json/*").handler(StaticHandler.create("json"))

        }

        vertx.createHttpServer(
                HttpServerOptions(
                        port = Integer.getInteger("http.port", 8081)
                ))
                .requestHandler { router.accept(it) }
                .listen { result ->
                    if (result.succeeded()) {
                        startFuture?.complete()
                    } else {
                        startFuture?.fail(result.cause())
                    }
                }
    }
}