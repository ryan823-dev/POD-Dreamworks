import { Plus, MoreVertical } from 'lucide-react'

const products = [
  { id: '1', name: 'T恤', emoji: '👕', supplier: 'Printful', baseCost: '$8.50', enabled: true, designs: 4280 },
  { id: '2', name: '卫衣', emoji: '🧥', supplier: 'Printful', baseCost: '$18.00', enabled: true, designs: 2150 },
  { id: '3', name: '马克杯', emoji: '☕', supplier: 'Gooten', baseCost: '$5.20', enabled: true, designs: 1890 },
  { id: '4', name: '手机壳', emoji: '📱', supplier: 'Gooten', baseCost: '$4.80', enabled: true, designs: 1560 },
  { id: '5', name: '帆布袋', emoji: '👜', supplier: 'Printify', baseCost: '$6.00', enabled: true, designs: 980 },
  { id: '6', name: '抱枕', emoji: '🛏️', supplier: 'Printify', baseCost: '$12.00', enabled: true, designs: 720 },
  { id: '7', name: '挂画', emoji: '🖼️', supplier: 'Printful', baseCost: '$15.00', enabled: false, designs: 450 },
]

export default function AdminProducts() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">产品库配置</h1>
          <p className="text-sm text-text-secondary">管理 POD 产品目录和供应商</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Plus className="w-4 h-4" /> 添加产品
        </button>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-text-muted font-medium px-6 py-4">产品</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">供应商</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">基础成本</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">设计数量</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">状态</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/[0.05] rounded-lg flex items-center justify-center text-2xl">
                      {p.emoji}
                    </div>
                    <span className="font-medium text-white">{p.name}</span>
                  </div>
                </td>
                <td className="text-sm text-text-secondary px-4 py-4">{p.supplier}</td>
                <td className="text-center text-sm font-medium text-admin px-4 py-4">{p.baseCost}</td>
                <td className="text-center text-sm text-white px-4 py-4">{p.designs.toLocaleString()}</td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    p.enabled ? 'bg-success/15 text-success' : 'bg-text-muted/10 text-text-muted'
                  }`}>
                    {p.enabled ? '启用' : '停用'}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  <button className="p-2 text-text-muted hover:bg-white/5 rounded-lg">
                    <MoreVertical className="w-4 h-4" />
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
