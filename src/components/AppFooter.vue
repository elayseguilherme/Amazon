<template>
  <footer class="bg-amazon-dark text-white">
    <!-- Back to top -->
    <div
      class="bg-amazon-nav text-white text-center py-4 text-sm cursor-pointer hover:bg-gray-600 transition-colors"
      @click="scrollToTop"
    >
      Voltar ao topo
    </div>

    <!-- Main footer links -->
    <div class="max-w-7xl mx-auto px-4 py-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Column 1 -->
        <div>
          <h3 class="font-bold text-sm mb-3">Ganhe dinheiro conosco</h3>
          <ul class="space-y-2">
            <li v-for="l in col1" :key="l">
              <a href="#" class="text-gray-400 text-sm hover:text-white hover:underline">{{ l }}</a>
            </li>
          </ul>
        </div>
        <!-- Column 2 -->
        <div>
          <h3 class="font-bold text-sm mb-3">Produtos da Amazon</h3>
          <ul class="space-y-2">
            <li v-for="l in col2" :key="l">
              <a href="#" class="text-gray-400 text-sm hover:text-white hover:underline">{{ l }}</a>
            </li>
          </ul>
        </div>
        <!-- Column 3 -->
        <div>
          <h3 class="font-bold text-sm mb-3">Pagamento</h3>
          <ul class="space-y-2">
            <li v-for="l in col3" :key="l">
              <a href="#" class="text-gray-400 text-sm hover:text-white hover:underline">{{ l }}</a>
            </li>
          </ul>
        </div>
        <!-- Column 4 -->
        <div>
          <h3 class="font-bold text-sm mb-3">Deixe-nos ajudar você</h3>
          <ul class="space-y-2">
            <li v-for="l in col4" :key="l">
              <a href="#" class="text-gray-400 text-sm hover:text-white hover:underline">{{ l }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div class="border-t border-gray-700"></div>

    <!-- Logo + country + copyright -->
    <div class="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center gap-4">
      <router-link to="/" class="text-white font-bold text-2xl">
        amazon<span class="text-amazon-orange">.com.br</span>
      </router-link>
      <div class="flex items-center gap-2 text-sm text-gray-400">
        <span>🇧🇷</span>
        <span>Brasil</span>
        <span>|</span>
        <span>Português</span>
      </div>
      <div class="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
        <a href="#" class="hover:text-white hover:underline">Condições de uso</a>
        <a href="#" class="hover:text-white hover:underline">Notificação de privacidade</a>
        <a href="#" class="hover:text-white hover:underline">Sua privacidade</a>
        <a href="#" class="hover:text-white hover:underline">Aviso de cookies</a>
        <a href="#" class="hover:text-white hover:underline">Anúncios baseados em interesses</a>
      </div>
      <p class="text-xs text-gray-500 text-center">
        © 1996–2026, Amazon.com, Inc. ou suas afiliadas. Projeto Acadêmico.
      </p>
    </div>
  </footer>
</template>

<script setup>
const col1 = [
  'Venda na Amazon',
  'Venda na Alexa',
  'Programa de Afiliados',
  'Anuncie seus produtos',
  'Publique de forma independente',
]
const col2 = [
  'Amazon Echo e Alexa',
  'Fire TV',
  'Kindle',
  'Audible',
  'Amazon Music',
  'Prime Video',
  'Amazon Prime',
]
const col3 = [
  'Cartão de crédito Amazon',
  'Cartão pré-pago Amazon',
  'Recarga de saldo',
  'Pagamento por boleto',
  'Pix',
]
const col4 = [
  'Minha conta',
  'Meus pedidos',
  'Devoluções e trocas',
  'Gerenciar conteúdo e dispositivos',
  'Ajuda',
  'Assistência ao cliente',
]

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

