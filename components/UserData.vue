<template>
    <section>
        <article v-if="!isEditing">
            <h2>{{ user.name }}</h2>
            <p>Email: <a href="mailto:{{ user.email }}">{{ user.email }}</a></p>

            <button @click="deleteUser" aria-label="Deletar usuário {{ user.name }}">Deletar</button>
            <button @click="toggleEdit" aria-label="Editar usuário {{ user.name }}">Editar</button>
        </article>
        
        <article v-else>
            <form @submit.prevent="updateUser">
                <label for="name">Nome</label>
                <input v-model="editedUser.name" id="name" placeholder="Nome" />
                
                <label for="email">Email</label>
                <input v-model="editedUser.email" id="email" placeholder="Email" />

                <label for="password">Senha</label>
                <input v-model="editedUser.password" id="password" type="password" placeholder="Senha" />

                <button type="submit">Salvar</button>
            </form>
        </article>
    </section>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useNotificationStore } from '@/stores/notificationStore'
import Notification from './components/Notification.vue'

const props = defineProps(['user'])
const userStore = useUserStore()
const notificationStore = useNotificationStore()
const isEditing = ref(false)
const editedUser = ref({ ...props.user })

watch(props.user, (newUser) => {
    editedUser.value = { ...newUser }
})

const deleteUser = async () => {
    await userStore.deleteUser(props.user.id)
    notificationStore.showNotification(`Usuário ${props.user.name} deletado com sucesso!`)
}

const toggleEdit = () => {
    isEditing.value = !isEditing.value
}

const updateUser = async () => {
    await userStore.updateUser(props.user.id, editedUser.value)
    notificationStore.showNotification(`Usuário ${props.user.name}atualizado com sucesso!`)
    isEditing.value = false
}
</script>
