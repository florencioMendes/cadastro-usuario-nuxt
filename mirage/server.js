import { createServer, Model } from "miragejs"

export function makeServer() {
  let server = createServer({
    // environment, por necessitar que o mirage funcione em producao, as condicoes que verificam as variaves de ambiente ficaram comentadas

    models: {
      user: Model,
    },

    routes() {
      this.namespace = "api"

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.post("/users", (schema) => {
        let attrs = JSON.parse(request.requestBody)
        return schema.users.create(attrs)
      })

      this.put("/users/:id", (schema) => {
        let id = request.params.id
        let attrs = JSON.parse(request.requestBody)
        return schema.users.find(id).update(attrs)
      })

      this.delete("/users/:id", (schema) => {
        let id = request.params.id
        return schema.users.find(id).destroy()
      })
    },
  })

  return server
}