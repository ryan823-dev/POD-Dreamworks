import { Search, Filter, MoreVertical, Download } from 'lucide-react'
import { useState } from 'react'

const students = [
  { id: '1', name: '张小红', school: '浙江工商大学', class: '电商2301班', designs: 28, orders: 6, points: 1280, status: 'active' },
  { id: '2', name: '李明', school: '浙江工商大学', class: '电商2301班', designs: 22, orders: 4, points: 980, status: 'active' },
  { id: '3', name: '王大力', school: '广东外语外贸大学', class: '电商2302班', designs: 18, orders: 2, points: 720, status: 'warning' },
  { id: '4', name: '赵小雨', school: '上海对外经贸大学', class: '电商2301班', designs: 25, orders: 5, points: 1150, status: 'active' },
  { id: '5', name: '陈思远', school: '宁波大学', class: '电商2302班', designs: 20, orders: 3, points: 850, status: 'active' },
]

export default function AdminStudents() {
  const [search, setSearch] = useState('')

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">学生管理</h1>
          <p className="text-sm text-text-secondary">平台共 3,856 名注册学生</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Download className="w-4 h-4" /> 导出数据
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-[280px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索学生..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/[0.03] border border-border rounded-xl text-sm text-white outline-none focus:ring-2 focus:ring-admin/20"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.03] border border-border rounded-xl text-sm text-text-secondary hover:text-white transition-colors">
          <Filter className="w-4 h-4" /> 筛选
        </button>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-text-muted font-medium px-6 py-4">学生</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">学校</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">班级</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">设计</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">订单</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">积分</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">状态</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-semibold">
                      {s.name.charAt(0)}
                    </div>
                    <span className="font-medium text-white">{s.name}</span>
                  </div>
                </td>
                <td className="text-sm text-text-secondary px-4 py-4">{s.school}</td>
                <td className="text-sm text-text-secondary px-4 py-4">{s.class}</td>
                <td className="text-center text-sm text-white px-4 py-4">{s.designs}</td>
                <td className="text-center text-sm font-medium text-success px-4 py-4">{s.orders}</td>
                <td className="text-center text-sm text-admin px-4 py-4">{s.points}</td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    s.status === 'active' ? 'bg-success/15 text-success' : 'bg-warning/15 text-warning'
                  }`}>
                    {s.status === 'active' ? '活跃' : '警告'}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  <button className="p-2 text-text-muted hover:bg-white/5 rounded-lg">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
