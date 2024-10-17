import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
    isLoading: false,
  }),

  actions: {
    async getUsers() {

      
      try {
        this.isLoading = true

        const response = await fetch('/api/users')
        const data = await response.json()

        if (data && data.users) {
          this.users = data.users
        } else {
          console.error('Erro: Estrutura de dados inesperada', data)
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      } finally {
        this.isLoading = false
      }
    },

    async addUser(newUser) {
      try {
        this.isLoading = true

        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        })

        const data = await response.json()
        if (data) {
          this.users.push(data.user)
        }
      } catch (error) {
        console.error('Erro ao adicionar usuário:', error)
      } finally {
        this.isLoading = false
      }
    },

    async updateUser(id, updatedData) {
      try {
        this.isLoading = true

        const response = await fetch(`/api/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
        })

        const data = await response.json()
        if (data) {
          const index = this.users.findIndex(user => user.id === id)
          if (index !== -1) {
            this.users[index] = data.user
          }
        }
      } catch (error) {
        console.error('Erro ao atualizar usuário:', error)
      } finally {
        this.isLoading = false
      }
    },

    async deleteUser(id) {
      try {
        this.isLoading = true

        await fetch(`/api/users/${id}`, { method: 'DELETE' })

        this.users = this.users.filter(user => user.id !== id)
      } catch (error) {
        console.error('Erro ao deletar usuário:', error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
