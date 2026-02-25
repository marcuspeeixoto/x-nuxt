// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2026-02-25",
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
