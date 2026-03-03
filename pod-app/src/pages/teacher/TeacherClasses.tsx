import { Users, MoreVertical } from 'lucide-react'

const classes = [
  { id: '1', name: '电商2301班', students: 45, designs: 420, completion: 78, avgScore: 85 },
  { id: '2', name: '电商2302班', students: 42, designs: 380, completion: 65, avgScore: 82 },
  { id: '3', name: '电商2303班', students: 41, designs: 320, completion: 52, avgScore: 79 },
]

export default function TeacherClasses() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">班级列表</h1>
          <p className="text-page-text-secondary text-sm">管理 {classes.length} 个班级</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {classes.map((c) => (
          <div key={c.id} className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-teacher to-teacher-dark" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-page-text">{c.name}</h3>
                  <p className="text-sm text-page-text-muted flex items-center gap-1 mt-1">
                    <Users className="w-3.5 h-3.5" /> {c.students} 名学生
                  </p>
                </div>
                <button className="p-2 text-page-text-muted hover:bg-page-bg rounded-lg">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-page-bg rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-page-text">{c.designs}</div>
                  <div className="text-[11px] text-page-text-muted">设计作品</div>
                </div>
                <div className="bg-page-bg rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-success">{c.completion}%</div>
                  <div className="text-[11px] text-page-text-muted">完成率</div>
                </div>
                <div className="bg-page-bg rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-teacher">{c.avgScore}</div>
                  <div className="text-[11px] text-page-text-muted">平均分</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2.5 bg-teacher/10 text-teacher text-sm font-medium rounded-xl hover:bg-teacher/20 transition-colors">
                  查看学生
                </button>
                <button className="flex-1 py-2.5 bg-page-bg text-page-text-secondary text-sm font-medium rounded-xl hover:bg-page-border transition-colors">
                  数据报表
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
