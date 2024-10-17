<template>
    <form @submit.prevent="registerUser" aria-label="Formulário de Cadastro de Usuários">
        <h2>Cadastrar Usuário</h2>
        <label for="name">Nome</label>
        <input 
            v-model="user.name" 
            id="name" 
            placeholder="Nome" 
            required 
            aria-required="true" 
            aria-label="Nome do usuário"
        />
        
        <label for="email">Email</label>
        <input 
            v-model="user.email" 
            id="email" 
            placeholder="Email" 
            required 
            aria-required="true" 
            aria-label="Email do usuário"
        />

        <label for="password">Senha</label>
        <input 
            v-model="user.password" 
            id="password" 
            type="password" 
            placeholder="Senha" 
            required 
            aria-required="true" 
            aria-label="Senha do usuário"
        />

        <button type="submit">Cadastrar Usuário</button>
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
