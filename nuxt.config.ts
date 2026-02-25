// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    devtools: {enabled: false},
    modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icons"],
    app: {
        head: {
            bodyAttrs: {
                class: "bg-black text-white font-semibold font-mono"
            }
        }
    }
})
