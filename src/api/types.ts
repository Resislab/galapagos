import {AxiosError} from "axios"
import {z} from "zod"

export const ErrorFieldSchema = z.object({
    error_code: z.number().optional(),
    field: z.string(),
    message: z.string(),
})

export const ErrorTypeSchema = z.object({
    errors: z.array(ErrorFieldSchema),
})

type errorType = z.infer<typeof ErrorTypeSchema>
export type ApiError = AxiosError<errorType>


export const AuthenticationSchema = z.object({
    access_token: z.string(),
    expires_at: z.number(),
    user_id: z.string(),
    organization_id: z.string(),
})

export type AuthenticationType = z.infer<typeof AuthenticationSchema>