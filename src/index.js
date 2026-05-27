export default {
  async fetch(request, env) {
    // Deixa o Static Assets cuidar da maioria das requisições
    return env.ASSETS.fetch(request);
  }
};