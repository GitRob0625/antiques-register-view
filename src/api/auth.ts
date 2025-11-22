import { type LoginFormSchemaType } from '@/schemas/loginform-schema'
import { fetcher } from '@/utils/fetcher'

// ログインAPI呼び出し
export const login = async(data: LoginFormSchemaType) => {
  const response = await fetcher('/auth/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  })
  return response
}
