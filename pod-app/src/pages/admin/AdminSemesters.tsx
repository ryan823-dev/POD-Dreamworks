import { Calendar, Plus, CheckCircle } from 'lucide-react'

const semesters = [
  { id: '1', name: '2024-2025学年第二学期', start: '2025-02-17', end: '2025-06-30', status: 'current', tasks: 12, students: 656 },
  { id: '2', name: '2024-2025学年第一学期', start: '2024-09-01', end: '2025-01-15', status: 'completed', tasks: 24, students: 620 },
  { id: '3', name: '2025-2026学年第一学期', start: '2025-09-01', end: '2026-01-15', status: 'upcoming', tasks: 0, students: 0 },
]

export default function AdminSemesters() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">学期设置</h1>
          <p className="text-sm text-text-secondary">管理教学学期和时间安排</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Plus className="w-4 h-4" /> 添加学期
        </button>
      </div>

      <div className="space-y-4">
        {semesters.map((s) => (
          <div key={s.id} className={`bg-white/[0.03] border rounded-[16px] p-6 ${s.status === 'current' ? 'border-admin' : 'border-border'}`}>
            <div className="flex items-center gap-5">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                s.status === 'current' ? 'bg-admin/20 text-admin' :
                s.status === 'completed' ? 'bg-success/20 text-success' : 'bg-white/5 text-text-muted'
              }`}>
                {s.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : <Calendar className="w-6 h-6" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-semibold text-white">{s.name}</h3>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    s.status === 'current' ? 'bg-admin/15 text-admin' :
                    s.status === 'completed' ? 'bg-success/15 text-success' : 'bg-white/5 text-text-muted'
                  }`}>
                    {s.status === 'current' ? '当前学期' : s.status === 'completed' ? '已结束' : '即将开始'}
                  </span>
                </div>
                <div className="text-sm text-text-secondary">{s.start} 至 {s.end}</div>
              </div>
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{s.tasks}</div>
                  <div className="text-xs text-text-muted">任务数</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{s.students}</div>
                  <div className="text-xs text-text-muted">参与学生</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
