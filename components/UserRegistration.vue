<template>
  <form @submit.prevent="registerUser" aria-label="Formulário de Cadastro de Usuários"
    class="bg-white p-6 sm:p-8 rounded-lg shadow-2xl max-w-md mx-auto space-y-6 mt-4 mb-8">
    <h2 class="text-xl sm:text-2xl font-bold mb-2 text-gray-700 text-center">Cadastro de usuário</h2>

    <p class="mb-4 text-sm sm:text-base text-center text-gray-600">
      Preencha o formulário abaixo para cadastrar um novo usuário no sistema.
    </p>

    <label for="name" class="block font-semibold text-gray-700">Nome</label>
    <input v-model="user.name" id="name" placeholder="Nome" required aria-required="true" aria-label="Nome do usuário"
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />

    <label for="email" class="block font-semibold text-gray-700">Email</label>
    <input v-model="user.email" id="email" placeholder="Email" required aria-required="true"
      aria-label="Email do usuário"
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />

    <label for="password" class="block font-semibold text-gray-700">Senha</label>
    <input v-model="user.password" id="password" type="password" placeholder="Senha" required aria-required="true"
      aria-label="Senha do usuário"
      class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" />

    <button type="submit"
      class="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring focus:ring-blue-300">
      Cadastrar Usuário
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useNotificationStore } from '@/stores/notificationStore'

const userStore = useUserStore()
const notificationStore = useNotificationStore()
const user = ref({ name: '', email: '', password: '' })

const registerUser = async () => {
  await userStore.addUser(user.value)
  notificationStore.showNotification(`Usuário ${user.value.name} cadastrado com sucesso!`)
  user.value = { name: '', email: '', password: '' }
}
</script>
