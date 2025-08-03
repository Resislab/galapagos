import {RouterProvider} from "react-router-dom"
import {router} from "@/router.tsx"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {AuthProvider} from "@/context/AuthContext.tsx";

const queryClient = new QueryClient()


export const App = () => {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}/>
            </QueryClientProvider>
        </AuthProvider>
    )
}
