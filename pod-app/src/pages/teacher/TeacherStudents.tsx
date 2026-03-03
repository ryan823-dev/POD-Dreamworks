import { Users, Search, Mail, MoreVertical, Award } from 'lucide-react'
import { useState } from 'react'

const classes = [
  { id: '1', name: '电商2301班', students: 45, active: true },
  { id: '2', name: '电商2302班', students: 42, active: true },
  { id: '3', name: '电商2303班', students: 41, active: true },
]

const students = [
  { id: '1', name: '张小红', avatar: '张', class: '电商2301班', designs: 28, listed: 15, orders: 6, points: 1280, status: 'active', rank: 1 },
  { id: '2', name: '李明', avatar: '李', class: '电商2301班', designs: 22, listed: 12, orders: 4, points: 980, status: 'active', rank: 2 },
  { id: '3', name: '王大力', avatar: '王', class: '电商2302班', designs: 18, listed: 8, orders: 2, points: 720, status: 'warning', rank: 5 },
  { id: '4', name: '赵小雨', avatar: '赵', class: '电商2301班', designs: 25, listed: 14, orders: 5, points: 1150, status: 'active', rank: 3 },
  { id: '5', name: '陈思远', avatar: '陈', class: '电商2302班', designs: 20, listed: 10, orders: 3, points: 850, status: 'active', rank: 4 },
  { id: '6', name: '刘雨桐', avatar: '刘', class: '电商2303班', designs: 15, listed: 6, orders: 1, points: 520, status: 'inactive', rank: 8 },
]

export default function TeacherStudents() {
  const [selectedClass, setSelectedClass] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = students
    .filter(s => selectedClass === 'all' || s.class === selectedClass)
    .filter(s => !search || s.name.includes(search))

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">学生列表</h1>
          <p className="text-page-text-secondary text-sm">管理 {students.length} 名学生</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-teacher text-white rounded-xl text-sm font-semibold hover:bg-teacher-dark transition-colors">
          <Users className="w-4 h-4" /> 批量导入
        </button>
      </div>

      {/* Filter */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-2 bg-page-surface rounded-xl p-1 shadow-[var(--shadow-card)]">
          <button
            onClick={() => setSelectedClass('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedClass === 'all' ? 'bg-teacher text-white' : 'text-page-text-secondary hover:text-page-text'
            }`}
          >
            全部
          </button>
          {classes.map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedClass(c.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedClass === c.name ? 'bg-teacher text-white' : 'text-page-text-secondary hover:text-page-text'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="relative flex-1 max-w-[240px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-page-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索学生..."
            className="w-full pl-10 pr-4 py-2.5 bg-page-surface border border-page-border rounded-xl text-sm text-page-text outline-none focus:ring-2 focus:ring-teacher/20"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-page-border">
              <th className="text-left text-xs text-page-text-muted font-medium px-6 py-4">学生</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">班级</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">设计数</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">上架数</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">订单数</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">积分</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">排名</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">状态</th>
              <th className="text-center text-xs text-page-text-muted font-medium px-4 py-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.id} className="border-b border-page-border/50 hover:bg-page-bg/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teacher to-teacher-dark flex items-center justify-center text-white font-semibold">
                      {s.avatar}
                    </div>
                    <span className="text-sm font-medium text-page-text">{s.name}</span>
                  </div>
                </td>
                <td className="text-center text-sm text-page-text-secondary px-4 py-4">{s.class}</td>
                <td className="text-center text-sm text-page-text px-4 py-4 font-medium">{s.designs}</td>
                <td className="text-center text-sm text-page-text px-4 py-4 font-medium">{s.listed}</td>
                <td className="text-center px-4 py-4">
                  <span className="text-sm font-semibold text-success">{s.orders}</span>
                </td>
                <td className="text-center px-4 py-4">
                  <span className="flex items-center justify-center gap-1 text-sm font-medium text-admin">
                    <Award className="w-3 h-3" />{s.points}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  {s.rank <= 3 ? (
                    <span className="text-lg">{['🥇', '🥈', '🥉'][s.rank - 1]}</span>
                  ) : (
                    <span className="text-sm text-page-text-muted">#{s.rank}</span>
                  )}
                </td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    s.status === 'active' ? 'bg-success/10 text-success' :
                    s.status === 'warning' ? 'bg-warning/10 text-warning' : 'bg-page-text-muted/10 text-page-text-muted'
                  }`}>
                    {s.status === 'active' ? '活跃' : s.status === 'warning' ? '警告' : '不活跃'}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-2 text-teacher hover:bg-teacher/10 rounded-lg transition-colors">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-page-text-muted hover:bg-page-bg rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
