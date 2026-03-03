import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Role = 'student' | 'teacher' | 'admin'

export interface User {
  name: string
  role: Role
  avatar: string
  school: string
  detail: string // class for student, department for teacher, title for admin
}

const mockUsers: Record<Role, User> = {
  student: { name: '张小红', role: 'student', avatar: '张', school: '浙江工商大学', detail: '电商2301班' },
  teacher: { name: '王老师', role: 'teacher', avatar: '王', school: '浙江工商大学', detail: '电商教研室' },
  admin:   { name: '系统管理员', role: 'admin', avatar: '管', school: 'POD Dreamworks', detail: '超级管理员' },
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (role: Role, account: string, password: string) => boolean
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (role, _account, _password) => {
        const user = mockUsers[role]
        set({ user, isAuthenticated: true })
        return true
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    { name: 'pod-auth' }
  )
)
