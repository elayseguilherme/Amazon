<template>
  <!-- Sidebar Drawer -->
  <teleport to="body">
    <!-- Overlay -->
    <transition name="overlay">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-60 z-40"
        @click="$emit('close')"
      ></div>
    </transition>

    <!-- Drawer panel -->
    <transition name="drawer">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 h-full w-80 max-w-full bg-white z-50 overflow-y-auto shadow-2xl"
      >
        <!-- Header -->
        <div class="bg-amazon-dark px-4 py-3 flex items-center justify-between">
          <div class="flex items-center gap-2 text-white">
            <span class="text-2xl">👤</span>
            <router-link to="/login" @click="$emit('close')" class="font-bold text-sm hover:underline">
              Olá, faça seu login
            </router-link>
          </div>
          <button @click="$emit('close')" class="text-white text-2xl hover:text-amazon-orange">&times;</button>
        </div>

        <!-- Sections -->
        <div class="py-2">
          <!-- Destaques -->
          <div class="px-4 py-2 bg-gray-100 border-b">
            <h3 class="font-bold text-amazon-text text-base">Destaques</h3>
          </div>
          <nav class="border-b">
            <a v-for="item in highlights" :key="item" href="#"
               @click="$emit('close')"
               class="block px-4 py-2.5 text-sm text-amazon-text hover:bg-gray-100 border-b border-gray-100 last:border-0">
              {{ item }}
            </a>
          </nav>

          <!-- Conteúdo digital e dispositivos -->
          <div class="px-4 py-2 bg-gray-100 border-b mt-2">
            <h3 class="font-bold text-amazon-text text-base">Conteúdo digital e dispositivos</h3>
          </div>
          <nav class="border-b">
            <a v-for="item in digital" :key="item" href="#"
               @click="$emit('close')"
               class="block px-4 py-2.5 text-sm text-amazon-text hover:bg-gray-100 border-b border-gray-100 last:border-0">
              {{ item }}
            </a>
          </nav>

          <!-- Comprar por categoria -->
          <div class="px-4 py-2 bg-gray-100 border-b mt-2">
            <h3 class="font-bold text-amazon-text text-base">Comprar por categoria</h3>
          </div>
          <nav class="border-b">
            <a v-for="item in categories" :key="item" href="#"
               @click="$emit('close')"
               class="block px-4 py-2.5 text-sm text-amazon-text hover:bg-gray-100 border-b border-gray-100 last:border-0">
              {{ item }}
            </a>
          </nav>

          <!-- Settings -->
          <div class="px-4 py-2 bg-gray-100 border-b mt-2">
            <h3 class="font-bold text-amazon-text text-base">Configurações</h3>
          </div>
          <nav>
            <a v-for="item in settings" :key="item" href="#"
               @click="$emit('close')"
               class="block px-4 py-2.5 text-sm text-amazon-text hover:bg-gray-100 border-b border-gray-100 last:border-0">
              {{ item }}
            </a>
          </nav>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
defineProps({ isOpen: Boolean })
defineEmits(['close'])

const highlights = ['Mais Vendidos', 'Novidades na Amazon', 'Produtos em alta', 'Ofertas do Dia', 'Prime']

const digital = [
  'Amazon Fire TV',
  'Amazon Music',
  'Prime Video',
  'Aplicativos Amazon',
  'Dispositivos Kindle e eBooks',
  'Echo e Alexa',
  'Audiolivros Audible',
]

const categories = [
  'Alimentos e Bebidas',
  'Automotivo',
  'Bebês',
  'Beleza e Cuidados Pessoais',
  'Brinquedos e Jogos',
  'Casa e Cozinha',
  'Eletrônicos',
  'Esportes e Aventura',
  'Games',
  'Livros',
  'Moda',
  'Música',
]

const settings = ['Configurações', 'Idioma', 'País']
</script>

