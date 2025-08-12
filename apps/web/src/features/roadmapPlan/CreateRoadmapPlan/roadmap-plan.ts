import {supabaseClient} from "@/api/client.ts";

export const checkRoadmapPlanNameExists = async (name: string): Promise<boolean> => {
    try {
        const {data, error} = await supabaseClient
            .from("roadmap_plan")
            .select("name")
            .eq("name", name)
            .maybeSingle()
        return !data

    } catch (e) {
        throw new Error(`Erreur lors de la vérification du nom: ${e.message}`)

    }
}
