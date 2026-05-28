export async function handleTurmasRequest(request, env, ctx) {
  const cache = caches.default;
  const cacheKey = request;
  
  // Tenta recuperar do cache
  let response = await cache.match(cacheKey);

  if (!response) {
    console.log("[Worker] Cache miss - Buscando turmas na origem.");
    const targetUrl = env.url_turmas;
    
    if (!targetUrl || targetUrl.includes("URL_DEFINIDA")) {
      return new Response(JSON.stringify({ error: "Configuração pendente: URL_TURMAS não definida no painel da Cloudflare." }), { 
        status: 500, headers: { "Content-Type": "application/json" } 
      });
    }

    try {
      const res = await fetch(targetUrl);
      if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
      
      const data = await res.json();

      response = new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, s-maxage=3600", // Cache de 1 hora na borda
          "X-Source": "Workers-Turmas-Logic"
        },
      });

      // Armazena no cache para futuras requisições
      ctx.waitUntil(cache.put(cacheKey, response.clone()));
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { 
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  } else {
    console.log("[Worker] Cache hit - Retornando dados otimizados.");
  }
  return response;
}