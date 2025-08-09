import {RouteUrls} from "@/router/route-urls.ts";
import {SignInPage} from "@/features/auth/SignIn/SignInPage.tsx";
import {SignUpPage} from "@/features/auth/SignUp/SignUpPage.tsx";
import {SidebarLayout} from "@/components/sidebar/SidebarLayout.tsx";

export const UnprotectedRoutes = [
    {
        path: RouteUrls.SIGN_IN(),
        element: <SignInPage/>
    },
    {
        path: RouteUrls.SIGN_UP(),
        element: <SignUpPage/>
    },
    {
        path: RouteUrls.ROOT(),
        element: <SidebarLayout/>
    },
]