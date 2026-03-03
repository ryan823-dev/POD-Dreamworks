import { Building2, Plus, MoreVertical } from 'lucide-react'

const departments = [
  { id: '1', name: '电子商务学院', code: 'EC', teachers: 8, students: 256, classes: 6 },
  { id: '2', name: '艺术设计学院', code: 'AD', teachers: 5, students: 180, classes: 4 },
  { id: '3', name: '国际贸易学院', code: 'IT', teachers: 6, students: 220, classes: 5 },
]

export default function AdminDepartments() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-white mb-1">院系设置</h1>
          <p className="text-sm text-text-secondary">管理学校院系和组织结构</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-admin text-black rounded-xl text-sm font-semibold hover:bg-admin-light transition-colors">
          <Plus className="w-4 h-4" /> 添加院系
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {departments.map((d) => (
          <div key={d.id} className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-admin to-admin-light" />
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-admin/10 rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-admin" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{d.name}</h3>
                    <span className="text-xs text-text-muted">代码: {d.code}</span>
                  </div>
                </div>
                <button className="p-2 text-text-muted hover:bg-white/5 rounded-lg">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white">{d.teachers}</div>
                  <div className="text-[11px] text-text-muted">教师</div>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white">{d.students}</div>
                  <div className="text-[11px] text-text-muted">学生</div>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-white">{d.classes}</div>
                  <div className="text-[11px] text-text-muted">班级</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
