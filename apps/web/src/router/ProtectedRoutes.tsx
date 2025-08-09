import {RouteUrls} from "@/router/route-urls.ts";
import {Layout} from "@/components/layout/Layout.tsx";

export const ProtectedRoutes = [
    {
        path: RouteUrls.ROOT(),
        element: <Layout/>,
        children: []
    },
]