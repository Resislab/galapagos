import {ApiError} from "@/api/types.ts"
import {AxiosError, AxiosResponse} from "axios"
import {useMutation, UseMutationResult, useQueryClient} from "@tanstack/react-query"
import {apiClient} from "@/api/client.ts"

interface IUseApiMutation {
    url: string
    method: "POST" | "PUT" | "DELETE"
    invalidatedQueryKeys?: string[]
    apiVersion?: string
    config?: {
        onSuccess?: (data: any) => void
        onError?: (error: ApiError) => void
        enabled?: boolean
        refetchOnWindowFocus?: boolean
        refetchOnMount?: boolean
        retry?: boolean | number | ((failureCount: number, error: AxiosError) => boolean)
    }
}

export const useApiMutation = <T>({
                                      url,
                                      method,
                                      invalidatedQueryKeys,
                                      config = {},
                                  }: IUseApiMutation): UseMutationResult<T, ApiError, unknown, unknown> => {
    let response: AxiosResponse<T>
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async (data) => {
            switch (method) {
                case "POST": {
                    response = await apiClient.post(url, data)
                    break
                }
                case "PUT": {
                    response = await apiClient.put(url, data)
                    break
                }
                case "DELETE": {
                    response = await apiClient.delete(url)
                    break
                }
                default:
                    throw new Error(`Unknown API Mutation method ${method}`)
            }
            return response.data
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: invalidatedQueryKeys})
        },
        ...config,
    })
}
