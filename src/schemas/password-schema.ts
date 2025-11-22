import { z } from 'zod'

// パスワードのバリデーション定義
export const passwordSchema = z
  .string()
  .trim()
  .min(1, 'パスワードを入力してください')
  .min(15, 'パスワードは15文字以上で入力してください')
  .max(64, 'パスワードは64文字以内で入力してください')
  .refine(password => !/\s/.test(password), 'パスワードにスペースを含めることはできません')
  .refine(password => {
    const hasLowercase = /[a-z]/.test(password)
    const hasUppercase = /[A-Z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSymbol = /[!@#$%^&*()_\-+={};':"\\|,.<>/?~`]/.test(password)
    const conditionsMet = [hasLowercase, hasUppercase, hasNumber, hasSymbol].filter(Boolean).length
    return conditionsMet >= 3
  }, 'パスワードは数字・英大文字・英小文字・記号のうち3種類以上を組み合わせてください')
