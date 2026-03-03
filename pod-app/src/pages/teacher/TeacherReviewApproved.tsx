import { Link } from 'react-router-dom'
import { CheckCircle, Eye } from 'lucide-react'

const approved = [
  { id: '1', title: '春日樱花猫咪T恤设计', student: '张小红', cls: '电商2301班', time: '2025-03-01 16:30', emoji: '👕' },
  { id: '2', title: '极简几何手机壳设计', student: '赵小雨', cls: '电商2301班', time: '2025-02-28 14:20', emoji: '📱' },
  { id: '3', title: '宇宙星空抱枕设计', student: '李明', cls: '电商2301班', time: '2025-02-27 10:15', emoji: '🛏️' },
  { id: '4', title: '复古花卉帆布袋设计', student: '陈思远', cls: '电商2302班', time: '2025-02-26 09:30', emoji: '👜' },
]

export default function TeacherReviewApproved() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">已通过</h1>
        <p className="text-page-text-secondary text-sm">共 {approved.length} 件作品已通过审核</p>
      </div>

      <div className="space-y-3">
        {approved.map((r) => (
          <Link
            key={r.id}
            to={`/teacher/review/${r.id}`}
            className="flex items-center gap-4 p-5 bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all"
          >
            <div className="w-14 h-14 bg-success/10 rounded-xl flex items-center justify-center text-2xl">
              {r.emoji}
            </div>
            <div className="flex-1">
              <div className="font-medium text-page-text">{r.title}</div>
              <div className="text-xs text-page-text-muted mt-1">
                <span className="text-teacher">{r.student}</span> · {r.cls} · {r.time}
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-success/10 text-success flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> 已通过
            </span>
            <button className="p-2 text-page-text-muted hover:text-teacher hover:bg-teacher/10 rounded-lg transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}
