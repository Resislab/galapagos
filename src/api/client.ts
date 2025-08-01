import axios from "axios"
import {getObjectFromLocalStorage} from "@/storage/localStorage.ts"
import {AuthenticationType} from "@/api/types.ts"
import {authenticationLocalStorageKey} from "@/context/AuthContext.tsx"

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
})

apiClient.interceptors.request.use(
    async (config) => {
        const authentication: AuthenticationType | undefined = getObjectFromLocalStorage<AuthenticationType>(authenticationLocalStorageKey)

        if (authentication) {
            const token: string = authentication.access_token
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)