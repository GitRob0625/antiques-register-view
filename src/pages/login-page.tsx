import { Eye, EyeOff } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { SuccessToast, ErrorToast } from '@/components/sonner'
import { loginFormSchema, type LoginFormSchemaType } from '@/schemas/loginform-schema'
import { useAuthStore } from '@/stores/auth-store'

export default function LoginPage() {
  const navigate = useNavigate()                          // 画面遷移用フック
  const [showPassword, setShowPassword] = useState(false) // パスワード表示切替用
  const {login, isLoading} = useAuthStore()               // 認証状態管理ストア
  const {
    register,
    handleSubmit,
    formState: {errors},
    setFocus,
  } = useForm<LoginFormSchemaType>({
    resolver: zodResolver(loginFormSchema),
  })
  // フォーカスをメールアドレス入力欄にセット
  useEffect(() => {setFocus('email')}, [setFocus])

  // フォーム送信時処理
  const onSubmit = async(data: LoginFormSchemaType) => {
    try {
      await login(data)
      SuccessToast('ログインに成功しました。')
      navigate('/mainpage')
    } catch (error) {
      ErrorToast(error instanceof Error ? error.message : 'ログインに失敗しました。')
      throw error
    }
  }

  return (
      <>
        <h2>ログインページ</h2>
        {errors.email && <p>{errors.email.message}</p>}
        {errors.password && <p>{errors.password.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <input type="email" placeholder="Email" {...register('email')} />
          </div>
          <div>
            <input type={showPassword ? 'text' : 'password'} placeholder="Password" {...register('password')} />
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button disabled={isLoading}>
            {isLoading ? 'ログイン中...' : 'ログイン'}
          </button>
        </form>
      </>
  )
}