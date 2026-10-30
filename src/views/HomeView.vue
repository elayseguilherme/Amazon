<template>
  <div class="min-h-screen flex flex-col" style="background-color: #EAEDED">
    <AppHeader @toggle-drawer="drawerOpen = true" />
    <SidebarDrawer :is-open="drawerOpen" @close="drawerOpen = false" />

    <main class="flex-1">
      <!-- Hero Banner -->
      <HeroBanner />

      <!-- Main content area -->
      <div class="max-w-7xl mx-auto px-3 md:px-4 py-4">

        <!-- 3-column product grid sections -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">

          <!-- Card 1: Ofertas de Páscoa -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-3">Ofertas para aproveitar a Páscoa</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="p in pascoa" :key="p.name"
                   class="cursor-pointer group" @click="$router.push('/produto')">
                <div class="h-28 rounded flex items-center justify-center text-white text-xs font-bold text-center"
                     :style="{ backgroundColor: p.color }">
                  <span class="px-1">{{ p.name }}</span>
                </div>
                <p class="text-xs mt-1 text-amazon-link group-hover:underline">{{ p.label }}</p>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline block mt-3">Ver todas as ofertas</a>
          </div>

          <!-- Card 2: Melhores avaliadas -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-3">Ofertas melhores avaliadas</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="p in topRated" :key="p.name"
                   class="cursor-pointer group relative" @click="$router.push('/produto')">
                <div class="relative h-28 rounded overflow-hidden flex items-center justify-center text-white text-xs font-bold text-center"
                     :style="{ backgroundColor: p.color }">
                  <span class="px-1">{{ p.name }}</span>
                  <span class="absolute top-1 left-1 bg-red-600 text-white text-xs px-1 rounded">-{{ p.discount }}%</span>
                </div>
                <p class="text-xs mt-1 text-amazon-text group-hover:text-amazon-link">R$ {{ p.price }}</p>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline block mt-3">Ver mais</a>
          </div>

          <!-- Card 3: Beleza -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-3">Eleve sua rotina de beleza</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="p in beauty" :key="p.name"
                   class="cursor-pointer group" @click="$router.push('/produto')">
                <div class="h-28 rounded flex items-center justify-center text-white text-xs font-bold text-center"
                     :style="{ backgroundColor: p.color }">
                  <span class="px-1">{{ p.name }}</span>
                </div>
                <p class="text-xs mt-1 text-amazon-link group-hover:underline">{{ p.name }}</p>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline block mt-3">Ver coleção</a>
          </div>

          <!-- Card 4: Login CTA -->
          <div class="bg-white rounded shadow p-6 flex flex-col justify-between">
            <div>
              <h2 class="text-lg font-bold text-amazon-text mb-2">Acesse uma conta para ter a melhor experiência</h2>
              <p class="text-sm text-gray-600 mb-4">Veja recomendações personalizadas e acompanhe seus pedidos.</p>
            </div>
            <router-link to="/login"
              class="btn-yellow text-center block font-bold py-2 rounded-lg text-amazon-text">
              Fazer login
            </router-link>
          </div>

          <!-- Card 5: Especial Páscoa -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-3">Especial de Páscoa</h2>
            <div
              class="h-40 rounded flex items-center justify-center text-white font-bold cursor-pointer mb-3"
              style="background: linear-gradient(135deg, #8B4513, #D2691E)"
              @click="$router.push('/produto')"
            >
              <div class="text-center">
                <div class="text-4xl mb-2">🐣</div>
                <div class="text-sm">Ovos de Páscoa Premium</div>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline">Explorar ofertas de Páscoa</a>
          </div>

          <!-- Card 6: Kindle -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-2">Conheça Kindle 11ª Geração</h2>
            <div
              class="h-40 rounded flex items-center justify-center text-white font-bold cursor-pointer mb-3"
              style="background: linear-gradient(135deg, #1a1a2e, #16213e)"
              @click="$router.push('/produto')"
            >
              <div class="text-center">
                <div class="text-4xl mb-2">📖</div>
                <div class="text-sm">Kindle 11ª Geração</div>
                <div class="text-xs text-amazon-prime mt-1">A partir de R$ 599</div>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline">Saiba mais sobre o Kindle</a>
          </div>
        </div>

        <!-- Second grid row -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <!-- Cashback card -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-2">Até 5% da fatura de volta em pontos</h2>
            <div
              class="h-32 rounded flex items-center justify-center font-bold cursor-pointer mb-3"
              style="background: linear-gradient(135deg, #FFD814, #FFA41C)"
            >
              <div class="text-center text-amazon-dark">
                <div class="text-3xl mb-1">💳</div>
                <div class="text-sm">Cartão Amazon</div>
                <div class="text-xs">5% de volta em pontos</div>
              </div>
            </div>
            <button class="btn-yellow w-full text-sm font-bold py-2 rounded">Solicitar cartão</button>
          </div>

          <!-- Especial Páscoa top products -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-3">Páscoa em destaque</h2>
            <div class="grid grid-cols-2 gap-2">
              <div v-for="p in pascoa2" :key="p.name"
                   class="cursor-pointer group" @click="$router.push('/produto')">
                <div class="h-24 rounded flex items-center justify-center text-white text-xs text-center"
                     :style="{ backgroundColor: p.color }">
                  <span class="px-1">{{ p.name }}</span>
                </div>
                <p class="text-xs mt-1 text-gray-600">{{ p.price }}</p>
              </div>
            </div>
          </div>

          <!-- Prime Video promo -->
          <div class="bg-white rounded shadow p-4">
            <h2 class="text-lg font-bold text-amazon-text mb-2">Prime Video</h2>
            <div
              class="h-32 rounded flex items-center justify-center text-white font-bold cursor-pointer mb-3"
              style="background: linear-gradient(135deg, #00A8CC, #007185)"
            >
              <div class="text-center">
                <div class="text-3xl mb-1">🎬</div>
                <div class="text-sm">Jovem Sherlock</div>
                <div class="text-xs">Assista Agora</div>
              </div>
            </div>
            <a href="#" class="text-amazon-link text-sm hover:underline">Ver catálogo completo</a>
          </div>
        </div>

        <!-- Category Carousel: Páscoa -->
        <CategoryCarousel title="Especial de Páscoa" :items="pascCategories" />

        <!-- Product Carousel: Páscoa na Cozinha -->
        <ProductCarousel title="Páscoa na Cozinha" :products="kitchenProducts" />

        <!-- Category horizontal scroll: Mais amados -->
        <section class="bg-white rounded shadow mb-4 overflow-hidden">
          <div class="flex items-center justify-between p-4 pb-2">
            <h2 class="text-xl font-bold text-amazon-text">Mais amados por categoria</h2>
            <a href="#" class="text-amazon-link text-sm hover:underline">Ver mais</a>
          </div>
          <div class="relative">
            <div ref="lovedRef" class="flex gap-4 overflow-x-auto scroll-container px-4 pb-4 pt-2">
              <div v-for="cat in lovedCategories" :key="cat.label"
                   class="flex-none flex flex-col items-center gap-2 cursor-pointer group" style="width: 110px">
                <div class="w-24 h-24 rounded-lg flex items-center justify-center text-white text-2xl shadow-md group-hover:shadow-lg transition-shadow"
                     :style="{ backgroundColor: cat.color }">
                  {{ cat.emoji }}
                </div>
                <span class="text-xs text-center text-amazon-text group-hover:text-amazon-link">{{ cat.label }}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Novidades na Amazon -->
        <section class="bg-white rounded shadow mb-4 overflow-hidden">
          <div class="p-4 pb-2">
            <h2 class="text-xl font-bold text-amazon-text">Novidades na Amazon por categoria</h2>
          </div>
          <div class="flex gap-2 overflow-x-auto scroll-container px-4 pb-3 pt-1">
            <button
              v-for="cat in novCategories"
              :key="cat"
              class="flex-none px-4 py-2 text-sm rounded-full border border-amazon-border hover:border-amazon-orange hover:bg-orange-50 transition-all whitespace-nowrap"
            >
              {{ cat }}
            </button>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-4">
            <div v-for="p in novidades" :key="p.name"
                 class="cursor-pointer group" @click="$router.push('/produto')">
              <div class="h-36 rounded flex items-center justify-center text-white text-xs text-center"
                   :style="{ backgroundColor: p.color }">
                <span class="px-2">{{ p.name }}</span>
              </div>
              <p class="text-xs mt-1 text-amazon-text group-hover:text-amazon-link">{{ p.name }}</p>
              <p class="text-xs text-gray-600">R$ {{ p.price }}</p>
            </div>
          </div>
        </section>

        <!-- Veja recomendações personalizadas -->
        <div class="bg-white rounded shadow p-6 text-center mb-4">
          <h2 class="text-xl font-bold text-amazon-text mb-2">Veja recomendações personalizadas</h2>
          <p class="text-sm text-gray-600 mb-4">Faça login para ver produtos recomendados exclusivamente para você.</p>
          <router-link to="/login"
            class="inline-block bg-amazon-yellow hover:bg-amazon-yellow-hover font-bold px-8 py-3 rounded-lg text-amazon-text transition-colors">
            Fazer login
          </router-link>
          <p class="text-xs text-gray-500 mt-3">
            Novo cliente?
            <router-link to="/login" class="text-amazon-link hover:underline">Comece aqui</router-link>
          </p>
        </div>

        <!-- Main product carousels -->
        <ProductCarousel title="Mais vendidos em Eletrônicos" :products="electronicsProducts" />
        <ProductCarousel title="Lançamentos em Games" :products="gamesProducts" />
        <ProductCarousel title="Ofertas em Casa e Cozinha" :products="homeProducts" />

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
import HeroBanner from '../components/HeroBanner.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductCarousel from '../components/ProductCarousel.vue'
import CategoryCarousel from '../components/CategoryCarousel.vue'

const drawerOpen = ref(false)

// Data
const pascoa = [
  { name: 'Ovos de Páscoa Nestlé', label: 'Chocolate ao leite', color: '#8B4513' },
  { name: 'Kit Decoração', label: 'Cestas decoradas', color: '#D2691E' },
  { name: 'Chocolate Belga', label: 'Premium importado', color: '#5C3317' },
  { name: 'Coelho Pelúcia', label: 'Para crianças', color: '#CD853F' },
]

const topRated = [
  { name: 'Fone Bluetooth', color: '#2C3E50', discount: 35, price: '149,90' },
  { name: 'Smart Watch', color: '#1A252F', discount: 28, price: '299,00' },
  { name: 'Câmera IP', color: '#2980B9', discount: 20, price: '189,00' },
  { name: 'Tablet 10"', color: '#8E44AD', discount: 15, price: '599,00' },
]

const beauty = [
  { name: 'Sérum Facial', color: '#E8B4B8' },
  { name: 'Kit Skincare', color: '#C8A2C8' },
  { name: 'Perfume Nacional', color: '#DDA0DD' },
  { name: 'Hidratante Corporal', color: '#FFB6C1' },
]

const pascoa2 = [
  { name: 'Ovo Trufado', color: '#6B3A2A', price: 'R$ 89,90' },
  { name: 'Kit Mesa Posta', color: '#A0522D', price: 'R$ 129,00' },
  { name: 'Coelho Recheado', color: '#CD853F', price: 'R$ 45,00' },
  { name: 'Cesta Premium', color: '#8B6914', price: 'R$ 199,00' },
]

const pascCategories = [
  { label: 'Tudo em Páscoa', color: '#8B4513' },
  { label: 'Tachas de Ofertas', color: '#D2691E' },
  { label: 'Ovos de Chocolate', color: '#3E1C00' },
  { label: 'Personagens', color: '#CD853F' },
  { label: 'Kits Personalizados', color: '#A0522D' },
  { label: 'Livros Infantis', color: '#6B4226' },
  { label: 'Decoração', color: '#C67C4E' },
  { label: 'Para Adultos', color: '#7B3F00' },
]

const kitchenProducts = [
  { name: 'Forma de Ovos de Páscoa Silicone', price: 39.9, rating: 4.5, reviewCount: 1234, prime: true, color: '#E74C3C' },
  { name: 'Kit Confeitaria Premium', price: 89.9, rating: 4.3, reviewCount: 856, prime: true, color: '#E67E22' },
  { name: 'Chocolate em Pó 1kg', price: 24.9, rating: 4.7, reviewCount: 3421, prime: false, color: '#8B4513' },
  { name: 'Molde de Chocolate Profissional', price: 49.9, rating: 4.1, reviewCount: 567, prime: true, discount: 20, originalPrice: 62.9, color: '#C0392B' },
  { name: 'Corante Alimentício Kit', price: 35.9, rating: 4.4, reviewCount: 789, prime: true, color: '#9B59B6' },
  { name: 'Termômetro Culinário', price: 59.9, rating: 4.6, reviewCount: 1102, prime: true, discount: 15, originalPrice: 70.5, color: '#2980B9' },
  { name: 'Pincel de Silicone Set', price: 19.9, rating: 4.2, reviewCount: 445, prime: false, color: '#27AE60' },
  { name: 'Espátula Profissional', price: 29.9, rating: 4.5, reviewCount: 678, prime: true, color: '#F39C12' },
]

const lovedCategories = [
  { label: 'Moda', color: '#E91E63', emoji: '👗' },
  { label: 'Jardinagem', color: '#4CAF50', emoji: '🌱' },
  { label: 'Universo Gamer', color: '#9C27B0', emoji: '🎮' },
  { label: 'Life Style', color: '#FF9800', emoji: '✨' },
  { label: 'Vida Saudável', color: '#00BCD4', emoji: '🏃' },
  { label: 'HotDog', color: '#F44336', emoji: '🌭' },
  { label: 'Eletrônicos', color: '#2196F3', emoji: '📱' },
  { label: 'Livros', color: '#795548', emoji: '📚' },
  { label: 'Pets', color: '#FF5722', emoji: '🐾' },
]

const novCategories = [
  'Todas as novidades', 'Bebês', 'Casa', 'Cozinha', 'Moda', 'Eletrodomésticos', 'Mubi', 'Games'
]

const novidades = [
  { name: 'Monitor 4K Ultra HD', price: '1.299,00', color: '#1A252F' },
  { name: 'Teclado Mecânico RGB', price: '299,00', color: '#2C3E50' },
  { name: 'Mouse Gamer Sem Fio', price: '189,00', color: '#2980B9' },
  { name: 'Headset 7.1 Surround', price: '249,00', color: '#8E44AD' },
]

const electronicsProducts = [
  { name: 'Smartphone Samsung Galaxy A55', price: 1899, rating: 4.5, reviewCount: 8234, prime: true, discount: 12, originalPrice: 2159, color: '#1A252F' },
  { name: 'Notebook Dell Inspiron 15', price: 3299, rating: 4.3, reviewCount: 3456, prime: true, color: '#2C3E50' },
  { name: 'Smart TV 55" 4K LG', price: 2699, rating: 4.6, reviewCount: 5678, prime: true, discount: 25, originalPrice: 3599, color: '#17202A' },
  { name: 'Fone de Ouvido Sony WH-1000XM5', price: 1499, rating: 4.8, reviewCount: 12567, prime: true, color: '#1C2833' },
  { name: 'Tablet iPad 10ª Geração', price: 3499, rating: 4.7, reviewCount: 9012, prime: true, color: '#2E4057' },
  { name: 'Echo Dot 5ª Geração', price: 349, rating: 4.5, reviewCount: 45678, prime: true, discount: 30, originalPrice: 499, color: '#1B4F72' },
  { name: 'Impressora HP DeskJet', price: 499, rating: 4.2, reviewCount: 2345, prime: false, color: '#154360' },
  { name: 'Roteador Wi-Fi 6 TP-Link', price: 399, rating: 4.4, reviewCount: 1876, prime: true, color: '#1A5276' },
]

const gamesProducts = [
  { name: 'Nintendo Switch 2', price: 4885, rating: 4.9, reviewCount: 2345, prime: true, color: '#C0392B' },
  { name: 'PS5 Console', price: 4299, rating: 4.8, reviewCount: 8901, prime: true, color: '#2C3E50' },
  { name: 'Xbox Series X', price: 3999, rating: 4.7, reviewCount: 5678, prime: true, color: '#1E8449' },
  { name: 'Mario Kart World', price: 349, rating: 4.8, reviewCount: 1234, prime: true, color: '#E74C3C' },
  { name: 'The Legend of Zelda: Echoes', price: 299, rating: 4.9, reviewCount: 3456, prime: true, color: '#27AE60' },
  { name: 'Controle PS5 DualSense', price: 599, rating: 4.6, reviewCount: 4567, prime: true, discount: 10, originalPrice: 666, color: '#8E44AD' },
  { name: 'Headset Gamer HyperX', price: 299, rating: 4.4, reviewCount: 2890, prime: false, color: '#C0392B' },
  { name: 'Cadeira Gamer DXRacer', price: 1599, rating: 4.3, reviewCount: 1234, prime: true, color: '#1A252F' },
]

const homeProducts = [
  { name: 'Panela de Pressão Elétrica Mondial', price: 299, rating: 4.5, reviewCount: 12345, prime: true, discount: 20, originalPrice: 374, color: '#E74C3C' },
  { name: 'Air Fryer Philips Walita 4L', price: 499, rating: 4.7, reviewCount: 23456, prime: true, color: '#C0392B' },
  { name: 'Cafeteira Nespresso Essenza Mini', price: 799, rating: 4.6, reviewCount: 8901, prime: true, color: '#1A252F' },
  { name: 'Liquidificador Mondial Turbo', price: 149, rating: 4.3, reviewCount: 5678, prime: false, color: '#2980B9' },
  { name: 'Aspirador Robô iRobot Roomba', price: 1999, rating: 4.5, reviewCount: 3456, prime: true, discount: 15, originalPrice: 2352, color: '#566573' },
  { name: 'Kit Organização Closet', price: 89, rating: 4.2, reviewCount: 2345, prime: true, color: '#7D6608' },
  { name: 'Conjunto Panelas Antiaderente', price: 249, rating: 4.4, reviewCount: 6789, prime: true, color: '#1E8449' },
  { name: 'Escorredor de Pratos Inox', price: 79, rating: 4.1, reviewCount: 890, prime: false, color: '#626567' },
]
</script>

