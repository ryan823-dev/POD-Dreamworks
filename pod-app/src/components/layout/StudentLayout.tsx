import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import {
  Home, Palette, ShoppingBag, Package, BookOpen,
  Award, Bell, Plus, LogOut
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const navItems = [
  { label: '工作台', type: 'section' as const },
  { to: '/student', icon: Home, label: '学习首页' },
  { to: '/student/notifications', icon: Bell, label: '消息通知', badge: 3 },
  { label: '创作中心', type: 'section' as const },
  { to: '/student/design/new', icon: Plus, label: '新建设计', highlight: true },
  { to: '/student/designs', icon: Palette, label: '我的设计' },
  { to: '/student/products', icon: ShoppingBag, label: '已上架商品' },
  { to: '/student/orders', icon: Package, label: '我的订单' },
  { label: '成长中心', type: 'section' as const },
  { to: '/student/learn', icon: BookOpen, label: '学习中心' },
  { to: '/student/achievements', icon: Award, label: '成就与积分' },
]

export default function StudentLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="flex min-h-screen">
      <aside className="w-[var(--sidebar-width)] bg-gradient-to-b from-[#1e1b4b] to-[#312e81] text-white fixed h-screen overflow-y-auto z-50 flex flex-col">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-[10px] flex items-center justify-center text-lg">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold">POD Dreamworks</h1>
              <span className="text-[11px] text-white/60">跨境电商实训平台</span>
              <div className="inline-block ml-2 px-2 py-0.5 bg-primary rounded text-[10px]">学生端</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item, i) => {
            if (item.type === 'section') {
              return (
                <div key={i} className="text-[11px] uppercase text-white/40 px-5 py-2 tracking-wider font-semibold">
                  {item.label}
                </div>
              )
            }

            if (item.highlight) {
              return (
                <NavLink
                  key={i}
                  to={item.to!}
                  className="mx-4 my-2 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-[10px] text-white font-semibold hover:shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </NavLink>
              )
            }

            return (
              <NavLink
                key={i}
                to={item.to!}
                end={item.to === '/student'}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 text-sm transition-all relative ${
                    isActive
                      ? 'bg-primary/30 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-primary-light'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.icon && <item.icon className="w-[18px] h-[18px]" />}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-danger text-white text-[11px] px-2 py-0.5 rounded-full font-semibold">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center font-semibold">
              {user?.avatar || '张'}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{user?.name || '张小红'}</div>
              <div className="text-xs text-white/60">{user?.detail || '电商2301班'}</div>
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

      <main className="flex-1 ml-[var(--sidebar-width)] bg-page-bg min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
