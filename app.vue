<template>
    <main class="min-h-screen bg-white">
        <header class="w-full bg-gray-800 p-4 flex justify-between items-center">
            <h1 class="text-white text-base sm:text-lg font-semibold">Gestão de Usuários</h1>
            <button @click="toggleRegistration"
                class="bg-blue-500 text-white font-semibold py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Alternar entre Cadastro e Listagem">
                {{ isRegistration ? 'Listagem de Usuários' : 'Cadastro de Usuários' }}
            </button>
        </header>

        <section class="flex flex-col items-center justify-center my-4 px-4 sm:px-0">
            <UserRegistration v-if="isRegistration" />
            <ListUsers v-else />
        </section>

        <article v-if="userStore.isLoading" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Loading />
        </article>

        <Notification v-if="notificationStore.isVisible" :message="notificationStore.message"
            class="fixed bottom-4 right-4 sm:right-8" />
    </main>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useNotificationStore } from '@/stores/notificationStore'
import UserRegistration from './components/UserRegistration.vue'
import Notification from './components/Notification.vue'
import ListUsers from './components/ListUsers.vue'

const userStore = useUserStore()
const notificationStore = useNotificationStore()
const isRegistration = ref(true)

const toggleRegistration = async () => {
    isRegistration.value = !isRegistration.value

    if (!isRegistration.value) {
        await userStore.getUsers()
    }
}
</script>
