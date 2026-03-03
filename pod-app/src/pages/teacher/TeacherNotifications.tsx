import { Bell, CheckCircle, Clock, MessageCircle, AlertTriangle, X, Check } from 'lucide-react'
import { useState } from 'react'

const notifications = [
  { id: '1', type: 'review', icon: Clock, title: '新作品待审核', desc: '张小红提交了新设计《卡通柴犬T恤》', time: '10分钟前', read: false },
  { id: '2', type: 'warning', icon: AlertTriangle, title: '侵权风险提醒', desc: '王大力的作品《街头涂鸦风卫衣》检测到风险', time: '30分钟前', read: false },
  { id: '3', type: 'success', icon: CheckCircle, title: '任务完成', desc: '电商2301班完成了「春季主题T恤设计」任务', time: '2小时前', read: false },
  { id: '4', type: 'message', icon: MessageCircle, title: '学生留言', desc: '李明对您的评价有疑问，请查看', time: '昨天 16:30', read: true },
  { id: '5', type: 'system', icon: Bell, title: '系统通知', desc: '平台将于本周六进行维护升级', time: '2天前', read: true },
]

const typeColors: Record<string, string> = {
  review: 'text-teacher bg-teacher/10',
  warning: 'text-warning bg-warning/10',
  success: 'text-success bg-success/10',
  message: 'text-primary bg-primary/10',
  system: 'text-page-text-muted bg-page-bg',
}

export default function TeacherNotifications() {
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
          <h1 className="text-[28px] font-bold text-page-text mb-1">通知提醒</h1>
          <p className="text-page-text-secondary text-sm">
            {unreadCount > 0 ? `您有 ${unreadCount} 条未读通知` : '暂无未读通知'}
          </p>
        </div>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="flex items-center gap-2 px-4 py-2 text-sm text-teacher hover:bg-teacher/5 rounded-lg transition-colors">
            <Check className="w-4 h-4" /> 全部已读
          </button>
        )}
      </div>

      <div className="space-y-3">
        {items.map((n) => (
          <div
            key={n.id}
            className={`bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] transition-all ${!n.read ? 'border-l-4 border-teacher' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${typeColors[n.type]}`}>
                <n.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-page-text">{n.title}</h4>
                  {!n.read && <span className="w-2 h-2 bg-teacher rounded-full" />}
                </div>
                <p className="text-sm text-page-text-secondary">{n.desc}</p>
                <div className="text-xs text-page-text-muted mt-2">{n.time}</div>
              </div>
              {!n.read && (
                <button onClick={() => markRead(n.id)} className="p-2 text-page-text-muted hover:text-page-text hover:bg-page-bg rounded-lg transition-colors">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
