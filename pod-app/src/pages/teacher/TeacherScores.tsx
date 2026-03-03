import { Download, Search, Filter } from 'lucide-react'
import { useState } from 'react'

const scores = [
  { id: '1', name: '张小红', cls: '电商2301班', task1: 92, task2: 88, task3: 95, avg: 91.7, rank: 1 },
  { id: '2', name: '赵小雨', cls: '电商2301班', task1: 88, task2: 90, task3: 85, avg: 87.7, rank: 2 },
  { id: '3', name: '李明', cls: '电商2301班', task1: 85, task2: 82, task3: 88, avg: 85.0, rank: 3 },
  { id: '4', name: '陈思远', cls: '电商2302班', task1: 78, task2: 85, task3: 80, avg: 81.0, rank: 4 },
  { id: '5', name: '王大力', cls: '电商2302班', task1: 75, task2: 78, task3: 72, avg: 75.0, rank: 5 },
  { id: '6', name: '刘雨桐', cls: '电商2303班', task1: 70, task2: 68, task3: 75, avg: 71.0, rank: 6 },
]

export default function TeacherScores() {
  const [search, setSearch] = useState('')
  const filtered = scores.filter(s => !search || s.name.includes(search))

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">成绩管理</h1>
          <p className="text-page-text-secondary text-sm">查看和管理学生成绩</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-teacher text-white rounded-xl text-sm font-semibold hover:bg-teacher-dark transition-colors">
          <Download className="w-4 h-4" /> 导出成绩
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-page-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索学生..."
            className="w-full pl-10 pr-4 py-2.5 bg-page-surface border border-page-border rounded-xl text-sm text-page-text outline-none focus:ring-2 focus:ring-teacher/20"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-page-surface border border-page-border rounded-xl text-sm text-page-text-secondary hover:text-page-text transition-colors">
          <Filter className="w-4 h-4" /> 筛选班级
        </button>
      </div>

      <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-page-border">
              <th className="text-left text-xs text-page-text-muted font-medium px-6 py-4">排名</th>
              <th className="text-left text-xs text-page-text-muted font-medium px-4 py-4">学生</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">任务一</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">任务二</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">任务三</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">平均分</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-page-border/50 hover:bg-page-bg/50">
                <td className="px-6 py-4 text-center">
                  {s.rank <= 3 ? (
                    <span className="text-xl">{['🥇', '🥈', '🥉'][s.rank - 1]}</span>
                  ) : (
                    <span className="text-sm text-page-text-muted font-medium">#{s.rank}</span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teacher to-teacher-dark flex items-center justify-center text-white text-sm font-semibold">
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-page-text">{s.name}</div>
                      <div className="text-[11px] text-page-text-muted">{s.cls}</div>
                    </div>
                  </div>
                </td>
                <td className="text-center text-sm font-medium text-page-text px-4 py-4">{s.task1}</td>
                <td className="text-center text-sm font-medium text-page-text px-4 py-4">{s.task2}</td>
                <td className="text-center text-sm font-medium text-page-text px-4 py-4">{s.task3}</td>
                <td className="text-center px-4 py-4">
                  <span className={`text-lg font-bold ${s.avg >= 90 ? 'text-success' : s.avg >= 80 ? 'text-teacher' : 'text-warning'}`}>
                    {s.avg.toFixed(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
