<template>
  <div class="min-h-screen flex flex-col" style="background-color: #EAEDED">
    <!-- Login page header (simplified) -->
    <header class="bg-white border-b border-amazon-border py-4 px-6 flex flex-col items-center">
      <router-link to="/" class="text-amazon-dark font-bold text-3xl mb-1">
        amazon<span class="text-amazon-orange">.com.br</span>
      </router-link>
    </header>

    <main class="flex-1 flex flex-col items-center py-8 px-4">
      <!-- Login card -->
      <div class="bg-white border border-amazon-border rounded-lg p-6 w-full max-w-sm">
        <h1 class="text-2xl font-normal text-amazon-text mb-5 text-center">
          Faça login ou crie uma conta
        </h1>

        <form @submit.prevent="handleSubmit">
          <!-- Email/phone label -->
          <div class="mb-4">
            <label class="block text-sm font-bold text-amazon-text mb-1" for="email">
              Digite um número de celular ou e-mail
            </label>
            <input
              id="email"
              v-model="email"
              type="text"
              class="w-full border border-amazon-border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              :class="{ 'border-red-500': emailError }"
              placeholder="E-mail ou celular"
            />
            <p v-if="emailError" class="text-red-600 text-xs mt-1">{{ emailError }}</p>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="w-full btn-yellow font-bold py-2 rounded-lg text-amazon-text"
          >
            Continuar
          </button>
        </form>

        <!-- Terms -->
        <p class="text-xs text-amazon-text mt-4 leading-relaxed">
          Ao continuar, você concorda com as
          <a href="#" class="text-amazon-link hover:underline">Condições de Uso</a>
          da Amazon. Consulte também nossa
          <a href="#" class="text-amazon-link hover:underline">Notificação de privacidade</a>.
        </p>

        <!-- Help link -->
        <div class="mt-3 text-center">
          <a href="#" class="text-amazon-link text-sm hover:underline">Precisa de ajuda?</a>
        </div>

        <!-- Divider -->
        <div class="relative my-5">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300"></div>
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-3 bg-white text-gray-500">Novo na Amazon?</span>
          </div>
        </div>

        <!-- Create account -->
        <button
          @click="$router.push('/login')"
          class="w-full border border-gray-400 bg-gray-100 hover:bg-gray-200 text-amazon-text py-2 rounded-lg text-sm font-bold transition-colors"
        >
          Crie sua conta Amazon
        </button>
      </div>

      <!-- Business account -->
      <div class="bg-white border border-amazon-border rounded-lg p-4 w-full max-w-sm mt-3 text-center">
        <a href="#" class="text-amazon-link text-sm hover:underline">
          Fazer login com uma conta comercial
        </a>
      </div>
    </main>

    <!-- Login footer -->
    <footer class="border-t border-gray-300 py-6 mt-4">
      <div class="flex flex-wrap justify-center gap-4 text-xs text-amazon-link mb-3">
        <a href="#" class="hover:underline">Condições de uso</a>
        <a href="#" class="hover:underline">Notificação de privacidade</a>
        <a href="#" class="hover:underline">Ajuda</a>
        <a href="#" class="hover:underline">Aviso de cookies</a>
        <a href="#" class="hover:underline">Anúncios baseados em interesses</a>
      </div>
      <p class="text-center text-xs text-gray-500">
        © 1996–2026, Amazon.com, Inc. ou suas afiliadas
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const emailError = ref('')

function handleSubmit() {
  emailError.value = ''
  if (!email.value.trim()) {
    emailError.value = 'Digite um e-mail ou número de celular.'
    return
  }
  // Simulate login - just redirect to home for demo
  router.push('/')
}
</script>

