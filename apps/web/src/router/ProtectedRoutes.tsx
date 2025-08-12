import {RouteUrls} from "@/router/route-urls.ts";
import {Layout} from "@/components/layout/Layout.tsx";
import {RoadmapPlanList} from "@/features/roadmapPlan/RoadmapPlanList.tsx";
import {CreateRoadmapPlan} from "@/features/roadmapPlan/CreateRoadmapPlan/CreateRoadmapPlan.tsx";

export const ProtectedRoutes = [
    {
        path: RouteUrls.ROOT(),
        element: <Layout/>,
        children: [
            {
                path: RouteUrls.ROOT(),
                element: <RoadmapPlanList/>,
            },
            {
                path: RouteUrls.ROADMAP_PLAN.CREATE(),
                element: <CreateRoadmapPlan/>,
            }
        ]
    },
]