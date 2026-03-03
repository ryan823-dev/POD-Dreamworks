import { ListTodo, Plus, Calendar, Users, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const tasks = [
  { id: '1', title: '春季主题T恤设计', desc: '设计春季主题的T恤图案', deadline: '2025-03-10', classes: ['电商2301班', '电商2302班'], submissions: 45, total: 87, status: 'active' },
  { id: '2', title: '情人节马克杯设计', desc: '围绕情人节主题设计马克杯', deadline: '2025-02-28', classes: ['电商2301班'], submissions: 42, total: 45, status: 'completed' },
  { id: '3', title: '极简风手机壳设计', desc: '设计极简主义风格的手机壳', deadline: '2025-03-15', classes: ['电商2303班'], submissions: 12, total: 41, status: 'active' },
]

const statusMap: Record<string, { label: string; cls: string; icon: typeof CheckCircle }> = {
  active: { label: '进行中', cls: 'text-teacher bg-teacher/10', icon: Clock },
  completed: { label: '已结束', cls: 'text-success bg-success/10', icon: CheckCircle },
  draft: { label: '草稿', cls: 'text-page-text-muted bg-page-bg', icon: AlertCircle },
}

export default function TeacherTasks() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">任务列表</h1>
          <p className="text-page-text-secondary text-sm">管理设计任务与作业</p>
        </div>
        <Link
          to="/teacher/tasks/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teacher to-teacher-dark text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-teacher/30 transition-all"
        >
          <Plus className="w-4 h-4" /> 发布新任务
        </Link>
      </div>

      <div className="space-y-4">
        {tasks.map((t) => {
          const st = statusMap[t.status]
          const progress = (t.submissions / t.total) * 100
          return (
            <div key={t.id} className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-teacher/10 rounded-xl flex items-center justify-center">
                  <ListTodo className="w-6 h-6 text-teacher" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-page-text">{t.title}</h3>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium flex items-center gap-1 ${st.cls}`}>
                      <st.icon className="w-3 h-3" />{st.label}
                    </span>
                  </div>
                  <p className="text-sm text-page-text-secondary mb-3">{t.desc}</p>
                  <div className="flex items-center gap-6 text-xs text-page-text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> 截止: {t.deadline}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> {t.classes.join(', ')}
                    </span>
                  </div>
                </div>
                <div className="text-right min-w-[120px]">
                  <div className="text-2xl font-bold text-page-text">{t.submissions}/{t.total}</div>
                  <div className="text-xs text-page-text-muted mb-2">已提交</div>
                  <div className="h-1.5 bg-page-bg rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${t.status === 'completed' ? 'bg-success' : 'bg-teacher'}`} style={{ width: `${progress}%` }} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
