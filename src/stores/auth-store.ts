import { create } from 'zustand'
import { login } from '@/api/auth'
import { type LoginFormSchemaType } from '@/schemas/loginform-schema'

type User = {
  id: number
  name: string
  email: string
}

type Store = {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (data: LoginFormSchemaType) => Promise<void>
}

export const useAuthStore = create<Store> (set => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,

  // ログイン処理
  login: async(data: LoginFormSchemaType) => {
    set({isLoading: true})
    try {
      const response = await login(data)
      set({user: response.data, isAuthenticated: true, isLoading: false})
    } catch (error) {
      set({user: null, isAuthenticated: false, isLoading: false})
      throw error
    }
  }
}))