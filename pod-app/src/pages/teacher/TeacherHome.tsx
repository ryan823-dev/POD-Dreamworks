import { Link } from 'react-router-dom'
import {
  Clock, Users, CheckCircle, ShoppingBag,
  ClipboardCheck, PlusCircle, Pen, PieChart,
  UserPlus, FileDown, ArrowUp, Upload, Check, XCircle
} from 'lucide-react'

const stats = [
  { label: '待审核作品', value: 12, icon: Clock, color: 'text-danger bg-danger/10', urgent: true },
  { label: '管理学生数', value: 128, icon: Users, color: 'text-teacher bg-teacher/10' },
  { label: '已审核总数', value: 356, icon: CheckCircle, color: 'text-success bg-success/10' },
  { label: '学生订单数', value: 89, icon: ShoppingBag, color: 'text-admin bg-admin/10' },
]

const pendingReviews = [
  { id: '1', title: '春日樱花猫咪T恤设计', student: '张小红', cls: '电商2301班', time: '10分钟前', status: 'safe', emoji: '👕' },
  { id: '2', title: '情人节爱心马克杯设计', student: '李明', cls: '电商2301班', time: '25分钟前', status: 'pending', emoji: '☕' },
  { id: '3', title: '街头涂鸦风卫衣设计', student: '王大力', cls: '电商2302班', time: '1小时前', status: 'risk', emoji: '🧥' },
]

const classes = [
  { name: '电商2301班', students: 45, submissions: 28, rate: 78 },
  { name: '电商2302班', students: 42, submissions: 22, rate: 65 },
  { name: '电商2303班', students: 41, submissions: 18, rate: 52 },
]

const quickActions = [
  { icon: ClipboardCheck, label: '审核作品', to: '/teacher/review' },
  { icon: PlusCircle, label: '发布任务', to: '/teacher/tasks/new' },
  { icon: Pen, label: '批改作业', to: '/teacher/grading' },
  { icon: PieChart, label: '数据报表', to: '/teacher/reports' },
  { icon: UserPlus, label: '添加学生', to: '/teacher/students' },
  { icon: FileDown, label: '导出成绩', to: '/teacher/export' },
]

const activities = [
  { type: 'submit', icon: Upload, color: 'text-teacher bg-teacher/15', text: '张小红', action: '提交了新设计作品', time: '10分钟前' },
  { type: 'approve', icon: Check, color: 'text-success bg-success/15', text: '您', action: '通过了赵小雨的作品审核', time: '30分钟前' },
  { type: 'submit', icon: Upload, color: 'text-teacher bg-teacher/15', text: '李明', action: '提交了新设计作品', time: '25分钟前' },
  { type: 'reject', icon: XCircle, color: 'text-danger bg-danger/15', text: '您', action: '退回了王大力的作品', time: '1小时前' },
  { type: 'milestone', icon: ArrowUp, color: 'text-success bg-success/15', text: '电商2301班', action: '完成率突破 75%', time: '2小时前' },
]

const statusMap: Record<string, { label: string; cls: string }> = {
  safe: { label: '已检测', cls: 'bg-success/10 text-success' },
  pending: { label: '检测中', cls: 'bg-warning/10 text-warning' },
  risk: { label: '有风险', cls: 'bg-danger/10 text-danger' },
}

export default function TeacherHome() {
  return (
    <div className="p-8">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-page-text mb-2">早上好，王老师</h1>
        <p className="text-page-text-secondary text-[15px]">
          今天有 <strong className="text-danger">12</strong> 份作品待审核，
          <strong className="text-warning">8</strong> 份作业待批改
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((s, i) => (
          <div key={i} className={`bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all ${s.urgent ? 'border-l-4 border-danger' : ''}`}>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div className="text-[32px] font-bold text-page-text leading-none mb-1">{s.value}</div>
            <div className="text-sm text-page-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_380px] gap-6">
        {/* Left */}
        <div className="space-y-6">
          {/* Pending Reviews */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text flex items-center gap-2">
                <Clock className="w-4 h-4 text-danger" />
                待审核作品
                <span className="ml-1 px-2 py-0.5 bg-danger text-white text-[11px] rounded-full font-semibold">12</span>
              </h3>
              <Link to="/teacher/review" className="text-sm text-teacher hover:underline">查看全部</Link>
            </div>
            <div className="p-6 space-y-3">
              {pendingReviews.map((r) => (
                <Link
                  key={r.id}
                  to={`/teacher/review/${r.id}`}
                  className="flex items-center gap-4 p-4 bg-page-bg rounded-xl hover:ring-1 hover:ring-teacher transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-teacher/10 to-teacher/5 rounded-xl flex items-center justify-center text-2xl">
                    {r.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-page-text truncate">{r.title}</div>
                    <div className="text-xs text-page-text-muted mt-1">
                      <span className="text-teacher font-medium">{r.student}</span> · {r.cls} · {r.time}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[11px] font-medium ${statusMap[r.status].cls}`}>
                    {statusMap[r.status].label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Class Overview */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text flex items-center gap-2">
                <Users className="w-4 h-4 text-teacher" />
                班级概览
              </h3>
              <span className="text-sm text-teacher cursor-pointer hover:underline">管理班级</span>
            </div>
            <div className="p-6 space-y-3">
              {classes.map((c, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-page-bg rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-teacher to-teacher-dark rounded-xl flex items-center justify-center text-white text-lg">
                    🎓
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-page-text text-[15px]">{c.name}</div>
                    <div className="text-xs text-page-text-muted">{c.students}人 · 本周提交 {c.submissions} 件作品</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teacher">{c.rate}%</div>
                    <div className="text-[11px] text-page-text-muted">任务完成率</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border">
              <h3 className="font-semibold text-page-text">快捷操作</h3>
            </div>
            <div className="p-6 grid grid-cols-3 gap-3">
              {quickActions.map((a, i) => (
                <Link
                  key={i}
                  to={a.to}
                  className="flex flex-col items-center justify-center p-4 bg-page-bg rounded-xl hover:bg-teacher hover:text-white transition-all group cursor-pointer"
                >
                  <a.icon className="w-6 h-6 text-teacher group-hover:text-white mb-2" />
                  <span className="text-[12px] font-medium text-page-text group-hover:text-white">{a.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text">最近动态</h3>
              <span className="text-sm text-teacher cursor-pointer hover:underline">全部</span>
            </div>
            <div className="p-6 space-y-4">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${a.color}`}>
                    <a.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-page-text">
                      <strong className="text-teacher">{a.text}</strong> {a.action}
                    </div>
                    <div className="text-xs text-page-text-muted mt-0.5">{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
