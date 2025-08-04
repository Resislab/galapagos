import {createBrowserRouter} from "react-router-dom"
import {ProtectedRoute} from "@/features/auth/ProtectedRoute.tsx";
import {UnprotectedRoutes} from "@/router/UnprotectedRoutes.tsx";
import {ProtectedRoutes} from "@/router/ProtectedRoutes.tsx";


export const RouterConfig = createBrowserRouter([
    ...UnprotectedRoutes,
    {
        path: "/",
        element: <ProtectedRoute/>,
        children: ProtectedRoutes
    }
])