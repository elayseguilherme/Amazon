<template>
  <div class="bg-white rounded shadow hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
       @click="$router.push('/produto')">
    <!-- Product Image -->
    <div class="relative overflow-hidden rounded-t">
      <div
        class="w-full flex items-center justify-center text-white font-bold text-xs"
        :style="{ backgroundColor: product.color || '#ccc', height: imageHeight + 'px' }"
      >
        <span class="text-center px-2">{{ product.name }}</span>
      </div>
      <!-- Discount badge -->
      <div v-if="product.discount"
        class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">
        -{{ product.discount }}%
      </div>
      <!-- Prime badge -->
      <div v-if="product.prime"
        class="absolute bottom-2 left-2 bg-amazon-prime text-white text-xs font-bold px-1.5 py-0.5 rounded">
        prime
      </div>
    </div>
    <!-- Product Info -->
    <div class="p-3 flex flex-col flex-1">
      <p class="text-sm text-amazon-text line-clamp-2 mb-1">{{ product.name }}</p>
      <StarRating v-if="product.rating" :rating="product.rating" :count="product.reviewCount" />
      <div class="mt-auto pt-2">
        <div v-if="product.originalPrice" class="text-xs text-gray-500 line-through">
          R$ {{ formatPrice(product.originalPrice) }}
        </div>
        <div class="text-lg font-bold text-amazon-text">
          R$ <span class="text-2xl">{{ formatPrice(product.price) }}</span>
        </div>
        <div v-if="product.installments" class="text-xs text-gray-600">
          em {{ product.installments }}x de R$ {{ formatPrice(product.price / product.installments) }}
        </div>
        <div v-if="product.freeShipping" class="text-xs text-amazon-prime font-bold mt-1">
          Frete GRÁTIS
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarRating from './StarRating.vue'

defineProps({
  product: { type: Object, required: true },
  imageHeight: { type: Number, default: 160 },
})

function formatPrice(val) {
  return Number(val).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
</script>

