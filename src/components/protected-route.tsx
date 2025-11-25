import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '@/stores/auth-store'

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuthStore()

  // 未認証の場合、メイン（ログイン）ページへリダイレクト
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }

  // 認証済みの場合、子ルートをレンダリング
  return <Outlet />
}