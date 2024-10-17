import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
    const message = ref('')
    const isVisible = ref(false)

    const showNotification = (msg) => {
        message.value = msg
        isVisible.value = true

        setTimeout(() => {
            isVisible.value = false
            message.value = ''
        }, 3000)
    }

    return { message, isVisible, showNotification }
})
