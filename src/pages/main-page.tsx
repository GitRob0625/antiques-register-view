import { useAuthStore } from '@/stores/auth-store'

export default function MainPage() {
  const {user} = useAuthStore()

  return (
    <div>
      <h1>Main Menu</h1>

      <div>
        {user ? (
          <div>
            <p>データ取得成功</p>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </div>
        ) : (
          <p>データ取得失敗</p>
        )}
      </div>
    </div>
  )
}