
import { useAuthStore } from '@/stores/auth-store'
import { useNavigate } from 'react-router-dom'

export default function MainPage() {
  const { user } = useAuthStore()
  const navigate = useNavigate()

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

      <div style={{ marginTop: '20px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <button onClick={() => navigate('/purchase/create')}>
              取引（購入）履歴 登録
            </button>
          </li>

          <li style={{ margin: '10px 0' }}>
            <button onClick={() => navigate('/purchase/view')}>
              取引（購入）履歴 表示
            </button>
          </li>

          <li style={{ margin: '10px 0' }}>
            <button onClick={() => navigate('/sales/create')}>
              取引（販売）履歴 登録
            </button>
          </li>

          <li style={{ margin: '10px 0' }}>
            <button onClick={() => navigate('/sales/view')}>
              取引（販売）履歴 表示
            </button>
          </li>

          <li style={{ margin: '10px 0' }}>
            <button onClick={() => navigate('/antiques/view')}>
              古物台帳 表示
            </button>
          </li>
        </ul>
      </div>

    </div>
  )
}