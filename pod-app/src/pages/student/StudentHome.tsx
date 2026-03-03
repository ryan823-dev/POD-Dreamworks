import { Link } from 'react-router-dom'
import {
  Palette, ShoppingBag, Package, Star,
  ArrowRight, TrendingUp, Clock, CheckCircle
} from 'lucide-react'

const stats = [
  { label: '我的设计', value: 28, icon: Palette, color: 'text-primary bg-primary/10' },
  { label: '已上架商品', value: 15, icon: ShoppingBag, color: 'text-success bg-success/10' },
  { label: '真实订单', value: 6, icon: Package, color: 'text-admin bg-admin/10' },
  { label: '积分', value: 1280, icon: Star, color: 'text-pink-500 bg-pink-500/10' },
]

const tasks = [
  { title: '完成第3期选品作业', deadline: '3月5日截止', progress: 60, status: 'active' },
  { title: '提交春季主题T恤设计', deadline: '3月8日截止', progress: 30, status: 'active' },
  { title: '分析首单用户画像', deadline: '3月10日截止', progress: 0, status: 'todo' },
]

const modules = [
  { name: '选品分析', progress: 85, color: 'bg-primary' },
  { name: '设计创作', progress: 70, color: 'bg-success' },
  { name: '产品上架', progress: 55, color: 'bg-admin' },
  { name: '订单分析', progress: 30, color: 'bg-pink-500' },
]

const rankings = [
  { rank: 1, name: '张小红', score: 8650, badge: 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black' },
  { rank: 2, name: '李大伟', score: 7890, badge: 'bg-gradient-to-r from-gray-300 to-gray-400 text-black' },
  { rank: 3, name: '王晓明', score: 7234, badge: 'bg-gradient-to-r from-orange-400 to-orange-500 text-white' },
  { rank: 4, name: '赵小雨', score: 6890, badge: 'bg-white/10 text-page-text-muted' },
  { rank: 5, name: '周晓晓', score: 6450, badge: 'bg-white/10 text-page-text-muted' },
]

const quickActions = [
  { icon: '🎨', label: '新建设计', to: '/student/design/new' },
  { icon: '📦', label: '查看订单', to: '/student/orders' },
  { icon: '📊', label: '数据分析', to: '/student/analytics' },
  { icon: '📚', label: '学习中心', to: '/student/learn' },
]

export default function StudentHome() {
  return (
    <div className="p-8">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-page-text mb-2">欢迎回来，张小红 👋</h1>
        <p className="text-page-text-secondary text-[15px]">今天也要加油哦！你已经连续登录 <strong className="text-primary">7天</strong>，继续保持！</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div className="text-[32px] font-bold text-page-text leading-none mb-1">{s.value.toLocaleString()}</div>
            <div className="text-sm text-page-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_380px] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Active Tasks */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                进行中的任务
              </h3>
              <span className="text-sm text-primary cursor-pointer hover:underline">查看全部</span>
            </div>
            <div className="p-6 space-y-4">
              {tasks.map((task, i) => (
                <div key={i} className="p-4 bg-page-bg rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-medium text-page-text text-[15px]">{task.title}</div>
                      <div className="text-xs text-page-text-muted mt-1">{task.deadline}</div>
                    </div>
                    {task.progress > 0 ? (
                      <span className="text-xs text-primary font-medium">{task.progress}%</span>
                    ) : (
                      <span className="text-xs text-page-text-muted">未开始</span>
                    )}
                  </div>
                  <div className="w-full h-2 bg-page-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full transition-all"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Progress */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                学习进度
              </h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-4">
              {modules.map((m, i) => (
                <div key={i} className="p-4 bg-page-bg rounded-xl">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-page-text">{m.name}</span>
                    <span className="text-xs text-page-text-muted">{m.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-page-border rounded-full overflow-hidden">
                    <div className={`h-full ${m.color} rounded-full transition-all`} style={{ width: `${m.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border">
              <h3 className="font-semibold text-page-text">快捷操作</h3>
            </div>
            <div className="p-6 grid grid-cols-2 gap-3">
              {quickActions.map((a, i) => (
                <Link
                  key={i}
                  to={a.to}
                  className="flex flex-col items-center justify-center p-5 bg-page-bg rounded-xl hover:bg-primary hover:text-white transition-all group cursor-pointer"
                >
                  <span className="text-2xl mb-2">{a.icon}</span>
                  <span className="text-[13px] font-medium text-page-text group-hover:text-white">{a.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex justify-between items-center">
              <h3 className="font-semibold text-page-text flex items-center gap-2">
                <Star className="w-4 h-4 text-admin" />
                班级排行榜
              </h3>
            </div>
            <div className="p-6 space-y-3">
              {rankings.map((r) => (
                <div key={r.rank} className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-bold ${r.badge}`}>
                    {r.rank}
                  </span>
                  <span className={`flex-1 text-sm ${r.rank === 1 ? 'font-semibold text-page-text' : 'text-page-text-secondary'}`}>
                    {r.name} {r.rank === 1 && <span className="text-xs text-primary ml-1">← 你</span>}
                  </span>
                  <span className="text-sm font-semibold text-primary">{r.score.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border">
              <h3 className="font-semibold text-page-text">最近动态</h3>
            </div>
            <div className="p-6 space-y-4">
              {[
                { icon: CheckCircle, color: 'text-success', text: '「樱花猫咪T恤」审核通过', time: '2小时前' },
                { icon: Package, color: 'text-admin', text: '收到新订单 #ORD-0089', time: '昨天' },
                { icon: ArrowRight, color: 'text-primary', text: '「极简帆布袋」已提交审核', time: '2天前' },
              ].map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <a.icon className={`w-4 h-4 mt-0.5 ${a.color}`} />
                  <div className="flex-1">
                    <div className="text-sm text-page-text">{a.text}</div>
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
