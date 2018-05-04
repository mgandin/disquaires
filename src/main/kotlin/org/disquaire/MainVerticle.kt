package org.disquaire

import io.vertx.core.AbstractVerticle
import io.vertx.core.Future
import io.vertx.ext.web.Router
import io.vertx.ext.web.handler.StaticHandler
import io.vertx.kotlin.core.http.HttpServerOptions

class MainVerticle : AbstractVerticle() {

    override fun start(startFuture: Future<Void>?) {

        val router = Router.router(vertx).apply {
            get("/hello").handler { ctx -> ctx.response().end("Hello World!") }

            route("/*").handler(StaticHandler.create())
            route("/js/*").handler(StaticHandler.create("js"))
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