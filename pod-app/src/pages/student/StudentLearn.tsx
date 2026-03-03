import { BookOpen, Play, CheckCircle, Clock, Award, ChevronRight } from 'lucide-react'

const courses = [
  { id: '1', title: '跨境电商选品策略', category: '选品', progress: 100, lessons: 8, duration: '2.5h', status: 'completed' },
  { id: '2', title: 'POD设计创作基础', category: '设计', progress: 75, lessons: 12, duration: '4h', status: 'in_progress' },
  { id: '3', title: 'Temu平台上架实操', category: '上架', progress: 30, lessons: 6, duration: '1.5h', status: 'in_progress' },
  { id: '4', title: '订单数据分析入门', category: '分析', progress: 0, lessons: 5, duration: '1h', status: 'locked' },
  { id: '5', title: '跨境物流与售后', category: '运营', progress: 0, lessons: 4, duration: '1h', status: 'locked' },
]

const skills = [
  { name: '选品分析', level: 3, max: 5 },
  { name: '设计创作', level: 2, max: 5 },
  { name: '产品上架', level: 1, max: 5 },
  { name: '数据分析', level: 1, max: 5 },
]

export default function StudentLearn() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">学习中心</h1>
          <p className="text-page-text-secondary text-sm">系统学习跨境电商实战技能</p>
        </div>
        <div className="flex items-center gap-3 bg-page-surface rounded-xl px-4 py-2 shadow-[var(--shadow-card)]">
          <Award className="w-5 h-5 text-admin" />
          <div>
            <div className="text-xs text-page-text-muted">学习时长</div>
            <div className="font-bold text-page-text">12.5 小时</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-6">
        {/* Left - Courses */}
        <div className="space-y-4">
          <h3 className="font-semibold text-page-text flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" /> 课程列表
          </h3>
          {courses.map((c) => (
            <div
              key={c.id}
              className={`bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all ${
                c.status === 'locked' ? 'opacity-60' : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                  c.status === 'completed' ? 'bg-success/10 text-success' :
                  c.status === 'in_progress' ? 'bg-primary/10 text-primary' : 'bg-page-bg text-page-text-muted'
                }`}>
                  {c.status === 'completed' ? <CheckCircle className="w-6 h-6" /> :
                   c.status === 'in_progress' ? <Play className="w-6 h-6" /> : <Clock className="w-6 h-6" />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-page-text">{c.title}</h4>
                    <span className="px-2 py-0.5 bg-page-bg text-[11px] text-page-text-muted rounded">{c.category}</span>
                  </div>
                  <div className="text-xs text-page-text-muted mb-3">
                    {c.lessons} 节课 · {c.duration}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-page-bg rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${c.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-page-text-muted">{c.progress}%</span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 ${c.status === 'locked' ? 'text-page-text-muted' : 'text-primary'}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Right - Skills */}
        <div>
          <h3 className="font-semibold text-page-text flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-admin" /> 技能等级
          </h3>
          <div className="bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)]">
            <div className="space-y-4">
              {skills.map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-page-text">{s.name}</span>
                    <span className="text-xs text-page-text-muted">Lv.{s.level}/{s.max}</span>
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: s.max }).map((_, j) => (
                      <div
                        key={j}
                        className={`flex-1 h-2 rounded ${j < s.level ? 'bg-primary' : 'bg-page-bg'}`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-page-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-page-text mb-1">
                  初级学员
                </div>
                <p className="text-xs text-page-text-muted">完成更多课程提升等级</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
