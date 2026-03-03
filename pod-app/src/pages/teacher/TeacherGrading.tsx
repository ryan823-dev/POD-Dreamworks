import { Edit, CheckCircle, Clock } from 'lucide-react'

const assignments = [
  { id: '1', student: '张小红', cls: '电商2301班', task: '春季主题T恤设计', submitted: '2025-03-01', status: 'pending', designs: 3 },
  { id: '2', student: '李明', cls: '电商2301班', task: '春季主题T恤设计', submitted: '2025-03-01', status: 'pending', designs: 2 },
  { id: '3', student: '赵小雨', cls: '电商2301班', task: '春季主题T恤设计', submitted: '2025-02-28', status: 'graded', score: 92, designs: 4 },
  { id: '4', student: '王大力', cls: '电商2302班', task: '情人节马克杯设计', submitted: '2025-02-25', status: 'graded', score: 78, designs: 2 },
  { id: '5', student: '陈思远', cls: '电商2302班', task: '情人节马克杯设计', submitted: '2025-02-24', status: 'graded', score: 85, designs: 3 },
]

export default function TeacherGrading() {
  const pending = assignments.filter(a => a.status === 'pending')
  const graded = assignments.filter(a => a.status === 'graded')

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">作业批改</h1>
          <p className="text-page-text-secondary text-sm">{pending.length} 份待批改</p>
        </div>
      </div>

      {/* Pending */}
      {pending.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold text-page-text flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-warning" /> 待批改 ({pending.length})
          </h3>
          <div className="space-y-3">
            {pending.map((a) => (
              <div key={a.id} className="bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] border-l-4 border-warning">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teacher to-teacher-dark flex items-center justify-center text-white font-semibold">
                    {a.student.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-page-text">{a.student}</div>
                    <div className="text-xs text-page-text-muted">{a.cls} · {a.task}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-page-text">{a.designs}</div>
                    <div className="text-[11px] text-page-text-muted">件作品</div>
                  </div>
                  <div className="text-xs text-page-text-muted">{a.submitted}</div>
                  <button className="px-4 py-2 bg-teacher text-white text-sm font-medium rounded-xl hover:bg-teacher-dark transition-colors flex items-center gap-2">
                    <Edit className="w-4 h-4" /> 批改
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Graded */}
      <div>
        <h3 className="font-semibold text-page-text flex items-center gap-2 mb-4">
          <CheckCircle className="w-4 h-4 text-success" /> 已批改 ({graded.length})
        </h3>
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-page-border">
                <th className="text-left text-xs text-page-text-muted font-medium px-6 py-4">学生</th>
                <th className="text-left text-xs text-page-text-muted font-medium px-4 py-4">任务</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">作品数</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">分数</th>
                <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">提交时间</th>
              </tr>
            </thead>
            <tbody>
              {graded.map((a) => (
                <tr key={a.id} className="border-b border-page-border/50 hover:bg-page-bg/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teacher to-teacher-dark flex items-center justify-center text-white text-sm font-semibold">
                        {a.student.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-page-text">{a.student}</div>
                        <div className="text-[11px] text-page-text-muted">{a.cls}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-sm text-page-text-secondary px-4 py-4">{a.task}</td>
                  <td className="text-center text-sm text-page-text px-4 py-4">{a.designs}</td>
                  <td className="text-center px-4 py-4">
                    <span className={`text-lg font-bold ${a.score && a.score >= 90 ? 'text-success' : a.score && a.score >= 80 ? 'text-teacher' : 'text-warning'}`}>
                      {a.score}
                    </span>
                  </td>
                  <td className="text-center text-xs text-page-text-muted px-4 py-4">{a.submitted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
