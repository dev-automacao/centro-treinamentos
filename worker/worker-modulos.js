export async function handleModulosRequest(request, env, ctx) {
  const url = new URL(request.url);
  const classId = url.searchParams.get("classId");
  const cache = caches.default;
  const cacheKey = request;

  // Tenta recuperar do cache
  let response = await cache.match(cacheKey);

  if (!response) {
    console.log("[Worker-Modulos] Cache miss - Buscando módulos na origem.");
    const targetUrl = env.url_modulos;
    
    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "Configuração url_modulos ausente no painel Cloudflare." }), { 
        status: 500, headers: { "Content-Type": "application/json" } 
      });
    }

    try {
      const finalUrl = classId ? `${targetUrl}${targetUrl.includes('?') ? '&' : '?'}classId=${classId}` : targetUrl;
      const res = await fetch(finalUrl);
      const data = await res.json();

      response = new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, s-maxage=1800", // 30 minutos de cache
          "X-Source": "Worker-Modulos-Module"
        },
      });

      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  return response;
}
