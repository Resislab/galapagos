import {createBrowserRouter} from "react-router-dom"
import {LoginPage} from "@/features/auth/LoginPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>
    },
])