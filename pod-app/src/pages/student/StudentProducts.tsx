import { Package, ExternalLink, Eye, TrendingUp, DollarSign, ShoppingCart } from 'lucide-react'

const products = [
  { id: '1', name: '春日樱花猫咪T恤', emoji: '👕', platform: 'Temu', price: '$12.99', sales: 18, views: 342, status: 'active' },
  { id: '2', name: '极简几何手机壳', emoji: '📱', platform: 'Temu', price: '$8.99', sales: 24, views: 586, status: 'active' },
  { id: '3', name: '宇宙星空抱枕', emoji: '🛏️', platform: 'Temu', price: '$15.99', sales: 12, views: 218, status: 'active' },
  { id: '4', name: '复古花卉帆布袋', emoji: '👜', platform: 'Temu', price: '$9.99', sales: 8, views: 156, status: 'pending' },
]

const stats = [
  { label: '在售商品', value: '4', icon: Package, color: 'text-primary bg-primary/10' },
  { label: '总销量', value: '62', icon: ShoppingCart, color: 'text-success bg-success/10' },
  { label: '总浏览', value: '1,302', icon: Eye, color: 'text-teacher bg-teacher/10' },
  { label: '预估收益', value: '$186', icon: DollarSign, color: 'text-admin bg-admin/10' },
]

export default function StudentProducts() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">已上架商品</h1>
          <p className="text-page-text-secondary text-sm">查看商品在 Temu 平台的表现</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 mb-8">
        {stats.map((s, i) => (
          <div key={i} className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.color}`}>
              <s.icon className="w-5 h-5" />
            </div>
            <div className="text-[32px] font-bold text-page-text leading-none mb-1">{s.value}</div>
            <div className="text-sm text-page-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] overflow-hidden">
        <div className="px-6 py-5 border-b border-page-border">
          <h3 className="font-semibold text-page-text">商品列表</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-page-border">
              <th className="text-left text-xs text-page-text-muted font-medium px-6 py-3">商品</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">平台</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">售价</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">销量</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">浏览量</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">状态</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-page-border/50 hover:bg-page-bg/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-page-bg rounded-xl flex items-center justify-center text-2xl">{p.emoji}</div>
                    <span className="text-sm font-medium text-page-text">{p.name}</span>
                  </div>
                </td>
                <td className="text-center text-sm text-page-text-secondary px-4 py-4">{p.platform}</td>
                <td className="text-center text-sm font-semibold text-page-text px-4 py-4">{p.price}</td>
                <td className="text-center px-4 py-4">
                  <span className="text-sm font-semibold text-success flex items-center justify-center gap-1">
                    <TrendingUp className="w-3 h-3" />{p.sales}
                  </span>
                </td>
                <td className="text-center text-sm text-page-text-secondary px-4 py-4">{p.views}</td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    p.status === 'active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                  }`}>
                    {p.status === 'active' ? '在售' : '待上架'}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  <button className="text-primary hover:text-primary-dark">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
