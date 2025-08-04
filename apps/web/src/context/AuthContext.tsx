import {createContext, ReactNode, useContext, useEffect, useState} from "react"
import {Session} from "@supabase/supabase-js"
import {supabaseClient} from "@/api/client.ts";


interface IAuthContext {
    session: Session | null
    isAuthenticated: boolean
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)

export const AuthProvider = ({children}: { children: ReactNode }) => {
    const [session, setSession] = useState<Session | null>(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        supabaseClient.auth.getSession().then(({data: {session}}) => {
            setSession(session)
            setIsAuthenticated(!!session)
        })

        const {data: {subscription}} = supabaseClient.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setIsAuthenticated(!!session)
        })

        return () => subscription.unsubscribe()
    }, [])


    return (
        <AuthContext.Provider value={{session, isAuthenticated}}>
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
