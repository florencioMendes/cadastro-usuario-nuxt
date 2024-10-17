<template>
    <section class="bg-white p-6 sm:p-8 rounded-lg shadow-2xl max-w-lg sm:max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold mb-4 sm:mb-6 text-center text-gray-700">
            Lista de Usuários
        </h2>
        <p class="mb-4 sm:mb-6 text-center text-gray-600">
            Veja abaixo a lista de usuários cadastrados
        </p>

        <article v-for="user in userStore.users" :key="user.id" class="bg-gray-50 p-4 sm:p-6 rounded-lg mb-4 shadow-md">
            <UserData :user="user" />
        </article>
    </section>
</template>

<script setup>
import UserData from './components/UserData.vue'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
</script>
