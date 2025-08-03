import {RouterProvider} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {AuthProvider} from "@/context/AuthContext.tsx";
import {RouterConfig} from "@/router/RouterConfig.tsx";

const queryClient = new QueryClient()

export const App = () => {
    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={RouterConfig}/>
            </QueryClientProvider>
        </AuthProvider>
    )
}
