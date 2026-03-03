import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { Rocket, Palette, GraduationCap, ShieldCheck, Brain, Shield, Store, BarChart3, ArrowRight, Cpu, ChevronDown } from 'lucide-react'

function StarField() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div')
      star.className = 'absolute w-[2px] h-[2px] bg-white rounded-full'
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.setProperty('--star-opacity', `${0.3 + Math.random() * 0.7}`)
      star.style.animation = `twinkle ${2 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 5}s`
      el.appendChild(star)
    }
  }, [])
  return <div ref={ref} className="absolute inset-0 overflow-hidden" />
}

function AnimatedNumber({ target, id }: { target: number; id: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 2000
          const start = performance.now()
          const update = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.floor(target * eased).toLocaleString()
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} id={id}>0</div>
}

const roles = [
  {
    key: 'student',
    to: '/student',
    icon: Palette,
    name: '我是学生',
    desc: '自由创作设计、提交作品、真实上架到海外平台，收获订单和成长',
    features: ['AI辅助设计创作', '产品效果实时预览', '真实订单跟踪分析'],
    enterText: '进入学生工作台',
    colorClass: 'student',
  },
  {
    key: 'teacher',
    to: '/teacher',
    icon: GraduationCap,
    name: '我是教师',
    desc: '布置实训任务、审核学生作品、AI侵权检测辅助、数据化教学管理',
    features: ['智能侵权风险检测', '一键审核通过上架', '多维度教学报表'],
    enterText: '进入教学管理台',
    colorClass: 'teacher',
  },
  {
    key: 'admin',
    to: '/admin',
    icon: ShieldCheck,
    name: '我是管理员',
    desc: '全局数据大屏、院系班级配置、教师权限管理、运营数据报表',
    features: ['全校实时数据大屏', '多校区统一管理', '教学成果量化导出'],
    enterText: '进入管理控制台',
    colorClass: 'admin',
  },
]

const roleColors: Record<string, { glow: string; iconBg: string; dot: string; btnBase: string; btnHover: string }> = {
  student: {
    glow: 'bg-primary',
    iconBg: 'bg-gradient-to-br from-primary/20 to-primary-dark/20 shadow-[0_20px_40px_-20px_rgba(99,102,241,0.3)]',
    dot: 'text-primary-light',
    btnBase: 'bg-gradient-to-r from-primary/15 to-primary/5 text-primary-glow',
    btnHover: 'group-hover:bg-primary group-hover:text-white',
  },
  teacher: {
    glow: 'bg-teacher',
    iconBg: 'bg-gradient-to-br from-teacher/20 to-teacher-dark/20 shadow-[0_20px_40px_-20px_rgba(59,130,246,0.3)]',
    dot: 'text-teacher-light',
    btnBase: 'bg-gradient-to-r from-teacher/15 to-teacher/5 text-teacher-light',
    btnHover: 'group-hover:bg-teacher group-hover:text-white',
  },
  admin: {
    glow: 'bg-admin',
    iconBg: 'bg-gradient-to-br from-admin/20 to-admin-dark/20 shadow-[0_20px_40px_-20px_rgba(245,158,11,0.3)]',
    dot: 'text-admin-light',
    btnBase: 'bg-gradient-to-r from-admin/15 to-admin/5 text-admin-light',
    btnHover: 'group-hover:bg-admin group-hover:text-black',
  },
}

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-bg text-text overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex flex-col relative overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(ellipse_40%_40%_at_80%_80%,rgba(236,72,153,0.1),transparent_50%),radial-gradient(ellipse_40%_40%_at_20%_70%,rgba(59,130,246,0.1),transparent_50%)]" />
        <StarField />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-primary/15 blur-[60px] top-[10%] left-[10%] animate-float" />
        <div className="absolute w-[250px] h-[250px] rounded-full bg-pink-500/10 blur-[60px] top-[60%] right-[10%] animate-float" style={{ animationDelay: '-7s' }} />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-teacher/12 blur-[60px] bottom-[20%] left-[30%] animate-float" style={{ animationDelay: '-14s' }} />

        {/* Nav */}
        <nav className="relative z-10 flex justify-between items-center px-12 py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-[10px] flex items-center justify-center">
              <Rocket className="w-[18px] h-[18px]" />
            </div>
            <span className="text-lg font-bold tracking-tight">POD Dreamworks</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm text-text-secondary hover:text-white transition-colors">平台特色</a>
            <a href="#roles" className="text-sm text-text-secondary hover:text-white transition-colors">角色入口</a>
            <button onClick={() => navigate('/login')} className="px-6 py-2.5 bg-white/10 border border-white/15 rounded-[10px] text-sm font-medium backdrop-blur-sm hover:bg-white/20 transition-all">
              登录平台
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/15 border border-primary/30 rounded-full text-[13px] text-primary-glow mb-8">
            <Cpu className="w-3 h-3" />
            AI驱动 · 真实电商 · 创意实训
          </div>
          <h1 className="text-6xl font-extrabold leading-tight tracking-tighter mb-6">
            让每一个创意
            <br />
            <span className="bg-gradient-to-r from-primary-glow via-primary-light to-pink-400 bg-clip-text text-transparent">
              走向全球货架
            </span>
          </h1>
          <p className="text-xl text-text-secondary max-w-[600px] leading-relaxed mb-12">
            <strong className="text-white/80">POD Dreamworks</strong> 是面向高等院校的跨境电商实训平台。
            <br />
            学生自由创作设计，AI辅助合规检测，作品真实上架到全球平台。
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted text-xs animate-bounce-subtle">
          <span>向下浏览</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-20 px-12">
        <div className="grid grid-cols-4 gap-6 max-w-[1000px] mx-auto">
          {[
            { id: 'schools', target: 12, label: '入驻学校', color: 'text-primary-glow' },
            { id: 'students', target: 3856, label: '实训学生', color: 'text-success' },
            { id: 'designs', target: 28432, label: '设计作品', color: 'text-admin-light' },
            { id: 'orders', target: 2134, label: '真实订单', color: 'text-pink-300' },
          ].map((s) => (
            <div key={s.id} className="text-center p-8 bg-white/[0.03] border border-border rounded-[20px] hover:bg-white/[0.06] hover:-translate-y-1 transition-all">
              <div className={`text-[42px] font-extrabold tracking-tighter mb-2 ${s.color}`}>
                <AnimatedNumber target={s.target} id={`stat-${s.id}`} />
              </div>
              <div className="text-sm text-text-secondary">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Roles */}
      <section id="roles" className="py-20 px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[2px] text-text-muted mb-4">角色入口</div>
          <h2 className="text-4xl font-bold tracking-tight">选择你的身份，开始探索</h2>
        </div>

        <div className="grid grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {roles.map((role) => {
            const colors = roleColors[role.colorClass]
            return (
              <div
                key={role.key}
                onClick={() => navigate(role.to)}
                className="group bg-white/[0.03] border border-border rounded-[24px] overflow-hidden cursor-pointer hover:-translate-y-2 hover:border-border-light transition-all duration-400"
              >
                <div className="h-[200px] flex items-center justify-center relative overflow-hidden">
                  <div className={`absolute w-[200px] h-[200px] rounded-full ${colors.glow} opacity-30 blur-[60px]`} />
                  <div className={`w-[120px] h-[120px] rounded-[30px] flex items-center justify-center text-5xl relative z-[1] ${colors.iconBg} group-hover:scale-110 transition-transform`}>
                    <role.icon className="w-12 h-12" />
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <h3 className="text-[22px] font-bold mb-2">{role.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-5">{role.desc}</p>
                  <div className="flex flex-col gap-2.5 mb-6">
                    {role.features.map((f, i) => (
                      <div key={i} className={`flex items-center gap-2.5 text-[13px] text-text-secondary`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} bg-current`} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className={`flex items-center justify-center gap-2 py-3.5 rounded-[14px] text-sm font-semibold transition-all group-hover:gap-3 ${colors.btnBase} ${colors.btnHover}`}>
                    {role.enterText}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-12 relative z-10 bg-white/[0.02] border-t border-border">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[2px] text-text-muted mb-4">核心能力</div>
          <h2 className="text-4xl font-bold tracking-tight">为什么选择 POD Dreamworks</h2>
        </div>
        <div className="grid grid-cols-4 gap-8 max-w-[1100px] mx-auto">
          {[
            { icon: Brain, name: 'AI 赋能创作', desc: '学生可使用任意AI工具自由创作，平台不限制设计来源，鼓励创新', color: 'bg-primary/15 text-primary-light' },
            { icon: Shield, name: '智能合规检测', desc: '接入小AI商创侵权检测引擎，自动识别品牌、版权风险，保障安全上架', color: 'bg-success/15 text-success' },
            { icon: Store, name: '真实平台上架', desc: '不是模拟训练，作品真实上架到 Temu、Amazon 等跨境平台，获得真实订单', color: 'bg-pink-500/15 text-pink-300' },
            { icon: BarChart3, name: '数据驱动教学', desc: '全链路数据追踪，从设计到订单，用真实数据指导教学，量化教学成果', color: 'bg-admin/15 text-admin-light' },
          ].map((f, i) => (
            <div key={i} className="text-center">
              <div className={`w-14 h-14 rounded-[16px] flex items-center justify-center text-2xl mx-auto mb-4 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold mb-2">{f.name}</h4>
              <p className="text-[13px] text-text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-12 border-t border-border relative z-10">
        <div className="max-w-[1100px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 font-semibold text-sm">
              <div className="w-7 h-7 bg-gradient-to-br from-primary to-primary-dark rounded-md flex items-center justify-center text-xs">
                <Rocket className="w-3 h-3" />
              </div>
              POD Dreamworks
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="text-xs text-text-muted flex items-center gap-1.5">
              <Cpu className="w-3 h-3" />
              技术支持：小AI商创
            </div>
          </div>
          <div className="text-xs text-white/25">
            &copy; 2026 POD Dreamworks. 跨境电商实训平台.
          </div>
        </div>
      </footer>
    </div>
  )
}
