<template>
  <section class="bg-white rounded shadow mb-4 overflow-hidden">
    <div class="flex items-center justify-between p-4 pb-2">
      <h2 class="text-xl font-bold text-amazon-text">{{ title }}</h2>
      <a v-if="seeMore" href="#" class="text-amazon-link text-sm hover:text-orange-600 hover:underline">
        Ver mais
      </a>
    </div>
    <div class="relative">
      <!-- Left arrow -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-md w-10 h-16 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-900 transition-all"
        aria-label="Anterior"
      >&#8249;</button>
      <!-- Scrollable container -->
      <div ref="scrollRef" class="flex gap-3 overflow-x-auto scroll-container px-10 pb-4 pt-2">
        <div
          v-for="(product, i) in products"
          :key="i"
          class="flex-none"
          :style="{ width: cardWidth + 'px' }"
        >
          <ProductCard :product="product" :imageHeight="imageH" />
        </div>
      </div>
      <!-- Right arrow -->
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 shadow-md w-10 h-16 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-900 transition-all"
        aria-label="Próximo"
      >&#8250;</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'

const props = defineProps({
  title: { type: String, required: true },
  products: { type: Array, required: true },
  seeMore: { type: Boolean, default: true },
  cardWidth: { type: Number, default: 180 },
  imageH: { type: Number, default: 150 },
})

const scrollRef = ref(null)

function scrollLeft() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: -(props.cardWidth + 12) * 3, behavior: 'smooth' })
  }
}
function scrollRight() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: (props.cardWidth + 12) * 3, behavior: 'smooth' })
  }
}
</script>

