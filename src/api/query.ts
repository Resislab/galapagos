import {apiClient} from "@/api/client.ts"
import {AxiosError, AxiosResponse} from "axios"
import {useQuery, UseQueryResult} from "@tanstack/react-query"

interface IUseApiQuery {
    key: string
    url: string
    apiVersion?: string
    config?: {
        enabled?: boolean
        refetchOnWindowFocus?: boolean
        refetchOnMount?: boolean
        retry?: boolean | number | ((failureCount: number, error: AxiosError) => boolean)
    }
}

export const useApiQuery = <T>({key, url, apiVersion, config = {}}: IUseApiQuery): UseQueryResult<T, unknown> => {
    return useQuery({
        queryKey: [key, url, apiVersion],
        queryFn: async () => {
            apiClient.interceptors.response.use(
                (response) => {
                    return response
                },
                (error: AxiosError) => {
                    return Promise.reject(error)
                }
            )
            const response: AxiosResponse<T> = await apiClient.get(url)
            if (response.status !== 200) throw new Error("Error fetching data")
            return response.data
        },
        ...config,
    })
}
