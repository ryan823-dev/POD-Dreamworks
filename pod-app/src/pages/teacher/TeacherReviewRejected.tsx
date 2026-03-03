import { Link } from 'react-router-dom'
import { XCircle, Eye, RefreshCw } from 'lucide-react'

const rejected = [
  { id: '3', title: '街头涂鸦风卫衣设计', student: '王大力', cls: '电商2302班', time: '2025-02-28 11:30', emoji: '🧥', reason: '疑似包含品牌logo元素' },
  { id: '5', title: '动漫角色T恤设计', student: '刘雨桐', cls: '电商2303班', time: '2025-02-25 15:45', emoji: '👕', reason: '版权角色，需要授权' },
]

export default function TeacherReviewRejected() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">已退回</h1>
        <p className="text-page-text-secondary text-sm">共 {rejected.length} 件作品被退回</p>
      </div>

      <div className="space-y-3">
        {rejected.map((r) => (
          <div
            key={r.id}
            className="p-5 bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] border-l-4 border-danger"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-danger/10 rounded-xl flex items-center justify-center text-2xl">
                {r.emoji}
              </div>
              <div className="flex-1">
                <div className="font-medium text-page-text">{r.title}</div>
                <div className="text-xs text-page-text-muted mt-1">
                  <span className="text-teacher">{r.student}</span> · {r.cls} · {r.time}
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-danger/10 text-danger flex items-center gap-1">
                <XCircle className="w-3 h-3" /> 已退回
              </span>
              <div className="flex gap-2">
                <Link to={`/teacher/review/${r.id}`} className="p-2 text-page-text-muted hover:text-teacher hover:bg-teacher/10 rounded-lg transition-colors">
                  <Eye className="w-4 h-4" />
                </Link>
                <button className="p-2 text-page-text-muted hover:text-success hover:bg-success/10 rounded-lg transition-colors">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="mt-3 p-3 bg-danger/5 rounded-lg text-sm text-danger">
              退回原因：{r.reason}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
