import axios from "axios"
import {createClient} from "@supabase/supabase-js";


const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log("supabaseURL", supabaseURL)
export const supabaseClient = createClient(supabaseURL, supabaseKey)

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

apiClient.interceptors.request.use(
    async (config) => {
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)