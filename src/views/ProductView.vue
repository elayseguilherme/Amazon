<template>
  <div class="min-h-screen flex flex-col" style="background-color: #EAEDED">
    <AppHeader @toggle-drawer="drawerOpen = true" />
    <SidebarDrawer :is-open="drawerOpen" @close="drawerOpen = false" />

    <main class="flex-1">
      <!-- Breadcrumb -->
      <div class="bg-white border-b border-amazon-border px-4 py-2 text-xs text-amazon-link">
        <router-link to="/" class="hover:underline">Início</router-link>
        <span class="text-gray-400 mx-1">›</span>
        <a href="#" class="hover:underline">Videogames</a>
        <span class="text-gray-400 mx-1">›</span>
        <a href="#" class="hover:underline">Nintendo</a>
        <span class="text-gray-400 mx-1">›</span>
        <span class="text-amazon-text">Nintendo Switch 2...</span>
      </div>

      <div class="max-w-7xl mx-auto px-3 md:px-4 py-4">
        <!-- Main product area -->
        <div class="bg-white rounded shadow p-4 md:p-6 mb-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <!-- LEFT: Image gallery -->
            <div class="md:col-span-1">
              <div class="flex gap-2">
                <!-- Vertical thumbnails -->
                <div class="flex flex-col gap-2 flex-none">
                  <div
                    v-for="(thumb, i) in thumbnails"
                    :key="i"
                    class="w-12 h-12 border-2 rounded cursor-pointer flex items-center justify-center text-white text-xs font-bold"
                    :class="selectedImage === i ? 'border-amazon-orange' : 'border-amazon-border'"
                    :style="{ backgroundColor: thumb.color }"
                    @click="selectedImage = i"
                  >
                    {{ thumb.emoji }}
                  </div>
                </div>
                <!-- Main image -->
                <div
                  class="flex-1 aspect-square rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-inner border border-amazon-border"
                  :style="{ backgroundColor: thumbnails[selectedImage].color }"
                >
                  <div class="text-center">
                    <div class="text-6xl mb-3">{{ thumbnails[selectedImage].emoji }}</div>
                    <div class="text-sm px-4">{{ thumbnails[selectedImage].label }}</div>
                  </div>
                </div>
              </div>
              <!-- Thumbnails row bottom -->
              <div class="flex gap-2 mt-3">
                <div
                  v-for="(thumb, i) in thumbnails"
                  :key="'b' + i"
                  class="w-14 h-14 border-2 rounded cursor-pointer flex items-center justify-center text-white text-lg"
                  :class="selectedImage === i ? 'border-amazon-orange' : 'border-amazon-border hover:border-gray-400'"
                  :style="{ backgroundColor: thumb.color }"
                  @click="selectedImage = i"
                >
                  {{ thumb.emoji }}
                </div>
              </div>
            </div>

            <!-- MIDDLE: Product info -->
            <div class="md:col-span-1">
              <!-- Seller -->
              <p class="text-xs text-amazon-link mb-1">
                Visite a loja <a href="#" class="font-bold hover:underline">Nintendo</a>
              </p>

              <!-- Title -->
              <h1 class="text-lg md:text-xl font-medium text-amazon-text mb-2 leading-snug">
                Bundle Nintendo Switch 2 + Jogo Digital Mario Kart World – Console Portátil HD com Joy-Con 2 e Tela de 7 Polegadas
              </h1>

              <!-- Rating -->
              <div class="flex items-center gap-2 mb-2">
                <StarRating :rating="4.5" :count="2345" />
                <span class="text-amazon-link text-xs hover:underline cursor-pointer">2.345 avaliações</span>
              </div>

              <!-- Badges row -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span class="bg-amazon-orange text-white text-xs font-bold px-2 py-0.5 rounded">
                  #1 Mais Vendido em Games
                </span>
                <span class="border border-amazon-prime text-amazon-prime text-xs px-2 py-0.5 rounded">
                  Prime
                </span>
              </div>

              <!-- Divider -->
              <div class="border-t border-amazon-border my-3"></div>

              <!-- Price -->
              <div class="mb-3">
                <div class="text-sm text-gray-600 mb-1">Preço: <span class="text-red-600 text-sm">-12%</span></div>
                <div class="flex items-baseline gap-2">
                  <span class="text-sm text-gray-500 line-through">R$ 5.550,00</span>
                </div>
                <div class="text-3xl font-bold text-amazon-text">
                  R$ <span class="text-4xl">4.885</span><span class="text-xl">,00</span>
                </div>
                <div class="text-xs text-gray-600">
                  ou em 12x de R$ 407,08 sem juros no cartão
                </div>
                <div class="flex items-center gap-1 mt-1">
                  <span class="text-amazon-prime text-sm font-bold">prime</span>
                  <span class="text-xs text-gray-600">Frete GRÁTIS e entrega em 1 dia</span>
                </div>
              </div>

              <!-- Availability -->
              <div class="text-green-600 font-bold text-sm mb-2">Em estoque</div>
              <div class="text-xs text-gray-600 mb-3">
                Vendido e entregue por <a href="#" class="text-amazon-link hover:underline">Amazon.com.br</a>
              </div>

              <!-- Variants -->
              <div class="mb-3">
                <p class="text-sm font-bold mb-2">Cor: <span class="font-normal">Vermelho</span></p>
                <div class="flex gap-2">
                  <button
                    v-for="color in colors"
                    :key="color.name"
                    class="w-8 h-8 rounded-full border-2 transition-all"
                    :class="selectedColor === color.name ? 'border-amazon-orange' : 'border-gray-300'"
                    :style="{ backgroundColor: color.hex }"
                    :title="color.name"
                    @click="selectedColor = color.name"
                  ></button>
                </div>
              </div>

              <!-- Wishlist / Share -->
              <div class="flex gap-4 text-xs text-amazon-link mt-2">
                <a href="#" class="hover:underline flex items-center gap-1">❤️ Adicionar à lista de desejos</a>
                <a href="#" class="hover:underline flex items-center gap-1">📤 Compartilhar</a>
              </div>
            </div>

            <!-- RIGHT: Buy box -->
            <div class="md:col-span-1">
              <div class="border border-amazon-border rounded-lg p-4 sticky top-4">
                <div class="text-2xl font-bold text-amazon-text mb-1">R$ 4.885,00</div>
                <div class="text-xs text-gray-600 mb-2">Frete GRÁTIS com Prime</div>
                <div class="text-green-600 font-bold text-sm mb-3">Em estoque</div>

                <!-- Quantity -->
                <div class="flex items-center gap-2 mb-3">
                  <label class="text-sm font-bold">Quantidade:</label>
                  <select v-model="quantity" class="border border-amazon-border rounded px-2 py-1 text-sm">
                    <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                  </select>
                </div>

                <!-- Buttons -->
                <button class="btn-yellow w-full font-bold py-2.5 rounded-full mb-2 text-sm">
                  Adicionar ao carrinho
                </button>
                <button class="btn-orange w-full font-bold py-2.5 rounded-full text-sm">
                  Comprar agora
                </button>

                <!-- Extra info -->
                <div class="mt-3 text-xs text-amazon-text space-y-1">
                  <p><strong>Vendido por:</strong> <a href="#" class="text-amazon-link hover:underline">Amazon.com.br</a></p>
                  <p><strong>Enviado por:</strong> <a href="#" class="text-amazon-link hover:underline">Amazon.com.br</a></p>
                  <p><strong>Garantia:</strong> 12 meses pelo fabricante</p>
                </div>

                <!-- Security badge -->
                <div class="mt-3 flex items-center gap-2 text-xs text-gray-600 border-t border-gray-200 pt-3">
                  <span class="text-lg">🔒</span>
                  <span>Transação segura</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <!-- Related products -->
        <ProductCarousel title="Produtos relacionados comprados pelos clientes" :products="relatedProducts" />

        <!-- Product details -->
        <div class="bg-white rounded shadow p-4 md:p-6 mb-4">
          <h2 class="text-xl font-bold text-amazon-text mb-4">Detalhes do produto</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <div v-for="detail in productDetails" :key="detail.key"
                 class="flex gap-2 py-2 border-b border-gray-100 text-sm">
              <span class="font-bold text-amazon-text min-w-32">{{ detail.key }}:</span>
              <span class="text-gray-700">{{ detail.value }}</span>
            </div>
          </div>
        </div>

        <!-- Product description -->
        <div class="bg-white rounded shadow p-4 md:p-6 mb-4">
          <h2 class="text-xl font-bold text-amazon-text mb-4">Descrição do produto</h2>
          <div class="text-sm text-amazon-text space-y-3" :class="{ 'line-clamp-6': !descExpanded }">
            <p>
              O Nintendo Switch 2 é a mais recente console híbrida da Nintendo, combinando jogabilidade portátil e de TV em um único dispositivo com melhorias significativas sobre o original.
            </p>
            <p>
              Com uma tela maior de 7 polegadas e resolução Full HD quando conectado à TV, o Switch 2 oferece uma experiência visual impressionante. O novo Joy-Con 2 apresenta conectores magnéticos para fácil encaixe e melhores capacidades de jogo multiplayer.
            </p>
            <p>
              Inclui Mario Kart World no pacote, o mais recente título da franquia com pistas inéditas, novos personagens e modos de jogo online aprimorados. Compatível com a maioria dos títulos do Nintendo Switch original.
            </p>
            <p>
              Memória interna de 256GB com slot para cartão microSD para expansão. Bateria com até 9 horas de autonomia no modo portátil.
            </p>
          </div>
          <button
            @click="descExpanded = !descExpanded"
            class="text-amazon-link text-sm hover:underline mt-2"
          >
            {{ descExpanded ? 'Mostrar menos ▲' : 'Ler mais ▼' }}
          </button>
        </div>

        <!-- Da Marca banner -->
        <div class="rounded shadow mb-4 overflow-hidden"
             style="background: linear-gradient(135deg, #C0392B 0%, #E74C3C 100%)">
          <div class="flex items-center justify-between px-6 py-6">
            <div class="text-white">
              <p class="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">Da Marca</p>
              <h3 class="text-2xl font-bold mb-2">Nintendo Switch 2</h3>
              <p class="text-sm opacity-90 max-w-sm">
                A nova geração de jogos portáteis com desempenho excepcional e a biblioteca de jogos da Nintendo.
              </p>
              <button class="mt-3 bg-white text-red-600 font-bold px-5 py-2 rounded-full text-sm hover:bg-gray-100 transition-colors">
                Ver todos os produtos Nintendo
              </button>
            </div>
            <div class="text-6xl hidden md:block">🎮</div>
          </div>
        </div>

        <!-- Customer reviews -->
        <div class="bg-white rounded shadow p-4 md:p-6 mb-4">
          <h2 class="text-xl font-bold text-amazon-text mb-4">Avaliações de clientes</h2>

          <!-- Rating overview -->
          <div class="flex flex-col md:flex-row gap-6 mb-6">
            <!-- Average -->
            <div class="flex-none text-center">
              <div class="text-5xl font-bold text-amazon-text">4.5</div>
              <StarRating :rating="4.5" />
              <div class="text-xs text-gray-600 mt-1">2.345 avaliações</div>
            </div>

            <!-- Bars -->
            <div class="flex-1 space-y-1">
              <div v-for="bar in ratingBars" :key="bar.stars" class="flex items-center gap-2 text-sm">
                <a href="#" class="text-amazon-link hover:underline whitespace-nowrap w-16 text-right">
                  {{ bar.stars }} estrelas
                </a>
                <div class="flex-1 bg-gray-200 rounded h-4 overflow-hidden">
                  <div class="bg-amazon-orange h-full rounded" :style="{ width: bar.pct + '%' }"></div>
                </div>
                <span class="text-amazon-link text-xs w-8">{{ bar.pct }}%</span>
              </div>
            </div>
          </div>

          <!-- Write review button -->
          <button class="border border-amazon-border bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-bold mb-6 transition-colors">
            Escreva uma avaliação de cliente
          </button>

          <!-- Sample reviews -->
          <div class="space-y-6">
            <div v-for="review in reviews" :key="review.author" class="border-b border-gray-100 pb-6 last:border-0">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-sm">
                  {{ review.author[0] }}
                </div>
                <span class="font-bold text-sm">{{ review.author }}</span>
              </div>
              <div class="flex items-center gap-2 mb-1">
                <StarRating :rating="review.rating" />
                <span class="font-bold text-sm">{{ review.title }}</span>
              </div>
              <div class="text-xs text-gray-500 mb-2">
                Avaliado no Brasil em {{ review.date }}
                <span v-if="review.verified" class="text-amazon-link ml-2">✓ Compra verificada</span>
              </div>
              <p class="text-sm text-amazon-text">{{ review.text }}</p>
              <div class="flex items-center gap-3 mt-2 text-xs text-gray-600">
                <span>Útil?</span>
                <button class="border border-gray-300 px-2 py-0.5 rounded hover:bg-gray-100">Sim ({{ review.helpful }})</button>
                <button class="border border-gray-300 px-2 py-0.5 rounded hover:bg-gray-100">Não</button>
              </div>
            </div>
          </div>

          <a href="#" class="text-amazon-link text-sm hover:underline block mt-4">
            Ver todas as avaliações ›
          </a>
        </div>

        <!-- Personalized recommendations -->
        <div class="bg-white rounded shadow p-6 text-center mb-4">
          <h2 class="text-xl font-bold text-amazon-text mb-2">Veja recomendações personalizadas</h2>
          <p class="text-sm text-gray-600 mb-4">Faça login para ver produtos recomendados para você.</p>
          <router-link to="/login"
            class="inline-block bg-amazon-yellow hover:bg-amazon-yellow-hover font-bold px-8 py-3 rounded-lg text-amazon-text transition-colors">
            Fazer login
          </router-link>
        </div>

        <!-- More carousels -->
        <ProductCarousel title="Quem viu isso também viu" :products="relatedProducts2" />

      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import SidebarDrawer from '../components/SidebarDrawer.vue'
import StarRating from '../components/StarRating.vue'
import ProductCarousel from '../components/ProductCarousel.vue'

const drawerOpen = ref(false)
const selectedImage = ref(0)
const selectedColor = ref('Vermelho')
const quantity = ref(1)
const descExpanded = ref(false)

const thumbnails = [
  { color: '#C0392B', emoji: '🎮', label: 'Nintendo Switch 2 - Vista frontal' },
  { color: '#A93226', emoji: '🕹️', label: 'Joy-Con 2 destacados' },
  { color: '#1A252F', emoji: '📺', label: 'Modo TV' },
  { color: '#E74C3C', emoji: '🎯', label: 'Mario Kart World' },
  { color: '#922B21', emoji: '🔋', label: 'Dock de carga' },
]

const colors = [
  { name: 'Vermelho', hex: '#C0392B' },
  { name: 'Preto', hex: '#1A252F' },
  { name: 'Branco', hex: '#ECF0F1' },
]

const productDetails = [
  { key: 'Marca', value: 'Nintendo' },
  { key: 'Modelo', value: 'Nintendo Switch 2' },
  { key: 'Plataforma', value: 'Nintendo Switch 2' },
  { key: 'Tipo', value: 'Console Híbrido' },
  { key: 'Memória interna', value: '256 GB' },
  { key: 'Resolução (TV)', value: '1080p / 4K HDR' },
  { key: 'Resolução (Portátil)', value: '1080p Full HD' },
  { key: 'Tamanho da tela', value: '7 polegadas' },
  { key: 'Duração da bateria', value: 'Até 9 horas' },
  { key: 'Conectividade', value: 'Wi-Fi 6, Bluetooth 5.3, USB-C' },
  { key: 'Peso', value: '420g (com Joy-Con 2)' },
  { key: 'Inclui', value: 'Console, Joy-Con 2 (×2), Dock, Cabo HDMI, Código Mario Kart World' },
]

const ratingBars = [
  { stars: 5, pct: 68 },
  { stars: 4, pct: 18 },
  { stars: 3, pct: 7 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 4 },
]

const reviews = [
  {
    author: 'Carlos Silva',
    rating: 5,
    title: 'Melhor console da Nintendo!',
    date: '15 de outubro de 2026',
    verified: true,
    helpful: 234,
    text: 'O Switch 2 superou todas as minhas expectativas. A tela é deslumbrante, os Joy-Con 2 são muito mais confortáveis e o Mario Kart World é simplesmente incrível. Vale cada centavo investido!',
  },
  {
    author: 'Ana Rodrigues',
    rating: 4,
    title: 'Ótimo console, mas poderia ter mais jogos no lançamento',
    date: '10 de outubro de 2026',
    verified: true,
    helpful: 89,
    text: 'Console excelente em termos de hardware. A compatibilidade com os jogos do Switch original é um grande diferencial. Só sinto falta de mais títulos exclusivos no lançamento.',
  },
  {
    author: 'Roberto Ferreira',
    rating: 5,
    title: 'Presente perfeito para o meu filho!',
    date: '5 de outubro de 2026',
    verified: true,
    helpful: 156,
    text: 'Comprei como presente de aniversário e meu filho ficou emocionado. A qualidade de construção é excelente e o Mario Kart World virou febre lá em casa. Recomendo muito!',
  },
]

const relatedProducts = [
  { name: 'Joy-Con 2 Azul/Vermelho', price: 599, rating: 4.7, reviewCount: 1234, prime: true, color: '#2980B9' },
  { name: 'Mario Kart World (Físico)', price: 349, rating: 4.8, reviewCount: 3456, prime: true, color: '#E74C3C' },
  { name: 'Zelda: Echoes of Wisdom', price: 299, rating: 4.9, reviewCount: 2345, prime: true, color: '#27AE60' },
  { name: 'Case de Proteção Switch 2', price: 79, rating: 4.5, reviewCount: 567, prime: true, color: '#7D6608' },
  { name: 'microSD 256GB Samsung', price: 199, rating: 4.6, reviewCount: 8901, prime: true, discount: 20, originalPrice: 249, color: '#566573' },
  { name: 'Pro Controller Nintendo', price: 499, rating: 4.7, reviewCount: 4567, prime: true, color: '#2C3E50' },
]

const relatedProducts2 = [
  { name: 'PS5 Console Digital Edition', price: 3799, rating: 4.8, reviewCount: 9012, prime: true, color: '#2C3E50' },
  { name: 'Xbox Series X 1TB', price: 3999, rating: 4.7, reviewCount: 6789, prime: true, color: '#1E8449' },
  { name: 'Steam Deck OLED', price: 3299, rating: 4.6, reviewCount: 4321, prime: true, color: '#2C3E50' },
  { name: 'Backbone One PS5 Edition', price: 499, rating: 4.4, reviewCount: 2345, prime: true, color: '#1A252F' },
  { name: 'Suporte de Parede Switch 2', price: 59, rating: 4.3, reviewCount: 876, prime: false, color: '#626567' },
  { name: 'Película Vidro Temperado', price: 29, rating: 4.5, reviewCount: 3210, prime: true, color: '#1ABC9C' },
]
</script>

