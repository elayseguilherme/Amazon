<template>
  <!-- Star Rating Component -->
  <span class="inline-flex items-center gap-0.5">
    <span v-for="i in 5" :key="i" class="text-amazon-orange text-sm">
      <template v-if="i <= fullStars">★</template>
      <template v-else-if="i === halfStarIndex && hasHalf">⯨</template>
      <template v-else>☆</template>
    </span>
    <span v-if="count" class="text-amazon-link text-sm ml-1 hover:text-orange-600 cursor-pointer">
      {{ formatCount(count) }}
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rating: { type: Number, default: 0 },
  count: { type: Number, default: 0 },
})

const fullStars = computed(() => Math.floor(props.rating))
const hasHalf = computed(() => props.rating % 1 >= 0.5)
const halfStarIndex = computed(() => fullStars.value + 1)

function formatCount(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n.toString()
}
</script>

