import { useState } from 'react'
import { FileDown, Calendar, Users, FileText, Download, CheckCircle } from 'lucide-react'

const exportTypes = [
  { id: 'scores', label: '学生成绩表', desc: '包含所有任务成绩和排名', icon: FileText },
  { id: 'designs', label: '设计作品汇总', desc: '学生设计作品统计', icon: FileDown },
  { id: 'progress', label: '学习进度报告', desc: '课程完成情况和积分', icon: Calendar },
]

const recentExports = [
  { name: '电商2301班成绩表.xlsx', date: '2025-03-01 14:30', size: '128KB' },
  { name: '2月设计作品汇总.xlsx', date: '2025-02-28 16:45', size: '256KB' },
  { name: '全班学习进度报告.pdf', date: '2025-02-25 10:20', size: '1.2MB' },
]

export default function TeacherExport() {
  const [selectedType, setSelectedType] = useState('scores')
  const [selectedClass, setSelectedClass] = useState('all')
  const [exporting, setExporting] = useState(false)

  const handleExport = () => {
    setExporting(true)
    setTimeout(() => setExporting(false), 2000)
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">导出报告</h1>
        <p className="text-page-text-secondary text-sm">导出学生数据和报告</p>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-6">
        {/* Export Config */}
        <div className="space-y-6">
          {/* Type */}
          <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-semibold text-page-text mb-4">选择导出类型</h3>
            <div className="space-y-3">
              {exportTypes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedType(t.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                    selectedType === t.id
                      ? 'bg-teacher/10 ring-2 ring-teacher'
                      : 'bg-page-bg hover:bg-page-border'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    selectedType === t.id ? 'bg-teacher text-white' : 'bg-page-surface text-page-text-muted'
                  }`}>
                    <t.icon className="w-5 h-5" />
                  </div>
                  <div className="text-left flex-1">
                    <div className="font-medium text-page-text">{t.label}</div>
                    <div className="text-xs text-page-text-muted">{t.desc}</div>
                  </div>
                  {selectedType === t.id && <CheckCircle className="w-5 h-5 text-teacher" />}
                </button>
              ))}
            </div>
          </div>

          {/* Class */}
          <div className="bg-page-surface rounded-[16px] p-6 shadow-[var(--shadow-card)]">
            <h3 className="font-semibold text-page-text mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-teacher" /> 选择班级
            </h3>
            <div className="flex flex-wrap gap-2">
              {['all', '电商2301班', '电商2302班', '电商2303班'].map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedClass(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedClass === c
                      ? 'bg-teacher text-white'
                      : 'bg-page-bg text-page-text-secondary hover:text-page-text'
                  }`}
                >
                  {c === 'all' ? '全部班级' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Export Button */}
          <button
            onClick={handleExport}
            disabled={exporting}
            className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
              exporting ? 'bg-teacher/50' : 'bg-gradient-to-r from-teacher to-teacher-dark hover:shadow-lg hover:shadow-teacher/30'
            }`}
          >
            {exporting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Download className="w-4 h-4" /> 导出报告
              </>
            )}
          </button>
        </div>

        {/* Recent Exports */}
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
          <div className="px-6 py-5 border-b border-page-border">
            <h3 className="font-semibold text-page-text">最近导出</h3>
          </div>
          <div className="p-4 space-y-3">
            {recentExports.map((e, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-page-bg rounded-xl">
                <div className="w-10 h-10 bg-teacher/10 rounded-lg flex items-center justify-center">
                  <FileDown className="w-5 h-5 text-teacher" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-page-text truncate">{e.name}</div>
                  <div className="text-[11px] text-page-text-muted">{e.date} · {e.size}</div>
                </div>
                <button className="p-2 text-teacher hover:bg-teacher/10 rounded-lg transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
