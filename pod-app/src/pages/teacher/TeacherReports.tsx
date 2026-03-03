import { BarChart3, TrendingUp, Users, Palette, Package, Download } from 'lucide-react'

const classStats = [
  { name: '电商2301班', students: 45, designs: 420, listed: 186, orders: 52, completion: 78 },
  { name: '电商2302班', students: 42, designs: 380, listed: 165, orders: 38, completion: 65 },
  { name: '电商2303班', students: 41, designs: 320, listed: 128, orders: 22, completion: 52 },
]

const weeklyData = [
  { day: '周一', designs: 42 },
  { day: '周二', designs: 58 },
  { day: '周三', designs: 35 },
  { day: '周四', designs: 67 },
  { day: '周五', designs: 52 },
  { day: '周六', designs: 28 },
  { day: '周日', designs: 18 },
]

export default function TeacherReports() {
  const maxVal = Math.max(...weeklyData.map(d => d.designs))

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">班级报表</h1>
          <p className="text-page-text-secondary text-sm">查看班级整体数据表现</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-teacher text-white rounded-xl text-sm font-semibold hover:bg-teacher-dark transition-colors">
          <Download className="w-4 h-4" /> 导出报表
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-5 mb-8">
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-teacher bg-teacher/10">
            <Users className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">128</div>
          <div className="text-sm text-page-text-secondary">管理学生数</div>
        </div>
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-primary bg-primary/10">
            <Palette className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">1,120</div>
          <div className="text-sm text-page-text-secondary">设计作品总数</div>
        </div>
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-success bg-success/10">
            <Package className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">479</div>
          <div className="text-sm text-page-text-secondary">已上架商品</div>
        </div>
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-admin bg-admin/10">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">112</div>
          <div className="text-sm text-page-text-secondary">真实订单数</div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_400px] gap-6">
        {/* Class Stats */}
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
          <div className="px-6 py-5 border-b border-page-border">
            <h3 className="font-semibold text-page-text flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-teacher" /> 班级数据对比
            </h3>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-page-border">
                <th className="text-left text-xs text-page-text-muted font-medium px-6 py-3">班级</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">学生</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">设计</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">上架</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">订单</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">完成率</th>
              </tr>
            </thead>
            <tbody>
              {classStats.map((c, i) => (
                <tr key={i} className="border-b border-page-border/50 hover:bg-page-bg/50">
                  <td className="px-6 py-4 text-sm font-medium text-page-text">{c.name}</td>
                  <td className="text-center text-sm text-page-text-secondary px-4 py-4">{c.students}</td>
                  <td className="text-center text-sm text-page-text-secondary px-4 py-4">{c.designs}</td>
                  <td className="text-center text-sm text-page-text-secondary px-4 py-4">{c.listed}</td>
                  <td className="text-center text-sm font-medium text-success px-4 py-4">{c.orders}</td>
                  <td className="text-center px-4 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-16 h-1.5 bg-page-bg rounded-full overflow-hidden">
                        <div className="h-full bg-teacher rounded-full" style={{ width: `${c.completion}%` }} />
                      </div>
                      <span className="text-xs text-page-text-muted">{c.completion}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weekly Chart */}
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
          <div className="px-6 py-5 border-b border-page-border">
            <h3 className="font-semibold text-page-text">本周设计提交趋势</h3>
          </div>
          <div className="p-6">
            <div className="flex items-end gap-3 h-[200px]">
              {weeklyData.map((d, i) => {
                const pct = (d.designs / maxVal) * 100
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-page-text-secondary font-medium">{d.designs}</span>
                    <div className="w-full relative flex items-end" style={{ height: '150px' }}>
                      <div
                        className="w-full rounded-t-lg bg-teacher opacity-80 hover:opacity-100 transition-all cursor-pointer"
                        style={{ height: `${pct}%`, minHeight: '8px' }}
                      />
                    </div>
                    <span className="text-xs text-page-text-muted">{d.day}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
