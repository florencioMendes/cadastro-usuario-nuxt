<template>
    <section class="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <article v-if="!isEditing">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">{{ user.name }}</h2>
            <p class="text-gray-600 mb-4">
                Email: <a href="mailto:{{ user.email }}" class="text-blue-500 underline">{{ user.email }}</a>
            </p>

            <article class="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4">
                <button @click="deleteUser"
                    class="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto"
                    aria-label="Deletar usuário {{ user.name }}">
                    Deletar
                </button>
                <button @click="toggleEdit"
                    class="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors w-full sm:w-auto"
                    aria-label="Editar usuário {{ user.name }}">
                    Editar
                </button>
            </article>
        </article>

        <article v-else>
            <form @submit.prevent="updateUser" class="space-y-4">
                <label for="name" class="block text-gray-700 font-medium">Nome</label>
                <input v-model="editedUser.name" id="name" placeholder="Nome" required
                    class="w-full p-2 border border-gray-300 rounded-lg" />

                <label for="email" class="block text-gray-700 font-medium">Email</label>
                <input v-model="editedUser.email" id="email" placeholder="Email" required
                    class="w-full p-2 border border-gray-300 rounded-lg" />

                <label for="password" class="block text-gray-700 font-medium">Senha</label>
                <input v-model="editedUser.password" id="password" type="password" placeholder="Senha"
                    class="w-full p-2 border border-gray-300 rounded-lg" />

                <article class="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-4">
                    <button type="submit"
                        class="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto">
                        Salvar
                    </button>
                    <button @click="toggleEdit" type="button"
                        class="bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors w-full sm:w-auto">
                        Cancelar
                    </button>
                </article>
            </form>
        </article>
    </section>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { useNotificationStore } from '@/stores/notificationStore'

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
    notificationStore.showNotification(`Usuário ${props.user.name} atualizado com sucesso!`)
    isEditing.value = false
}
</script>
