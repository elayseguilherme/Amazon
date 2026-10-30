<template>
  <!-- Hero Banner -->
  <div class="relative w-full overflow-hidden" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); min-height: 340px;">
    <div class="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left content -->
      <div class="flex-1 text-white z-10">
        <div class="text-amazon-prime text-sm font-bold mb-2 flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-amazon-prime"></span>
          Disponível com Prime
        </div>
        <h1 class="text-3xl md:text-4xl font-bold mb-3">Echo Pop com Alexa</h1>
        <p class="text-gray-300 mb-4 max-w-md">
          Som cheio e compacto. Controle sua casa inteligente, toque músicas e muito mais com a voz.
        </p>
        <div class="flex items-center gap-3 mb-4">
          <span class="bg-amazon-orange text-white text-xs font-bold px-2 py-1 rounded">
            🚚 Frete GRÁTIS Prime
          </span>
          <span class="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">-30% OFF</span>
        </div>
        <div class="mb-5">
          <div class="text-gray-400 text-sm line-through">R$ 499,00</div>
          <div class="text-3xl font-bold text-white">
            R$ <span class="text-4xl">349</span><span class="text-xl">,00</span>
          </div>
        </div>
        <div class="flex gap-3">
          <button
            @click="$router.push('/produto')"
            class="btn-yellow px-8 py-3 font-bold text-amazon-text rounded-lg"
          >
            Comprar agora
          </button>
          <button
            @click="$router.push('/produto')"
            class="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-amazon-dark transition-colors"
          >
            Ver detalhes
          </button>
        </div>
      </div>
      <!-- Right: Product image placeholder -->
      <div class="flex-none">
        <div
          class="w-56 h-56 md:w-72 md:h-72 rounded-full flex items-center justify-center text-white font-bold text-center shadow-2xl"
          style="background: radial-gradient(circle, #1db5be, #0e7880)"
        >
          <div>
            <div class="text-5xl mb-2">🔊</div>
            <div class="text-sm font-bold">Echo Pop</div>
            <div class="text-xs text-amazon-prime">com Alexa</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Gradient fade bottom -->
    <div class="absolute bottom-0 left-0 right-0 h-16"
         style="background: linear-gradient(transparent, #EAEDED)"></div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

