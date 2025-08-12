import axios from "axios"
import {createClient} from "@supabase/supabase-js";


const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabaseClient = createClient(supabaseURL, supabaseKey, {
    auth: {
        persistSession: true
    },
    global: {
        fetch: (url, options) => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);

            return fetch(url, {
                ...options,
                signal: controller.signal
            }).finally(() => clearTimeout(timeoutId));
        }

    }
})

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