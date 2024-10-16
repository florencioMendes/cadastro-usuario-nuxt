import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [],
  }),

  actions: {
    async getUsers() {
      try {
        const response = await fetch('/api/users')
        const data = await response.json()

        if (data && data.users) {
          this.users = data.users
        } else {
          console.error('Erro: Estrutura de dados inesperada', data)
        }
      } catch (error) {
        console.error('Erro ao buscar usuários:', error)
      }
    },

    async addUser(newUser) {
      try {
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
      }
    },

    async updateUser(id, updatedData) {
      try {
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
      }
    },

    async deleteUser(id) {
      try {
        await fetch(`/api/users/${id}`, { method: 'DELETE' })

        this.users = this.users.filter(user => user.id !== id)
      } catch (error) {
        console.error('Erro ao deletar usuário:', error)
      }
    },
  },
})
