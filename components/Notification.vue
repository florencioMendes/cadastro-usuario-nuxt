<template>
  <article v-if="visible" :class="`notification ${typeClasses}`">
    <p class="flex-1">{{ message }}</p>
    <button @click="hide" class="text-xl font-bold focus:outline-none">&times;</button>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'success', // pode ser 'success', 'error', 'info', 'warning'
  },
})

const visible = ref(true)

const hide = () => {
  visible.value = false
}

const typeClasses = computed(() => {
  switch (props.type) {
    case 'success':
      return 'bg-green-100 text-green-800 border-green-300'
    case 'error':
      return 'bg-red-100 text-red-800 border-red-300'
    case 'info':
      return 'bg-blue-100 text-blue-800 border-blue-300'
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 border-yellow-300'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-300'
  }
})
</script>

<style scoped>
.notification {
  @apply flex items-center justify-between border rounded-lg p-4 max-w-sm mx-auto mb-4 shadow-md transition-all duration-500;
}
</style>
