import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, Users, FileText, Send, Image } from 'lucide-react'

const productTypes = ['T恤', '卫衣', '马克杯', '手机壳', '帆布袋', '抱枕', '挂画', '其他']
const classOptions = [
  { id: '1', name: '电商2301班', students: 45 },
  { id: '2', name: '电商2302班', students: 42 },
  { id: '3', name: '电商2303班', students: 41 },
]

export default function TeacherTaskNew() {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [deadline, setDeadline] = useState('')
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])
  const [submitting, setSubmitting] = useState(false)

  const toggleClass = (id: string) => {
    setSelectedClasses(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id])
  }

  const toggleProduct = (p: string) => {
    setSelectedProducts(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !deadline || selectedClasses.length === 0) return
    setSubmitting(true)
    setTimeout(() => {
      navigate('/teacher/tasks')
    }, 800)
  }

  const totalStudents = classOptions.filter(c => selectedClasses.includes(c.id)).reduce((sum, c) => sum + c.students, 0)

  return (
    <div className="p-8 max-w-[800px]">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-page-text-secondary hover:text-page-text mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" /> 返回任务列表
      </button>

      <div className="mb-8">
        <h1 className="text-[28px] font-bold text-page-text mb-1">发布新任务</h1>
        <p className="text-page-text-secondary text-sm">创建设计任务并分配给班级学生</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <label className="block text-sm font-medium text-page-text mb-3">任务标题 *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="例如：春季主题T恤设计"
            className="w-full px-4 py-3 bg-page-bg border border-page-border rounded-xl text-page-text outline-none focus:ring-2 focus:ring-teacher/20"
            required
          />
        </div>

        {/* Description */}
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <label className="block text-sm font-medium text-page-text mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 text-teacher" /> 任务描述
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="详细描述任务要求、设计规范、评分标准等..."
            rows={4}
            className="w-full px-4 py-3 bg-page-bg border border-page-border rounded-xl text-page-text outline-none focus:ring-2 focus:ring-teacher/20 resize-none"
          />
        </div>

        {/* Deadline */}
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <label className="block text-sm font-medium text-page-text mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teacher" /> 截止日期 *
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-3 bg-page-bg border border-page-border rounded-xl text-page-text outline-none focus:ring-2 focus:ring-teacher/20"
            required
          />
        </div>

        {/* Classes */}
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <label className="block text-sm font-medium text-page-text mb-3 flex items-center gap-2">
            <Users className="w-4 h-4 text-teacher" /> 分配班级 *
            {totalStudents > 0 && <span className="text-xs text-page-text-muted font-normal">（共 {totalStudents} 名学生）</span>}
          </label>
          <div className="flex flex-wrap gap-3">
            {classOptions.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => toggleClass(c.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  selectedClasses.includes(c.id)
                    ? 'bg-teacher text-white'
                    : 'bg-page-bg text-page-text-secondary hover:bg-page-border'
                }`}
              >
                {c.name} ({c.students}人)
              </button>
            ))}
          </div>
        </div>

        {/* Product Types */}
        <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
          <label className="block text-sm font-medium text-page-text mb-3 flex items-center gap-2">
            <Image className="w-4 h-4 text-teacher" /> 允许的产品类型
          </label>
          <div className="flex flex-wrap gap-2">
            {productTypes.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => toggleProduct(p)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                  selectedProducts.includes(p)
                    ? 'bg-teacher/10 text-teacher ring-1 ring-teacher'
                    : 'bg-page-bg text-page-text-muted hover:text-page-text'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
          <p className="text-xs text-page-text-muted mt-2">不选择则允许所有类型</p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting || !title || !deadline || selectedClasses.length === 0}
          className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
            submitting || !title || !deadline || selectedClasses.length === 0
              ? 'bg-teacher/50 cursor-not-allowed'
              : 'bg-gradient-to-r from-teacher to-teacher-dark hover:shadow-lg hover:shadow-teacher/30'
          }`}
        >
          {submitting ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              <Send className="w-4 h-4" /> 发布任务
            </>
          )}
        </button>
      </form>
    </div>
  )
}
