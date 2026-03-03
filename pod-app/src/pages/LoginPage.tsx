import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rocket, Eye, EyeOff, LogIn } from 'lucide-react'
import { useAuthStore, type Role } from '@/stores/authStore'

export default function LoginPage() {
  const navigate = useNavigate()
  const login = useAuthStore((s) => s.login)
  const [showPassword, setShowPassword] = useState(false)
  const [role, setRole] = useState<Role>('student')
  const [account, setAccount] = useState('demo')
  const [password, setPassword] = useState('123456')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!account.trim() || !password.trim()) {
      setError('请输入账号和密码')
      return
    }
    setLoading(true)
    setError('')
    setTimeout(() => {
      const ok = login(role, account, password)
      if (ok) {
        navigate(`/${role}`)
      } else {
        setError('登录失败，请检查账号密码')
      }
      setLoading(false)
    }, 600)
  }

  const roleOptions = [
    { key: 'student' as const, label: '学生', color: 'bg-primary' },
    { key: 'teacher' as const, label: '教师', color: 'bg-teacher' },
    { key: 'admin' as const, label: '管理员', color: 'bg-admin' },
  ]

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.1),transparent_60%)]" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] top-[20%] left-[15%]" style={{ animation: 'float 20s ease-in-out infinite' }} />
      <div className="absolute w-[200px] h-[200px] rounded-full bg-pink-500/10 blur-[60px] bottom-[20%] right-[15%]" style={{ animation: 'float 20s ease-in-out infinite', animationDelay: '-7s' }} />

      <div className="relative z-10 w-full max-w-[420px] px-6">
        <div className="text-center mb-10">
          <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-[16px] flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-1">POD Dreamworks</h1>
          <p className="text-sm text-text-secondary">跨境电商实训平台</p>
        </div>

        <div className="bg-white/[0.04] border border-border rounded-[24px] p-8 backdrop-blur-sm">
          <div className="flex gap-2 p-1 bg-white/5 rounded-[12px] mb-8">
            {roleOptions.map((r) => (
              <button
                key={r.key}
                onClick={() => setRole(r.key)}
                className={`flex-1 py-2.5 rounded-[10px] text-sm font-medium transition-all ${
                  role === r.key
                    ? `${r.color} text-white shadow-lg`
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label className="block text-sm text-text-secondary mb-2">账号</label>
              <input
                type="text"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-border-light rounded-[12px] text-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder="请输入用户名或学号"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-text-secondary mb-2">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-border-light rounded-[12px] text-white text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all pr-12"
                  placeholder="请输入密码"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-4 text-sm text-danger bg-danger/10 px-4 py-2.5 rounded-[10px]">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-[12px] font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2 ${
                role === 'student'
                  ? 'bg-primary hover:shadow-primary/40 text-white'
                  : role === 'teacher'
                  ? 'bg-teacher hover:shadow-teacher/40 text-white'
                  : 'bg-admin hover:shadow-admin/40 text-black'
              } ${loading ? 'opacity-70 pointer-events-none' : ''}`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  登录
                </>
              )}
            </button>
          </form>
        </div>

        <div className="text-center mt-8 text-xs text-text-muted">
          &copy; 2026 POD Dreamworks · 技术支持：小AI商创
        </div>
      </div>
    </div>
  )
}
