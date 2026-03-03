import { Plus, MoreVertical, Mail } from 'lucide-react'

const teachers = [
  { id: '1', name: '王老师', dept: '电子商务学院', email: 'wang@school.edu', classes: 3, students: 128, status: 'active' },
  { id: '2', name: '李老师', dept: '电子商务学院', email: 'li@school.edu', classes: 2, students: 85, status: 'active' },
  { id: '3', name: '张老师', dept: '电子商务学院', email: 'zhang@school.edu', classes: 1, students: 41, status: 'active' },
  { id: '4', name: '陈老师', dept: '艺术设计学院', email: 'chen@school.edu', classes: 2, students: 76, status: 'active' },
  { id: '5', name: '刘老师', dept: '国际贸易学院', email: 'liu@school.edu', classes: 1, students: 40, status: 'inactive' },
]

export default function AdminTeachers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">教师列表</h1>
          <p className="text-sm text-text-secondary">管理 {teachers.length} 名教师</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Plus className="w-4 h-4" /> 添加教师
        </button>
      </div>

      <div className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-text-muted font-medium px-6 py-4">教师</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">院系</th>
              <th className="text-left text-xs text-text-muted font-medium px-4 py-4">邮箱</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">班级</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">学生</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">状态</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-4">操作</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t) => (
              <tr key={t.id} className="border-b border-border/50 hover:bg-white/[0.02]">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teacher to-teacher-dark flex items-center justify-center text-white font-semibold">
                      {t.name.charAt(0)}
                    </div>
                    <span className="font-medium text-white">{t.name}</span>
                  </div>
                </td>
                <td className="text-sm text-text-secondary px-4 py-4">{t.dept}</td>
                <td className="text-sm text-text-secondary px-4 py-4">{t.email}</td>
                <td className="text-center text-sm text-white px-4 py-4">{t.classes}</td>
                <td className="text-center text-sm text-white px-4 py-4">{t.students}</td>
                <td className="text-center px-4 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
                    t.status === 'active' ? 'bg-success/15 text-success' : 'bg-text-muted/10 text-text-muted'
                  }`}>
                    {t.status === 'active' ? '在职' : '停用'}
                  </span>
                </td>
                <td className="text-center px-4 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <button className="p-2 text-text-muted hover:text-teacher hover:bg-teacher/10 rounded-lg">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-text-muted hover:bg-white/5 rounded-lg">
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
