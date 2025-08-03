import {RouterProvider} from "react-router-dom"
import {router} from "@/router.tsx"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {AuthProvider, useAuth} from "@/context/AuthContext.tsx";
import {LoginPage} from "@/features/auth/LoginPage.tsx";

const queryClient = new QueryClient()

const AppContent = () => {
    const {isAuthenticated} = useAuth()
    console.log("isAuthenticated", isAuthenticated)
    if (!isAuthenticated) {
        return <LoginPage/>
    }

    return <RouterProvider router={router}/>
}


export const App = () => {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <AppContent/>
            </QueryClientProvider>
        </AuthProvider>
    )
}
