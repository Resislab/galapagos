import {z} from "zod";
import {ENDPOINT_CONFIG} from "@/api/apiConfig.ts";
import {useApiMutation} from "@/api/mutation.ts";
import {authenticationLocalStorageKey} from "@/context/AuthContext.tsx";
import {ApiError} from "@/api/types.ts";


const createAccessTokenSchema = z.object({
    token_type: z.literal("Bearer"),
    access_token: z.string(),
    organization_id: z.string().uuid(),
    expires_at: z.string().datetime(),
    user_id: z.string().uuid(),
});
export type CreateAccessTokenType = z.infer<typeof createAccessTokenSchema>;

interface CreateAccessTokenConfig {
    config: {
        onError: (error: ApiError) => void;
    }
}


export const useCreateAccessToken = (options: CreateAccessTokenConfig) => {
    const mutation = useApiMutation<CreateAccessTokenType>({
        url: ENDPOINT_CONFIG.AUTHENTICATION.ACCESS_TOKEN.POST(),
        method: "POST",
        config: {
            onSuccess: (createAccessToken: CreateAccessTokenType) => {
                localStorage.setItem(authenticationLocalStorageKey, createAccessToken.access_token)
            },
            onError: (error: ApiError) => {
                options.config.onError(error);
            },
        },
    });

    return {
        createAccessToken: mutation.mutate,
    };
};
