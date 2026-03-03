import { Award, Trophy, Zap, Gift, TrendingUp } from 'lucide-react'

const achievements = [
  { id: '1', name: '初出茅庐', desc: '提交第一个设计作品', icon: '🎨', earned: true, date: '2025-02-20' },
  { id: '2', name: '设计达人', desc: '累计提交10个设计', icon: '🏆', earned: true, date: '2025-02-28' },
  { id: '3', name: '首单突破', desc: '获得第一笔真实订单', icon: '💰', earned: true, date: '2025-02-25' },
  { id: '4', name: '销量新星', desc: '累计销售10件商品', icon: '⭐', earned: true, date: '2025-03-01' },
  { id: '5', name: '学霸模式', desc: '完成首个课程学习', icon: '📚', earned: true, date: '2025-02-22' },
  { id: '6', name: '设计大师', desc: '累计提交50个设计', icon: '👑', earned: false },
  { id: '7', name: '爆款制造机', desc: '单品销量突破100', icon: '🔥', earned: false },
  { id: '8', name: '全能选手', desc: '完成所有课程学习', icon: '🎓', earned: false },
]

const pointsHistory = [
  { action: '提交设计作品', points: '+20', time: '今天 08:30' },
  { action: '设计审核通过', points: '+50', time: '昨天 16:45' },
  { action: '完成课程学习', points: '+30', time: '昨天 14:20' },
  { action: '获得真实订单', points: '+100', time: '3月1日 10:15' },
  { action: '连续登录7天', points: '+70', time: '3月1日 00:00' },
]

export default function StudentAchievements() {
  const totalPoints = 1280
  const level = 3
  const nextLevelPoints = 2000

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">成就与积分</h1>
        <p className="text-page-text-secondary text-sm">记录你的成长轨迹</p>
      </div>

      {/* Level Card */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-[20px] p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[200px] h-[200px] bg-white/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex items-center gap-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
            <Trophy className="w-10 h-10" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl font-bold">Lv.{level} 进阶学员</span>
              <span className="px-2.5 py-1 bg-white/20 rounded-full text-xs">Top 15%</span>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <Zap className="w-4 h-4" />
              <span className="text-sm opacity-90">{totalPoints} / {nextLevelPoints} 积分</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: `${(totalPoints / nextLevelPoints) * 100}%` }} />
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{totalPoints}</div>
            <div className="text-sm opacity-75">总积分</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_360px] gap-6">
        {/* Achievements */}
        <div>
          <h3 className="font-semibold text-page-text flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-admin" /> 成就徽章
            <span className="ml-2 text-sm text-page-text-muted font-normal">
              {achievements.filter(a => a.earned).length}/{achievements.length}
            </span>
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {achievements.map((a) => (
              <div
                key={a.id}
                className={`bg-page-surface rounded-[16px] p-4 text-center shadow-[var(--shadow-card)] transition-all ${
                  a.earned ? 'hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1' : 'opacity-50 grayscale'
                }`}
              >
                <div className="text-4xl mb-3">{a.icon}</div>
                <div className="font-semibold text-page-text text-sm mb-1">{a.name}</div>
                <div className="text-[11px] text-page-text-muted">{a.desc}</div>
                {a.earned && (
                  <div className="mt-2 text-[10px] text-success">{a.date}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div>
          <h3 className="font-semibold text-page-text flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-success" /> 积分记录
          </h3>
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="p-4 space-y-3">
              {pointsHistory.map((h, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-page-border/50 last:border-0">
                  <div>
                    <div className="text-sm text-page-text">{h.action}</div>
                    <div className="text-[11px] text-page-text-muted">{h.time}</div>
                  </div>
                  <span className="text-sm font-bold text-success">{h.points}</span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-page-border bg-page-bg/50 rounded-b-[16px]">
              <button className="w-full text-center text-sm text-primary hover:underline">
                查看全部记录
              </button>
            </div>
          </div>

          <div className="mt-4 bg-page-surface rounded-[16px] p-4 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-admin/10 rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-admin" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-page-text">积分商城</div>
                <div className="text-[11px] text-page-text-muted">兑换精彩好礼</div>
              </div>
              <button className="px-3 py-1.5 bg-admin text-white text-xs rounded-lg font-medium">
                去兑换
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
