import { useState } from 'react'
import {
  Building2, Users, Palette, ShoppingBag, Package,
  TrendingUp, TrendingDown, Activity,
  CheckCircle, Clock, AlertTriangle, Server,
  Database, Zap, Shield, Globe, UserPlus, FileDown,
  Settings, Bell, RefreshCw, Eye
} from 'lucide-react'

/* ── Stats ── */
const stats = [
  { label: '入驻学校', value: '12', delta: '+2', up: true, icon: Building2, gradient: 'from-primary to-primary-dark', glow: 'bg-primary/10' },
  { label: '注册学生', value: '3,856', delta: '+128', up: true, icon: Users, gradient: 'from-teacher to-teacher-dark', glow: 'bg-teacher/10' },
  { label: '设计作品', value: '28,432', delta: '+1,234', up: true, icon: Palette, gradient: 'from-success to-green-600', glow: 'bg-success/10' },
  { label: '已上架商品', value: '12,567', delta: '+456', up: true, icon: ShoppingBag, gradient: 'from-admin to-amber-600', glow: 'bg-admin/10' },
  { label: '真实订单', value: '2,134', delta: '-23', up: false, icon: Package, gradient: 'from-pink-500 to-rose-500', glow: 'bg-pink-500/10' },
]

/* ── Weekly chart data ── */
const weeklyData = [
  { day: '周一', designs: 65, listings: 42, orders: 18 },
  { day: '周二', designs: 82, listings: 55, orders: 24 },
  { day: '周三', designs: 71, listings: 48, orders: 21 },
  { day: '周四', designs: 95, listings: 63, orders: 32 },
  { day: '周五', designs: 88, listings: 58, orders: 28 },
  { day: '周六', designs: 45, listings: 25, orders: 12 },
  { day: '周日', designs: 38, listings: 20, orders: 8 },
]

/* ── Schools ── */
const schools = [
  { name: '浙江工商大学', students: 520, designs: 4280, listed: 1890, status: 'active', joinDate: '2024-09' },
  { name: '广东外语外贸大学', students: 480, designs: 3960, listed: 1720, status: 'active', joinDate: '2024-09' },
  { name: '上海对外经贸大学', students: 420, designs: 3540, listed: 1560, status: 'active', joinDate: '2024-10' },
  { name: '宁波大学', students: 380, designs: 3120, listed: 1380, status: 'active', joinDate: '2024-10' },
  { name: '杭州电子科技大学', students: 350, designs: 2880, listed: 1240, status: 'active', joinDate: '2024-11' },
  { name: '浙江传媒学院', students: 320, designs: 2650, listed: 1180, status: 'trial', joinDate: '2025-01' },
  { name: '温州商学院', students: 286, designs: 2340, listed: 1020, status: 'trial', joinDate: '2025-01' },
  { name: '义乌工商职业技术学院', students: 260, designs: 2100, listed: 940, status: 'active', joinDate: '2024-12' },
]

/* ── Leaderboard ── */
const topStudents = [
  { name: '张小红', school: '浙江工商大学', designs: 86, orders: 42, revenue: 12800 },
  { name: '陈思远', school: '广东外语外贸大学', designs: 78, orders: 38, revenue: 11200 },
  { name: '刘雨桐', school: '上海对外经贸大学', designs: 72, orders: 35, revenue: 9800 },
  { name: '王建国', school: '宁波大学', designs: 65, orders: 28, revenue: 8600 },
  { name: '赵小雨', school: '杭州电子科技大学', designs: 61, orders: 25, revenue: 7200 },
]

/* ── Activities ── */
const activities = [
  { type: 'school', icon: Building2, color: 'text-primary bg-primary/15', text: '温州商学院', action: '完成入驻审核，正式上线', time: '15分钟前' },
  { type: 'alert', icon: AlertTriangle, color: 'text-warning bg-warning/15', text: '侵权检测系统', action: '发现 3 例疑似侵权设计', time: '30分钟前' },
  { type: 'milestone', icon: TrendingUp, color: 'text-success bg-success/15', text: '平台里程碑', action: '累计设计作品突破 28,000 件', time: '1小时前' },
  { type: 'user', icon: UserPlus, color: 'text-teacher bg-teacher/15', text: '浙江工商大学', action: '新增 15 名学生账号', time: '2小时前' },
  { type: 'order', icon: ShoppingBag, color: 'text-admin bg-admin/15', text: 'Temu平台', action: '今日新增 56 笔真实订单', time: '3小时前' },
  { type: 'system', icon: Shield, color: 'text-primary bg-primary/15', text: '系统更新', action: 'AI 文案生成模型升级 v2.3', time: '5小时前' },
]

/* ── Quick Actions ── */
const quickActions = [
  { icon: Building2, label: '添加学校', desc: '入驻新学校' },
  { icon: UserPlus, label: '批量导入', desc: '导入学生账号' },
  { icon: Bell, label: '系统公告', desc: '发布平台公告' },
  { icon: FileDown, label: '数据导出', desc: '导出运营报表' },
  { icon: Settings, label: '系统配置', desc: '平台参数设置' },
  { icon: RefreshCw, label: 'AI 配置', desc: '更新 AI 模型' },
]

/* ── System Health ── */
const systemHealth = [
  { label: 'AI 侵权检测', status: 'normal', icon: Shield, latency: '120ms' },
  { label: 'AI 文案生成', status: 'normal', icon: Zap, latency: '850ms' },
  { label: '产品合成引擎', status: 'normal', icon: Server, latency: '2.1s' },
  { label: '数据库服务', status: 'normal', icon: Database, latency: '15ms' },
  { label: 'Temu API 网关', status: 'warning', icon: Globe, latency: '3.2s' },
]

const statusLabel: Record<string, { text: string; cls: string }> = {
  active: { text: '正式', cls: 'bg-success/15 text-success' },
  trial: { text: '试用', cls: 'bg-warning/15 text-warning' },
  inactive: { text: '停用', cls: 'bg-danger/15 text-danger' },
}

const healthLabel: Record<string, { text: string; cls: string; dot: string }> = {
  normal: { text: '正常', cls: 'text-success', dot: 'bg-success' },
  warning: { text: '延迟', cls: 'text-warning', dot: 'bg-warning' },
  error: { text: '异常', cls: 'text-danger', dot: 'bg-danger' },
}

export default function AdminDashboard() {
  const [chartType, setChartType] = useState<'designs' | 'listings' | 'orders'>('designs')
  const maxVal = Math.max(...weeklyData.map(d => d[chartType]))

  const chartColors: Record<string, string> = {
    designs: 'bg-primary',
    listings: 'bg-admin',
    orders: 'bg-success',
  }

  const medals = ['🥇', '🥈', '🥉']

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">数据总览</h1>
          <p className="text-sm text-text-secondary">实时监控平台运营状况 · 最后更新 2分钟前</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.05] border border-border rounded-xl text-sm text-text-secondary hover:bg-white/[0.08] transition-colors">
            <Eye className="w-4 h-4" />
            实时监控
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-sm text-white font-medium hover:opacity-90 transition-opacity">
            <FileDown className="w-4 h-4" />
            导出报表
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/[0.03] border border-border rounded-[16px] p-5 relative overflow-hidden hover:bg-white/[0.05] transition-colors group">
            <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.gradient}`} />
            <div className="flex justify-between items-start mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.glow}`}>
                <s.icon className="w-5 h-5" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-medium ${s.up ? 'text-success' : 'text-danger'}`}>
                {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {s.delta}
              </span>
            </div>
            <div className="text-3xl font-bold text-white leading-none mb-1">{s.value}</div>
            <div className="text-sm text-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_380px] gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Weekly Trend Chart */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-primary-glow" />
                本周数据趋势
              </h3>
              <div className="flex gap-1 bg-white/[0.03] rounded-lg p-1">
                {[
                  { key: 'designs' as const, label: '设计' },
                  { key: 'listings' as const, label: '上架' },
                  { key: 'orders' as const, label: '订单' },
                ].map(t => (
                  <button
                    key={t.key}
                    onClick={() => setChartType(t.key)}
                    className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                      chartType === t.key ? 'bg-primary text-white' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-end gap-3 h-[200px]">
                {weeklyData.map((d, i) => {
                  const pct = (d[chartType] / maxVal) * 100
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs text-text-secondary font-medium">{d[chartType]}</span>
                      <div className="w-full relative flex items-end" style={{ height: '160px' }}>
                        <div
                          className={`w-full rounded-t-lg ${chartColors[chartType]} opacity-80 hover:opacity-100 transition-all cursor-pointer`}
                          style={{ height: `${pct}%`, minHeight: '8px' }}
                        />
                      </div>
                      <span className="text-xs text-text-muted">{d.day}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* School List */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-admin" />
                入驻学校
                <span className="ml-1 px-2 py-0.5 bg-admin/15 text-admin text-[11px] rounded-full font-semibold">{schools.length}</span>
              </h3>
              <button className="text-sm text-admin hover:underline">管理学校</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left text-xs text-text-muted font-medium px-6 py-3">学校名称</th>
                    <th className="text-center text-xs text-text-muted font-medium px-4 py-3">学生数</th>
                    <th className="text-center text-xs text-text-muted font-medium px-4 py-3">设计作品</th>
                    <th className="text-center text-xs text-text-muted font-medium px-4 py-3">已上架</th>
                    <th className="text-center text-xs text-text-muted font-medium px-4 py-3">状态</th>
                    <th className="text-center text-xs text-text-muted font-medium px-4 py-3">入驻时间</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((s, i) => (
                    <tr key={i} className="border-b border-border/50 hover:bg-white/[0.02] transition-colors cursor-pointer">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-gradient-to-br from-admin/20 to-admin/5 rounded-lg flex items-center justify-center text-lg">
                            🏫
                          </div>
                          <span className="text-sm font-medium text-white">{s.name}</span>
                        </div>
                      </td>
                      <td className="text-center text-sm text-text-secondary px-4 py-4">{s.students}</td>
                      <td className="text-center text-sm text-text-secondary px-4 py-4">{s.designs.toLocaleString()}</td>
                      <td className="text-center text-sm text-text-secondary px-4 py-4">{s.listed.toLocaleString()}</td>
                      <td className="text-center px-4 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${statusLabel[s.status].cls}`}>
                          {statusLabel[s.status].text}
                        </span>
                      </td>
                      <td className="text-center text-sm text-text-muted px-4 py-4">{s.joinDate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border">
              <h3 className="font-semibold text-white">快捷操作</h3>
            </div>
            <div className="p-4 grid grid-cols-3 gap-3">
              {quickActions.map((a, i) => (
                <button
                  key={i}
                  className="flex flex-col items-center justify-center p-4 bg-white/[0.02] rounded-xl hover:bg-admin/20 transition-all group cursor-pointer"
                >
                  <a.icon className="w-5 h-5 text-admin group-hover:text-admin-light mb-2" />
                  <span className="text-[12px] font-medium text-white/80 group-hover:text-white">{a.label}</span>
                  <span className="text-[10px] text-text-muted mt-0.5">{a.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Student Leaderboard */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-admin" />
                学生排行榜
              </h3>
              <span className="text-xs text-text-muted">按订单量排名</span>
            </div>
            <div className="p-4 space-y-2">
              {topStudents.map((s, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${i < 3 ? 'bg-white/[0.03]' : 'hover:bg-white/[0.02]'}`}>
                  <div className="w-8 text-center text-lg">
                    {i < 3 ? medals[i] : <span className="text-sm text-text-muted font-medium">{i + 1}</span>}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-admin/30 to-admin/10 flex items-center justify-center text-xs font-semibold text-white">
                    {s.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{s.name}</div>
                    <div className="text-[11px] text-text-muted truncate">{s.school}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-admin">{s.orders}</div>
                    <div className="text-[10px] text-text-muted">订单</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Server className="w-4 h-4 text-success" />
                系统状态
              </h3>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-xs text-success font-medium">运行中</span>
              </div>
            </div>
            <div className="p-4 space-y-2">
              {systemHealth.map((h, i) => {
                const hl = healthLabel[h.status]
                return (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                      <h.icon className="w-4 h-4 text-text-secondary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white/80">{h.label}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-text-muted">{h.latency}</span>
                      <div className="flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${hl.dot}`} />
                        <span className={`text-xs font-medium ${hl.cls}`}>{hl.text}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-5 border-b border-border flex justify-between items-center">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary-glow" />
                平台动态
              </h3>
              <span className="text-sm text-primary-glow cursor-pointer hover:underline">全部</span>
            </div>
            <div className="p-4 space-y-3">
              {activities.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${a.color}`}>
                    <a.icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white/80">
                      <strong className="text-admin">{a.text}</strong>{' '}
                      {a.action}
                    </div>
                    <div className="text-xs text-text-muted mt-0.5 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {a.time}
                    </div>
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
