export async function handleTokenValidation(request, env) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido.' }), { status: 405 });
  }

  const targetUrl = env.url_token;
  if (!targetUrl || targetUrl.includes("URL_DEFINIDA")) {
    return new Response(JSON.stringify({ error: "Configuração url_token ausente." }), { status: 500 });
  }

  try {
    const { token } = await request.json();

    const res = await fetch(targetUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token })
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { 
        'Content-Type': 'application/json',
        'X-Source': 'Worker-Token-Validation'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}