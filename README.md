# Projeto de Cadastro de Usuários

## Descrição

Este projeto é um sistema de cadastro de usuários desenvolvido em Vue.js com Nuxt.js. O objetivo é permitir que usuários se registrem facilmente, proporcionando uma interface amigável e intuitiva. O sistema armazena informações dos usuários persistindo com api mock utilizando mirageJS, possui controle de estado gerenciado pelo Pinia e permite notificações de sucesso ao cadastrar novos usuários.

## Objetivo

O principal objetivo deste projeto é fornecer uma solução prática e eficiente para o cadastro de usuários. Através de uma interface limpa e responsiva, pode-se cadastrar novos usuários, listar, editar e deletar.

## Funcionalidades

- Cadastro de usuários com nome, email e senha.
- Notificações de sucesso após o registro.
- Armazenamento de dados do usuário usando Pinia.
- Persistencia dos dados com API Mock utilizando MirageJS

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **Nuxt.js**: Framework para Vue.js que facilita a criação de aplicações universais.
- **Pinia**: Gerenciador de estado para Vue.js.
- **MirageJS**: Persistencia de dados

## Pré-requisitos

- Node.js e npm instalados.
- Um editor de código (ex: Visual Studio Code).

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/florencioMendes/cadastro-usuario-nuxt.git

2. Navegue até o diretório do projeto:
   ```bash
   cd cadastro-usuario-nuxt

3. Instale as dependências:
   ```bash
    npm install

## Uso
- Para iniciar o servidor de desenvolvimento, execute:
   ```bash
    npm run dev

Acesse a aplicação em seu navegador no endereço http://localhost:3000.

## Estrutura do Projeto
   ```bash
cadastro-usuario-nuxt/
├── components/
│   └── ListUsers.vue         # Componente de listagem de usuarios
│   └── Loading.vue           # Componente para informar usuario o estado de loading
│   └── Notification.vue      # Componente para notificar eventos realizados pelo usuario
│   └── UserData.vue          # Componente para editar e exibir informações de um usuário
│   └── UserRegistration.vue  # Componente de cadastro de usuário
├── mirage/
│   └── server.js             # Configuração api mock mirage
├── plugins/
│   └── mirage.js             # Configuração para mirage funcionar ao iniciar a aplicação
├── stores/
│   ├── userStore.js          # Armazenamento de estado dos usuários
│   └── notificationStore.js  # Armazenamento de estado para notificações
 
├── App.vue                   # Componente principal
