import {RouteUrls} from "@/router/route-urls.ts";
import {SignInPage} from "@/features/auth/SignInPage.tsx";
import {SignUpPage} from "@/features/auth/SignUpPage.tsx";

export const UnprotectedRoutes = [
    {
        path: RouteUrls.SIGN_IN(),
        element: <SignInPage/>
    },
    {
        path: RouteUrls.SIGN_UP(),
        element: <SignUpPage/>
    },
]