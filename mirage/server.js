import { createServer, Factory, Model } from "miragejs";
import { faker } from '@faker-js/faker';

export function makeServer() {
  let server = createServer({
    // environment, por necessitar que o mirage funcione em producao, as condicoes que verificam as variaves de ambiente ficaram comentadas

    models: {
      user: Model,
    },

    factories: {
      user: Factory.extend({
        name() {
          return faker.person.fullName();
        },

        email() {
          return faker.internet.email();
        },

        password() {
          return faker.internet.password();
        }
      })
    },

    seeds(server) {
      server.createList('user', 2)
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema, request) => {
        return schema.users.all()
      })

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return {user: schema.users.create(attrs)}, {timing: 2000}
      })

      this.put("/users/:id", (schema, request) => {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody)
        return {user: schema.users.find(id).update(attrs)}
      })

      this.delete("/users/:id", (schema, request) => {
        let id = request.params.id
        return {user: schema.users.find(id).destroy()}
      })

    },
  })

  return server
}