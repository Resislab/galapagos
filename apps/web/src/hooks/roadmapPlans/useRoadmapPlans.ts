import {useQuery} from "@tanstack/react-query"
import type {Tables} from "@/database.types"
import {supabaseClient} from "@/api/client.ts";
import {STALE_TIME_MINUTES} from "@/api/config.ts";

export type RoadmapPlan = Tables<"roadmap_plan">

export const useRoadmapPlans = () => {
    return useQuery({
        queryKey: ["roadmap-plans"],
        queryFn: async (): Promise<RoadmapPlan[]> => {
            const {data, error} = await supabaseClient
                .from("roadmap_plan")
                .select(`
                    id,
                    name,
                    slug,
                    description,
                    budget,
                    budget_devise,
                    start_date,
                    end_date,
                    created_at,
                    created_by_id,
                    updated_at,
                    organization_id
                `)
                .order("updated_at", {ascending: true})

            if (error) {
                throw new Error(`Erreur lors de la récupération des roadmap plans: ${error.message}`)
            }

            return data
        },
        staleTime: STALE_TIME_MINUTES.MEDIUM
    })
}
