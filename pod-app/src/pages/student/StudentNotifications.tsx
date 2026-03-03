import { Bell, CheckCircle, Clock, MessageCircle, Award, AlertTriangle, X, Check } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  { id: '1', type: 'success', icon: CheckCircle, title: '设计审核通过', desc: '您的作品《春日樱花猫咪T恤》已通过审核', time: '10分钟前', read: false },
  { id: '2', type: 'warning', icon: AlertTriangle, title: '作品需要修改', desc: '《街头涂鸦风卫衣》检测到潜在风险元素', time: '2小时前', read: false },
  { id: '3', type: 'info', icon: MessageCircle, title: '老师点评', desc: '王老师对您的设计给出了评价："创意不错..."', time: '昨天 16:30', read: false },
  { id: '4', type: 'award', icon: Award, title: '获得成就', desc: '恭喜解锁「销量新星」成就！', time: '昨天 10:15', read: true },
  { id: '5', type: 'order', icon: Clock, title: '新订单通知', desc: '您的商品收到一笔来自美国的订单', time: '3月1日', read: true },
  { id: '6', type: 'system', icon: Bell, title: '系统公告', desc: 'POD Dreamworks 平台将于本周六进行维护升级', time: '2月28日', read: true },
]

const typeColors: Record<string, string> = {
  success: 'text-success bg-success/10',
  warning: 'text-warning bg-warning/10',
  info: 'text-teacher bg-teacher/10',
  award: 'text-admin bg-admin/10',
  order: 'text-primary bg-primary/10',
  system: 'text-page-text-muted bg-page-bg',
}

export default function StudentNotifications() {
  const [items, setItems] = useState(notifications)
  const unreadCount = items.filter(n => !n.read).length

  const markRead = (id: string) => {
    setItems(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const markAllRead = () => {
    setItems(prev => prev.map(n => ({ ...n, read: true })))
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">消息通知</h1>
          <p className="text-page-text-secondary text-sm">
            {unreadCount > 0 ? `您有 ${unreadCount} 条未读消息` : '暂无未读消息'}
          </p>
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
          >
            <Check className="w-4 h-4" /> 全部已读
          </button>
        )}
      </div>

      <div className="space-y-3">
        {items.map((n) => (
          <div
            key={n.id}
            className={`bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] transition-all ${
              !n.read ? 'border-l-4 border-primary' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColors[n.type]}`}>
                <n.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-page-text">{n.title}</h4>
                  {!n.read && (
                    <span className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <p className="text-sm text-page-text-secondary">{n.desc}</p>
                <div className="text-xs text-page-text-muted mt-2">{n.time}</div>
              </div>
              {!n.read && (
                <button
                  onClick={() => markRead(n.id)}
                  className="p-2 text-page-text-muted hover:text-page-text hover:bg-page-bg rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {items.length === 0 && (
        <div className="text-center py-20">
          <Bell className="w-12 h-12 text-page-text-muted mx-auto mb-4 opacity-30" />
          <p className="text-page-text-secondary">暂无消息</p>
        </div>
      )}
    </div>
  )
}
