<template>
  <section class="bg-white rounded shadow mb-4 overflow-hidden">
    <div class="flex items-center justify-between p-4 pb-2">
      <h2 class="text-xl font-bold text-amazon-text">{{ title }}</h2>
      <a v-if="seeMore" href="#" class="text-amazon-link text-sm hover:underline">Ver mais</a>
    </div>
    <div class="relative">
      <!-- Left arrow -->
      <button
        @click="scrollLeft"
        class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 shadow-md w-10 h-16 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-900"
        aria-label="Anterior"
      >&#8249;</button>
      <!-- Scrollable container -->
      <div ref="scrollRef" class="flex gap-3 overflow-x-auto scroll-container px-10 pb-4 pt-2">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="flex-none flex flex-col items-center cursor-pointer group"
          style="width: 100px"
        >
          <div
            class="w-20 h-20 rounded-full flex items-center justify-center text-white text-xs font-bold text-center overflow-hidden border-2 border-transparent group-hover:border-amazon-orange transition-all"
            :style="{ backgroundColor: item.color || '#888' }"
          >
            <span class="text-center px-1">{{ item.label }}</span>
          </div>
          <p class="text-xs text-center mt-2 text-amazon-text group-hover:text-amazon-link leading-tight">
            {{ item.label }}
          </p>
        </div>
      </div>
      <!-- Right arrow -->
      <button
        @click="scrollRight"
        class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-90 shadow-md w-10 h-16 flex items-center justify-center text-2xl text-gray-600 hover:text-gray-900"
        aria-label="Próximo"
      >&#8250;</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  items: { type: Array, required: true },
  seeMore: { type: Boolean, default: false },
})

const scrollRef = ref(null)

function scrollLeft() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}
function scrollRight() {
  if (scrollRef.value) {
    scrollRef.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}
</script>

