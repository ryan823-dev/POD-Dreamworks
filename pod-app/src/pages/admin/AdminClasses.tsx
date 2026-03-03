import { Users, Plus, MoreVertical } from 'lucide-react'

const classes = [
  { id: '1', name: '电商2301班', dept: '电子商务学院', teacher: '王老师', students: 45, designs: 420, status: 'active' },
  { id: '2', name: '电商2302班', dept: '电子商务学院', teacher: '李老师', students: 42, designs: 380, status: 'active' },
  { id: '3', name: '电商2303班', dept: '电子商务学院', teacher: '张老师', students: 41, designs: 320, status: 'active' },
  { id: '4', name: '设计2301班', dept: '艺术设计学院', teacher: '陈老师', students: 38, designs: 290, status: 'active' },
  { id: '5', name: '贸易2301班', dept: '国际贸易学院', teacher: '刘老师', students: 40, designs: 180, status: 'inactive' },
]

export default function AdminClasses() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">班级管理</h1>
          <p className="text-sm text-text-secondary">管理 {classes.length} 个班级</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Plus className="w-4 h-4" /> 添加班级
        </button>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-text-muted font-medium px-6 py-4">班级名称</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">所属院系</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">班主任</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">学生数</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">作品数</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">状态</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((c) => (
              <tr key={c.id} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-admin/10 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-admin" />
                    </div>
                    <span className="font-medium text-white">{c.name}</span>
                  </div>
                </td>
                <td className="text-sm text-text-secondary px-4 py-4">{c.dept}</td>
                <td className="text-sm text-text-secondary px-4 py-4">{c.teacher}</td>
                <td className="text-center text-sm text-white px-4 py-4">{c.students}</td>
                <td className="text-center text-sm text-white px-4 py-4">{c.designs}</td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    c.status === 'active' ? 'bg-success/15 text-success' : 'bg-text-muted/10 text-text-muted'
                  }`}>
                    {c.status === 'active' ? '活跃' : '停用'}
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
