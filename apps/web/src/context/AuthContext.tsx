import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react"
import {getObjectFromLocalStorage} from "@/storage/localStorage.ts"
import {AuthenticationType} from "@/api/types.ts"

interface IAuthContext {
    token: string | null
    isAuthenticated: boolean
    logout: () => void
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const authenticationLocalStorageKey = "authentication"

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [token, setToken] = useState<string | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const logout: () => void = useCallback(() => {
        setToken(null)
        setIsAuthenticated(false)
        localStorage.removeItem(authenticationLocalStorageKey)
    }, [])

    useEffect(() => {
        try {
            const authentication: AuthenticationType | undefined = getObjectFromLocalStorage<AuthenticationType>(authenticationLocalStorageKey)
            if (authentication && new Date().getTime() < new Date(authentication.expires_at).getTime() * 1000) {
                setToken(authentication.access_token)
                setIsAuthenticated(true)
            } else {
                localStorage.removeItem(authenticationLocalStorageKey)
                setIsAuthenticated(false)
            }
        } catch {
            localStorage.removeItem(authenticationLocalStorageKey)
            setIsAuthenticated(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{token, isAuthenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): IAuthContext => {
    const context: IAuthContext | undefined = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
