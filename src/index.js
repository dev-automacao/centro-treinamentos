import { handleTurmasRequest } from '../worker/workers-turmas.js';
import { handleModulosRequest } from '../worker/worker-modulos.js';
import { handleRegisterRequest } from '../worker/worker-register.js';
import { handleTokenValidation } from '../worker/worker-token.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Roteamento para a API de Turmas
    if (url.pathname.replace(/\/$/, "") === "/api/turmas") {
      return handleTurmasRequest(request, env, ctx);
    }

    // 2. Roteamento para a API de Módulos
    if (url.pathname.replace(/\/$/, "") === "/api/modulos") {
      return handleModulosRequest(request, env, ctx);
    }

    // 3. Roteamento para a API de Registro
    if (url.pathname.replace(/\/$/, "") === "/api/register") {
      return handleRegisterRequest(request, env, ctx);
    }

    // 4. Roteamento para a API de Validação de Token
    if (url.pathname.replace(/\/$/, "") === "/api/validate-token") {
      return handleTokenValidation(request, env, ctx);
    }

    // 5. Fallback: Se não for uma rota de API, entrega os arquivos estáticos (HTML, JS, CSS)
    return env.ASSETS.fetch(request);
  }
};