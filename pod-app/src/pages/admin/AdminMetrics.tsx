import { Target, TrendingUp, TrendingDown } from 'lucide-react'

const metrics = [
  { label: '月活学校', value: 12, target: 15, unit: '所', trend: '+2', up: true },
  { label: '月活学生', value: 2856, target: 3500, unit: '人', trend: '+328', up: true },
  { label: '月新设计', value: 4280, target: 5000, unit: '件', trend: '+12%', up: true },
  { label: '月上架数', value: 1890, target: 2500, unit: '件', trend: '+8%', up: true },
  { label: '月订单数', value: 456, target: 600, unit: '笔', trend: '-5%', up: false },
  { label: '平均客单价', value: 12.8, target: 15, unit: '$', trend: '+0.5', up: true },
]

const weeklyTrends = [
  { week: 'W1', designs: 980, listings: 420, orders: 98 },
  { week: 'W2', designs: 1120, listings: 480, orders: 112 },
  { week: 'W3', designs: 1050, listings: 450, orders: 105 },
  { week: 'W4', designs: 1130, listings: 540, orders: 141 },
]

export default function AdminMetrics() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-white mb-1">关键指标</h1>
        <p className="text-sm text-text-secondary">2025年3月运营指标追踪</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        {metrics.map((m, i) => {
          const progress = (m.value / m.target) * 100
          return (
            <div key={i} className="bg-white/[0.03] border border-border rounded-[16px] p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-secondary">{m.label}</span>
                <span className={`flex items-center gap-1 text-xs font-medium ${m.up ? 'text-success' : 'text-danger'}`}>
                  {m.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {m.trend}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-3xl font-bold text-white">{typeof m.value === 'number' && m.value > 100 ? m.value.toLocaleString() : m.value}</span>
                <span className="text-sm text-text-muted">/ {m.target}{m.unit}</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${progress >= 80 ? 'bg-success' : progress >= 60 ? 'bg-admin' : 'bg-warning'}`}
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
              <div className="text-xs text-text-muted mt-2 text-right">{progress.toFixed(0)}% 达成</div>
            </div>
          )
        })}
      </div>

      <div className="bg-white/[0.03] border border-border rounded-[16px] p-6">
        <h3 className="font-semibold text-white mb-6 flex items-center gap-2">
          <Target className="w-4 h-4 text-admin" /> 周数据趋势
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs text-text-muted font-medium px-4 py-3">周次</th>
                <th className="text-center text-xs text-text-muted font-medium px-4 py-3">设计作品</th>
                <th className="text-center text-xs text-text-muted font-medium px-4 py-3">上架商品</th>
                <th className="text-center text-xs text-text-muted font-medium px-4 py-3">订单数</th>
                <th className="text-center text-xs text-text-muted font-medium px-4 py-3">转化率</th>
              </tr>
            </thead>
            <tbody>
              {weeklyTrends.map((w, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="px-4 py-4 text-sm font-medium text-white">{w.week}</td>
                  <td className="text-center text-sm text-text-secondary px-4 py-4">{w.designs.toLocaleString()}</td>
                  <td className="text-center text-sm text-text-secondary px-4 py-4">{w.listings}</td>
                  <td className="text-center text-sm font-medium text-success px-4 py-4">{w.orders}</td>
                  <td className="text-center text-sm text-admin px-4 py-4">{((w.orders / w.listings) * 100).toFixed(1)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
