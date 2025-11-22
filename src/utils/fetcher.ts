import { API_URL } from './config'

export async function fetcher(key: string, options?: RequestInit) {
    const res = await fetch(`${API_URL}${key}`, {
    credentials: 'include',
    ...options,
  })

  // レスポンス返却
  try {
    return await res.json()
  } catch {
    return {} // JSONでない場合、空オブジェクトを返却
  }
}
