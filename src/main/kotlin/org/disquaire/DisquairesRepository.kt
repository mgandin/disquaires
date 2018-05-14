package org.disquaire

import io.vertx.core.Vertx
import io.vertx.core.buffer.Buffer
import io.vertx.ext.web.client.HttpRequest
import io.vertx.ext.web.client.WebClient
import io.vertx.kotlin.core.http.HttpClientOptions


class DisquairesRepository(vertx: Vertx, val port: Int, val baseUrl: String) {
    private val httpClientOptions = HttpClientOptions(logActivity = true, keepAlive = true)
    private var httpClient = vertx.createHttpClient(httpClientOptions)
    var webClient = WebClient.wrap(httpClient)

    fun getDisquaires() : HttpRequest<Buffer>? = webClient.get(port, baseUrl, "/json/all.json")
}