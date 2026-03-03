import { ShieldCheck, CheckCircle } from 'lucide-react'

const roles = [
  { id: 'admin', name: '超级管理员', desc: '完整系统管理权限', users: 2, color: 'bg-admin/15 text-admin' },
  { id: 'school_admin', name: '学校管理员', desc: '管理本校师生和数据', users: 12, color: 'bg-primary/15 text-primary' },
  { id: 'teacher', name: '教师', desc: '管理班级和审核作品', users: 45, color: 'bg-teacher/15 text-teacher' },
  { id: 'student', name: '学生', desc: '创建设计和查看数据', users: 3856, color: 'bg-success/15 text-success' },
]

const permissions = [
  { name: '学校管理', admin: true, school: true, teacher: false, student: false },
  { name: '教师管理', admin: true, school: true, teacher: false, student: false },
  { name: '学生管理', admin: true, school: true, teacher: true, student: false },
  { name: '作品审核', admin: true, school: true, teacher: true, student: false },
  { name: '发布任务', admin: true, school: true, teacher: true, student: false },
  { name: '成绩管理', admin: true, school: true, teacher: true, student: false },
  { name: '创建设计', admin: false, school: false, teacher: false, student: true },
  { name: '数据报表', admin: true, school: true, teacher: true, student: true },
]

export default function AdminPermissions() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-white mb-1">权限配置</h1>
        <p className="text-sm text-text-secondary">管理角色权限和访问控制</p>
      </div>

      {/* Roles */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {roles.map((r) => (
          <div key={r.id} className="bg-white/[0.03] border border-border rounded-[16px] p-5">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${r.color}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-white mb-1">{r.name}</h3>
            <p className="text-xs text-text-muted mb-3">{r.desc}</p>
            <div className="text-sm text-text-secondary">{r.users.toLocaleString()} 用户</div>
          </div>
        ))}
      </div>

      {/* Permission Matrix */}
      <div className="bg-white/[0.03] border border-border rounded-[16px] overflow-hidden">
        <div className="px-6 py-4 border-b border-border">
          <h3 className="font-semibold text-white">权限矩阵</h3>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left text-xs text-text-muted font-medium px-6 py-3">功能权限</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-3">超级管理员</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-3">学校管理员</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-3">教师</th>
              <th className="text-center text-xs text-text-muted font-medium px-4 py-3">学生</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((p, i) => (
              <tr key={i} className="border-b border-border/50">
                <td className="px-6 py-3 text-sm text-white">{p.name}</td>
                <td className="text-center px-4 py-3">
                  {p.admin ? <CheckCircle className="w-4 h-4 text-success mx-auto" /> : <span className="text-text-muted">-</span>}
                </td>
                <td className="text-center px-4 py-3">
                  {p.school ? <CheckCircle className="w-4 h-4 text-success mx-auto" /> : <span className="text-text-muted">-</span>}
                </td>
                <td className="text-center px-4 py-3">
                  {p.teacher ? <CheckCircle className="w-4 h-4 text-success mx-auto" /> : <span className="text-text-muted">-</span>}
                </td>
                <td className="text-center px-4 py-3">
                  {p.student ? <CheckCircle className="w-4 h-4 text-success mx-auto" /> : <span className="text-text-muted">-</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
