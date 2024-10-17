<template>
    <div v-if="visible" class="notification" :class="type">
      <p>{{ message }}</p>
      <button @click="hide">Fechar</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'success',
    },
  })
  
  const visible = ref(true)
  
  const hide = () => {
    visible.value = false
  }
  </script>
  
  <style scoped>
  .notification {
    padding: 16px;
    border-radius: 5px;
    margin: 10px 0;
  }
  .success {
    background-color: #dff0d8;
    color: #3c763d;
  }
  .error {
    background-color: #f2dede;
    color: #a94442;
  }
  </style>
  