import { createServer, Model } from "miragejs"

export function makeServer() {
  let server = createServer({
    // environment, por necessitar que o mirage funcione em producao, as condicoes que verificam as variaves de ambiente ficaram comentadas

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema, request) => {
        return schema.users.all()
      })

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        return {user: schema.users.create(attrs)}
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