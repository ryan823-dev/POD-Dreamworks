import { Coins, Award, Gift } from 'lucide-react'

const rules = [
  { action: '提交设计作品', points: 20, icon: '🎨', category: '创作' },
  { action: '设计通过审核', points: 50, icon: '✅', category: '创作' },
  { action: '产品成功上架', points: 100, icon: '📦', category: '上架' },
  { action: '获得真实订单', points: 200, icon: '💰', category: '销售' },
  { action: '完成课程学习', points: 30, icon: '📚', category: '学习' },
  { action: '连续登录7天', points: 70, icon: '🔥', category: '活跃' },
  { action: '解锁成就徽章', points: 50, icon: '🏆', category: '成就' },
]

const levels = [
  { level: 1, name: '新手学员', minPoints: 0, maxPoints: 500 },
  { level: 2, name: '初级学员', minPoints: 500, maxPoints: 1000 },
  { level: 3, name: '进阶学员', minPoints: 1000, maxPoints: 2000 },
  { level: 4, name: '高级学员', minPoints: 2000, maxPoints: 5000 },
  { level: 5, name: '精英学员', minPoints: 5000, maxPoints: 10000 },
]

export default function AdminPoints() {
  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-white mb-1">积分规则</h1>
        <p className="text-sm text-text-secondary">配置学生激励积分体系</p>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-6">
        {/* Rules */}
        <div className="bg-white/[0.03] border border-border rounded-[16px]">
          <div className="px-6 py-4 border-b border-border flex justify-between items-center">
            <h3 className="font-semibold text-white flex items-center gap-2">
              <Coins className="w-4 h-4 text-admin" /> 积分获取规则
            </h3>
            <button className="text-xs text-admin hover:underline">编辑规则</button>
          </div>
          <div className="divide-y divide-border/50">
            {rules.map((r, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 hover:bg-white/[0.02]">
                <div className="text-2xl">{r.icon}</div>
                <div className="flex-1">
                  <div className="text-sm text-white">{r.action}</div>
                  <div className="text-xs text-text-muted">{r.category}</div>
                </div>
                <div className="text-lg font-bold text-admin">+{r.points}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Levels */}
        <div className="space-y-6">
          <div className="bg-white/[0.03] border border-border rounded-[16px]">
            <div className="px-6 py-4 border-b border-border">
              <h3 className="font-semibold text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-admin" /> 等级体系
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {levels.map((l) => (
                <div key={l.level} className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl">
                  <div className="w-8 h-8 rounded-lg bg-admin/10 flex items-center justify-center text-admin font-bold text-sm">
                    {l.level}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{l.name}</div>
                    <div className="text-xs text-text-muted">{l.minPoints} - {l.maxPoints} 积分</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/[0.03] border border-border rounded-[16px] p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-admin/10 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-admin" />
              </div>
              <div>
                <div className="font-medium text-white">积分商城</div>
                <div className="text-xs text-text-muted">配置积分兑换商品</div>
              </div>
            </div>
            <button className="w-full py-2.5 bg-admin/10 text-admin text-sm font-medium rounded-xl hover:bg-admin/20 transition-colors">
              管理商城
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
