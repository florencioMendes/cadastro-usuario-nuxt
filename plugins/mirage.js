import { makeServer } from "~/mirage/server";

export default defineNuxtPlugin(() => {
    // if (process.env.NODE_ENV === "development") {
    // condicao nao implementada pelo projeto requerer que o mirage funcione em producao
        makeServer();
    // }
})
