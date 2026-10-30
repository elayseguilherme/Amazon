<template>
  <header>
    <!-- Top navbar -->
    <nav class="bg-amazon-dark text-white">
      <div class="flex items-center gap-2 px-3 py-2 max-w-full">
        <!-- Logo -->
        <router-link to="/" class="flex-none mr-2 flex items-center group">
          <span class="text-white font-bold text-xl tracking-tight group-hover:border group-hover:border-white px-1 py-0.5 rounded">
            amazon<span class="text-amazon-orange">.com.br</span>
          </span>
        </router-link>

        <!-- Location -->
        <div class="hidden md:flex items-center gap-1 text-xs cursor-pointer hover:border hover:border-white px-1 py-1 rounded flex-none">
          <div>
            <div class="text-gray-300">Enviar para</div>
            <div class="font-bold text-sm flex items-center gap-1">
              <span>📍</span> Brasil
            </div>
          </div>
        </div>

        <!-- Search bar -->
        <div class="flex flex-1 items-center min-w-0 mx-2">
          <div class="flex w-full rounded overflow-hidden border-2 border-amazon-orange">
            <!-- Category select -->
            <select class="bg-gray-200 text-amazon-text text-xs px-2 border-r border-gray-300 hidden sm:block flex-none" style="min-width: 60px">
              <option>Todos</option>
              <option>Eletrônicos</option>
              <option>Livros</option>
              <option>Games</option>
              <option>Moda</option>
              <option>Casa</option>
            </select>
            <!-- Input -->
            <input
              v-model="searchQuery"
              @keyup.enter="handleSearch"
              type="text"
              placeholder="Pesquisar Amazon.com.br"
              class="flex-1 px-3 py-2 text-amazon-text text-sm outline-none min-w-0"
            />
            <!-- Search button -->
            <button
              @click="handleSearch"
              class="bg-amazon-orange hover:bg-yellow-500 transition-colors px-3 py-2 flex-none"
              aria-label="Pesquisar"
            >
              <svg class="w-5 h-5 text-amazon-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Right side actions -->
        <div class="flex items-center gap-1 flex-none">
          <!-- Account -->
          <router-link to="/login"
            class="hidden md:flex flex-col text-xs hover:border hover:border-white px-2 py-1 rounded cursor-pointer">
            <span class="text-gray-300">Olá, faça seu login</span>
            <span class="font-bold text-sm">Contas e Listas <span class="text-xs">▾</span></span>
          </router-link>

          <!-- Returns -->
          <router-link to="/"
            class="hidden md:flex flex-col text-xs hover:border hover:border-white px-2 py-1 rounded cursor-pointer">
            <span class="text-gray-300">Devoluções</span>
            <span class="font-bold text-sm">e Pedidos</span>
          </router-link>

          <!-- Cart -->
          <router-link to="/"
            class="flex items-end gap-1 hover:border hover:border-white px-2 py-1 rounded cursor-pointer">
            <div class="relative">
              <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2" fill="none"/>
                <path d="M16 10a4 4 0 01-8 0" fill="none" stroke="currentColor" stroke-width="2"/>
              </svg>
              <span class="absolute -top-1 -right-1 bg-amazon-orange text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {{ cartCount }}
              </span>
            </div>
            <span class="hidden md:block font-bold text-sm">Carrinho</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Secondary navbar -->
    <nav class="bg-amazon-nav text-white text-sm">
      <div class="flex items-center gap-1 px-3 py-1.5 overflow-x-auto scroll-container">
        <!-- Hamburger -->
        <button
          @click="$emit('toggle-drawer')"
          class="flex items-center gap-1 hover:border hover:border-white px-2 py-1 rounded font-bold flex-none"
        >
          <span class="text-lg">☰</span>
          <span class="hidden sm:inline">Todos</span>
        </button>

        <!-- Nav links -->
        <a v-for="link in navLinks" :key="link"
           href="#"
           class="hover:border hover:border-white px-2 py-1 rounded whitespace-nowrap flex-none text-xs sm:text-sm">
          {{ link }}
        </a>

        <!-- Right promotion -->
        <a href="#" class="ml-auto text-xs sm:text-sm text-amazon-orange whitespace-nowrap flex-none hover:underline">
          🎬 Jovem Sherlock – Assista Agora
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineEmits(['toggle-drawer'])

const router = useRouter()
const searchQuery = ref('')
const cartCount = ref(3)

const navLinks = [
  'Ofertas do Dia',
  'Mais Vendidos',
  'Games',
  'Livros',
  'Música',
  'Casa',
  'Eletrônicos',
  'Brinquedos e Jogos',
]

function handleSearch() {
  if (searchQuery.value.trim()) {
    // In a real app, navigate to search results
    router.push('/')
  }
}
</script>

