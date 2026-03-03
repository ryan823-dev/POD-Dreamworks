import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, User, MessageCircle, Shield, Star, Check, X } from 'lucide-react'

export default function TeacherReviewDetail() {
  const navigate = useNavigate()
  const [rating, setRating] = useState(4)
  const [comment, setComment] = useState('设计创意很好，配色协调，日系风格突出。适合春季主题营销，建议可以考虑增加系列款式。')
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null)

  const quickComments = ['创意优秀', '配色协调', '符合市场需求', '建议优化构图', '细节需完善']

  const showToast = (msg: string, type: string) => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 2500)
  }

  const handleApprove = () => {
    showToast('审核通过！作品已提交至小AI商创进行上架流程', 'success')
    setTimeout(() => navigate('/teacher/review'), 1500)
  }

  const handleReject = () => {
    showToast('已退回，学生将收到修改通知', 'error')
    setTimeout(() => navigate('/teacher/review'), 1500)
  }

  return (
    <div className="p-8 relative">
      {/* Toast */}
      {toast && (
        <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-xl text-white text-sm font-medium shadow-lg flex items-center gap-2 animate-[slide-up_0.3s_ease] ${toast.type === 'success' ? 'bg-success' : 'bg-danger'}`}>
          {toast.type === 'success' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
          {toast.msg}
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button onClick={() => navigate('/teacher/review')} className="flex items-center gap-2 text-sm text-page-text-secondary hover:text-teacher transition-colors">
          <ArrowLeft className="w-4 h-4" /> 返回审核列表
        </button>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-page-surface rounded-lg text-sm text-page-text-secondary shadow-[var(--shadow-card)] flex items-center gap-1 hover:text-page-text">
            <ChevronLeft className="w-4 h-4" /> 上一个
          </button>
          <button className="px-4 py-2 bg-page-surface rounded-lg text-sm text-page-text-secondary shadow-[var(--shadow-card)] flex items-center gap-1 hover:text-page-text">
            下一个 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Student Bar */}
      <div className="bg-page-surface rounded-[16px] p-5 shadow-[var(--shadow-card)] flex items-center gap-5 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teacher/20 to-teacher/10 flex items-center justify-center text-xl text-teacher font-bold">
          张
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-page-text">张小红</div>
          <div className="text-sm text-page-text-secondary flex items-center gap-4">
            <span>🎓 电商2301班</span>
            <span>🕐 2026-03-02 14:30 提交</span>
            <span>🎨 已提交 12 件作品</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-page-bg rounded-lg text-sm text-page-text-secondary flex items-center gap-1.5 hover:text-teacher hover:border-teacher border border-page-border transition-colors">
            <User className="w-3.5 h-3.5" /> 查看档案
          </button>
          <button className="px-4 py-2 bg-page-bg rounded-lg text-sm text-page-text-secondary flex items-center gap-1.5 hover:text-teacher hover:border-teacher border border-page-border transition-colors">
            <MessageCircle className="w-3.5 h-3.5" /> 发消息
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[1fr_400px] gap-6">
        {/* Left: Preview */}
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
          <div className="px-6 py-5 border-b border-page-border">
            <h3 className="font-semibold text-page-text">作品预览</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-sm font-medium text-page-text mb-3">设计原图</div>
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-7xl opacity-20">🖼️</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-page-text mb-3">产品效果图</div>
                <div className="aspect-square bg-gradient-to-br from-admin/5 to-admin/10 rounded-xl flex items-center justify-center">
                  <span className="text-7xl opacity-20">👕</span>
                </div>
                <div className="flex justify-center gap-2 mt-3">
                  {['正面', '背面', '细节'].map((v, i) => (
                    <button key={i} className={`px-3 py-1 rounded-md text-xs ${i === 0 ? 'bg-teacher text-white' : 'bg-page-bg text-page-text-secondary hover:text-page-text'}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="mt-6 pt-6 border-t border-page-border space-y-3">
              {[
                ['作品名称', '春日樱花猫咪T恤设计'],
                ['产品类型', '女装T恤 (短袖圆领)'],
                ['设计说明', '日系风格的可爱猫咪图案，搭配粉色樱花元素，适合春季主题营销。使用 Midjourney 生成基础图案，Canva 调整配色。'],
                ['设计工具', 'Midjourney + Canva'],
              ].map(([label, value], i) => (
                <div key={i} className="flex">
                  <span className="w-24 text-sm text-page-text-secondary shrink-0">{label}</span>
                  <span className="text-sm text-page-text font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Platform */}
            <div className="mt-6 flex items-center gap-3 p-4 bg-page-bg rounded-xl">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">T</div>
              <div>
                <div className="font-semibold text-sm text-page-text">目标平台：Temu</div>
                <div className="text-xs text-page-text-muted">审核通过后将自动上架到 Temu 平台</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Review Panel */}
        <div className="space-y-6">
          {/* Risk Detection */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border flex items-center gap-2">
              <Shield className="w-4 h-4 text-teacher" />
              <h3 className="font-semibold text-page-text text-sm">侵权风险检测</h3>
              <span className="text-[11px] text-page-text-muted ml-1">by 小AI商创</span>
            </div>
            <div className="p-6">
              <div className="p-5 bg-success/10 border border-success/30 rounded-xl mb-5">
                <div className="font-semibold text-success mb-2 flex items-center gap-2">
                  <div className="w-8 h-8 bg-success text-white rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4" />
                  </div>
                  检测通过 — 可安全上架
                </div>
                <ul className="text-sm text-page-text-secondary space-y-1.5 ml-10">
                  <li>· 未检测到已知品牌标识</li>
                  <li>· 未检测到版权保护图案</li>
                  <li>· 未检测到敏感内容元素</li>
                  <li>· 图像原创性评分：<strong className="text-success">92%</strong></li>
                </ul>
              </div>

              {/* AI Copy */}
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-page-text-muted mb-1.5 font-medium">AI 生成标题 (英文)</div>
                  <div className="p-3 bg-page-bg rounded-lg text-sm text-page-text">
                    Women's Cute Cat Cherry Blossom T-Shirt, Kawaii Japanese Style Spring Tee
                  </div>
                </div>
                <div>
                  <div className="text-xs text-page-text-muted mb-1.5 font-medium">AI 生成描述</div>
                  <div className="p-3 bg-page-bg rounded-lg text-sm text-page-text">
                    Adorable cherry blossom cat design perfect for spring. Soft and comfortable fabric, great for casual wear or as a gift for cat lovers.
                  </div>
                </div>
                <div>
                  <div className="text-xs text-page-text-muted mb-1.5 font-medium">推荐关键词</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['cat t-shirt', 'cherry blossom', 'kawaii', 'japanese style', 'spring', 'cute graphic tee'].map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-teacher/10 text-teacher text-[11px] rounded-md">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-5 border-b border-page-border">
              <h3 className="font-semibold text-page-text text-sm">审核评价</h3>
            </div>
            <div className="p-6">
              <div className="text-sm text-page-text-secondary mb-2">作品评分</div>
              <div className="flex gap-2 mb-5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} onClick={() => setRating(n)}>
                    <Star className={`w-7 h-7 transition-all ${n <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-page-border'} hover:scale-110`} />
                  </button>
                ))}
              </div>

              <div className="text-sm text-page-text-secondary mb-2">审核意见</div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-4 bg-page-bg border border-page-border rounded-xl text-sm text-page-text resize-none h-28 outline-none focus:border-teacher focus:ring-2 focus:ring-teacher/20 mb-3"
                placeholder="请输入审核意见..."
              />

              <div className="flex flex-wrap gap-1.5 mb-6">
                {quickComments.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setComment((prev) => prev ? `${prev}，${c}` : c)}
                    className="px-3 py-1.5 bg-page-bg rounded-full text-xs text-page-text-secondary hover:bg-teacher hover:text-white transition-all"
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <button onClick={handleReject} className="flex-1 py-3.5 rounded-xl border border-danger text-danger font-semibold text-sm hover:bg-danger hover:text-white transition-all flex items-center justify-center gap-2">
                  <X className="w-4 h-4" /> 退回修改
                </button>
                <button onClick={handleApprove} className="flex-1 py-3.5 rounded-xl bg-success text-white font-semibold text-sm hover:bg-green-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-success/40 transition-all flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" /> 通过并上架
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
