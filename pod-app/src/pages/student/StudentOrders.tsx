import { Package, Truck, CheckCircle, Clock, MapPin } from 'lucide-react'

const orders = [
  { id: 'ORD-2025030201', product: '春日樱花猫咪T恤', emoji: '👕', buyer: 'US***89', status: 'shipped', price: '$12.99', date: '2025-03-01', tracking: 'USPS1234567890' },
  { id: 'ORD-2025022812', product: '极简几何手机壳', emoji: '📱', buyer: 'UK***42', status: 'delivered', price: '$8.99', date: '2025-02-28', tracking: 'DHL9876543210' },
  { id: 'ORD-2025022756', product: '宇宙星空抱枕', emoji: '🛏️', buyer: 'CA***15', status: 'processing', price: '$15.99', date: '2025-02-27', tracking: '' },
  { id: 'ORD-2025022601', product: '极简几何手机壳', emoji: '📱', buyer: 'AU***33', status: 'delivered', price: '$8.99', date: '2025-02-26', tracking: 'FedEx1122334455' },
  { id: 'ORD-2025022503', product: '春日樱花猫咪T恤', emoji: '👕', buyer: 'DE***67', status: 'delivered', price: '$12.99', date: '2025-02-25', tracking: 'DHL6677889900' },
  { id: 'ORD-2025022209', product: '宇宙星空抱枕', emoji: '🛏️', buyer: 'FR***21', status: 'delivered', price: '$15.99', date: '2025-02-22', tracking: 'ColissimoABC123' },
]

const statusMap: Record<string, { label: string; cls: string; icon: typeof Package }> = {
  processing: { label: '处理中', cls: 'text-warning bg-warning/10', icon: Clock },
  shipped: { label: '已发货', cls: 'text-teacher bg-teacher/10', icon: Truck },
  delivered: { label: '已送达', cls: 'text-success bg-success/10', icon: CheckCircle },
}

export default function StudentOrders() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">我的订单</h1>
        <p className="text-page-text-secondary text-sm">追踪来自全球买家的真实订单</p>
      </div>

      <div className="grid grid-cols-3 gap-5 mb-8">
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-warning bg-warning/10">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">1</div>
          <div className="text-sm text-page-text-secondary">处理中</div>
        </div>
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-teacher bg-teacher/10">
            <Truck className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">1</div>
          <div className="text-sm text-page-text-secondary">运输中</div>
        </div>
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-success bg-success/10">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="text-[32px] font-bold text-page-text leading-none mb-1">4</div>
          <div className="text-sm text-page-text-secondary">已送达</div>
        </div>
      </div>

      <div className="space-y-4">
        {orders.map((o) => {
          const st = statusMap[o.status]
          return (
            <div key={o.id} className="bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-page-bg rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {o.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-semibold text-page-text">{o.product}</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium flex items-center gap-1 ${st.cls}`}>
                      <st.icon className="w-3 h-3" />{st.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-page-text-muted">
                    <span>订单号: {o.id}</span>
                    <span>买家: {o.buyer}</span>
                    <span>{o.date}</span>
                  </div>
                  {o.tracking && (
                    <div className="flex items-center gap-2 mt-2 text-xs text-page-text-secondary">
                      <MapPin className="w-3 h-3" />
                      <span>物流单号: {o.tracking}</span>
                    </div>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xl font-bold text-page-text">{o.price}</div>
                  <div className="text-[11px] text-page-text-muted">Temu</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
