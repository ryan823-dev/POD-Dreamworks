import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  BarChart3, Target, Building2, Users, CalendarDays,
  GraduationCap, UserCheck, ShieldCheck, Box, Coins,
  Settings, LogOut
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const navItems = [
  { label: '管理概览', type: 'section' as const },
  { to: '/admin', icon: BarChart3, label: '数据大屏' },
  { to: '/admin/metrics', icon: Target, label: '关键指标' },
  { label: '学校管理', type: 'section' as const },
  { to: '/admin/departments', icon: Building2, label: '院系设置' },
  { to: '/admin/classes', icon: Users, label: '班级管理' },
  { to: '/admin/semesters', icon: CalendarDays, label: '学期设置' },
  { label: '人员管理', type: 'section' as const },
  { to: '/admin/teachers', icon: GraduationCap, label: '教师列表' },
  { to: '/admin/students', icon: UserCheck, label: '学生管理' },
  { to: '/admin/permissions', icon: ShieldCheck, label: '权限配置' },
  { label: '系统设置', type: 'section' as const },
  { to: '/admin/products', icon: Box, label: '产品库配置' },
  { to: '/admin/points', icon: Coins, label: '积分规则' },
  { to: '/admin/settings', icon: Settings, label: '系统配置' },
]

export default function AdminLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-[240px] bg-gradient-to-b from-[#111827] to-[#1f2937] text-white fixed h-screen overflow-y-auto z-50 flex flex-col border-r border-white/5">
        <div className="p-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-[10px] flex items-center justify-center text-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-[15px] font-bold">POD Dreamworks</h1>
              <span className="text-[11px] text-white/50">跨境电商实训平台</span>
              <div className="inline-block ml-2 px-2 py-0.5 bg-admin rounded text-[10px] text-black font-semibold">管理端</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item, i) => {
            if (item.type === 'section') {
              return <div key={i} className="text-[10px] uppercase text-white/30 px-5 py-2 tracking-wider font-semibold">{item.label}</div>
            }
            return (
              <NavLink key={i} to={item.to!} end={item.to === '/admin'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-2.5 text-sm transition-all relative ${
                    isActive ? 'bg-primary/20 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary'
                      : 'text-white/60 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {item.icon && <item.icon className="w-[18px] h-[18px]" />}
                <span>{item.label}</span>
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-admin flex items-center justify-center font-semibold text-sm">
              {user?.avatar || '管'}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-[13px]">{user?.name || '系统管理员'}</div>
              <div className="text-[11px] text-white/50">{user?.detail || '超级管理员'}</div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              title="退出登录"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 ml-[240px] bg-bg min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
