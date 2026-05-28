export async function handleRegisterRequest(request, env, ctx) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Método não permitido. Use POST.' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json', 'Allow': 'POST' }
    });
  }

  const targetUrl = env.url_registro;

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Configuração pendente: URL_REGISTRO não definida no painel da Cloudflare." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  try {
    const formData = await request.json(); // Pega o corpo JSON da requisição do frontend

    const upstreamResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Adicione outros cabeçalhos de autenticação ou API Key se necessário
      },
      body: JSON.stringify(formData), // Envia os dados do formulário para a URL de registro
    });

    // Retorna a resposta da API de registro diretamente para o cliente
    return new Response(upstreamResponse.body, {
      status: upstreamResponse.status,
      headers: upstreamResponse.headers,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: `Erro ao processar o registro: ${error.message}` }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}