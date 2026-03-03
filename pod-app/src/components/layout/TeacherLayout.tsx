import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Home, Bell, Users, GraduationCap, ListTodo, Plus,
  Clock, CheckCircle, XCircle, Edit, ClipboardList,
  BarChart3, FileDown, LogOut, Menu, X
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

const navItems = [
  { label: '工作台', type: 'section' as const },
  { to: '/teacher', icon: Home, label: '教学概览' },
  { to: '/teacher/notifications', icon: Bell, label: '通知提醒', badge: 5 },
  { label: '学生管理', type: 'section' as const },
  { to: '/teacher/classes', icon: Users, label: '班级列表' },
  { to: '/teacher/students', icon: GraduationCap, label: '学生列表' },
  { label: '任务管理', type: 'section' as const },
  { to: '/teacher/tasks', icon: ListTodo, label: '任务列表' },
  { to: '/teacher/tasks/new', icon: Plus, label: '发布任务', highlight: true },
  { label: '审核中心', type: 'section' as const },
  { to: '/teacher/review', icon: Clock, label: '待审核', badge: 12 },
  { to: '/teacher/review/approved', icon: CheckCircle, label: '已通过' },
  { to: '/teacher/review/rejected', icon: XCircle, label: '已退回' },
  { label: '成绩管理', type: 'section' as const },
  { to: '/teacher/grading', icon: Edit, label: '作业批改', badgeWarning: 8 },
  { to: '/teacher/scores', icon: ClipboardList, label: '成绩管理' },
  { label: '数据分析', type: 'section' as const },
  { to: '/teacher/reports', icon: BarChart3, label: '班级报表' },
  { to: '/teacher/export', icon: FileDown, label: '导出报告' },
]

export default function TeacherLayout() {
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const closeSidebar = () => setSidebarOpen(false)

  return (
    <div className="flex min-h-screen">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-gradient-to-r from-[#0f172a] to-[#1e293b] z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-white" />
          <span className="text-white font-bold">POD Dreamworks</span>
          <span className="px-2 py-0.5 bg-teacher rounded text-[10px] text-white">教师端</span>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="text-white p-2">
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`
        w-[var(--sidebar-width)] bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white fixed h-screen overflow-y-auto z-50 flex flex-col
        transition-transform duration-300 lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teacher to-teacher-dark rounded-[10px] flex items-center justify-center text-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base font-bold">POD Dreamworks</h1>
              <span className="text-[11px] text-white/60">跨境电商实训平台</span>
              <div className="inline-block ml-2 px-2 py-0.5 bg-teacher rounded text-[10px]">教师端</div>
            </div>
          </div>
          <button onClick={closeSidebar} className="lg:hidden text-white/60 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4">
          {navItems.map((item, i) => {
            if (item.type === 'section') {
              return <div key={i} className="text-[11px] uppercase text-white/40 px-5 py-2 tracking-wider font-semibold">{item.label}</div>
            }
            if (item.highlight) {
              return (
                <NavLink key={i} to={item.to!} onClick={closeSidebar}
                  className="mx-4 my-2 flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-teacher to-teacher-dark rounded-[10px] text-white font-semibold hover:shadow-lg hover:shadow-teacher/40 hover:-translate-y-0.5 transition-all"
                >
                  {item.icon && <item.icon className="w-4 h-4" />} {item.label}
                </NavLink>
              )
            }
            return (
              <NavLink key={i} to={item.to!} end={item.to === '/teacher'} onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-3 text-sm transition-all relative ${
                    isActive ? 'bg-teacher/30 text-white before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-teacher-light'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.icon && <item.icon className="w-[18px] h-[18px]" />}
                <span>{item.label}</span>
                {item.badge && <span className="ml-auto bg-danger text-white text-[11px] px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>}
                {item.badgeWarning && <span className="ml-auto bg-warning text-white text-[11px] px-2 py-0.5 rounded-full font-semibold">{item.badgeWarning}</span>}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teacher to-success flex items-center justify-center font-semibold">
              {user?.avatar || '王'}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">{user?.name || '王老师'}</div>
              <div className="text-xs text-white/60">{user?.detail || '电商教研室'}</div>
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

      <main className="flex-1 lg:ml-[var(--sidebar-width)] bg-page-bg min-h-screen pt-14 lg:pt-0">
        <Outlet />
      </main>
    </div>
  )
}
