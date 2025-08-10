import {RouteUrls} from "@/router/route-urls.ts";
import {Layout} from "@/components/layout/Layout.tsx";
import {RoadmapPlansList} from "@/features/roadmapPlan/RoadmapPlanList.tsx";

export const ProtectedRoutes = [
    {
        path: RouteUrls.ROOT(),
        element: <Layout/>,
        children: [
            {
                path: RouteUrls.ROOT(),
                element: <RoadmapPlansList/>,
            }
        ]
    },
]