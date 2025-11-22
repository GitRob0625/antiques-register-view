import { z } from 'zod'
import { passwordSchema } from '@/schemas/password-schema'

// メールアドレスのバリデーション定義
export const emailSchema = z
  .string()
  .trim()
  .min(1, 'メールアドレスを入力してください')
  .max(254, 'メールアドレスは254文字以内で入力してください')
  .refine(email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), 'メールアドレスの形式で入力してください')

// オブジェクトスキーマ作成
export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
})
// 型変数の宣言
export type LoginFormSchemaType = z.infer<typeof loginFormSchema>