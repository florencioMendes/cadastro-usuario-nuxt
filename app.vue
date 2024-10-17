<template>
    <main>
        <section v-if="isRegistration">
            <h2>Cadastro de Usuários</h2>
            <p>Preencha o formulário abaixo para cadastrar um novo usuário no sistema.</p>
            <UserRegistration />
            <button @click="toggleRegistration" aria-label="Listar Usuários">Listar Usuários</button>
        </section>
        
        <section v-else>
            <h2>Lista de Usuários</h2>
            <p>Veja abaixo a lista de usuários cadastrados:</p>
            <article v-for="user in userStore.users" :key="user.id">
                <UserData :user="user" />
            </article>
            <button @click="toggleRegistration" aria-label="Cadastrar Usuários">Cadastrar Usuários</button>
        </section>
        
        <div v-if="userStore.isLoading">
            <Loading />
        </div>

        <Notification v-if="notificationStore.isVisible" :message="notificationStore.message" />
    </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useNotificationStore } from '@/stores/notificationStore'
import UserRegistration from './components/UserRegistration.vue'
import UserData from './components/UserData.vue'
import Notification from './components/Notification.vue'

const userStore = useUserStore()
const notificationStore = useNotificationStore()
const isRegistration = ref(true)

const toggleRegistration = async () => {
    isRegistration.value = !isRegistration.value

    if(!isRegistration.value) {
        await userStore.getUsers()
    }
}

</script>
