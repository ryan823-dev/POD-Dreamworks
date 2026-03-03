import { useState, useRef } from 'react'
import { Upload, X, Check, Lightbulb, ExternalLink } from 'lucide-react'

const products = [
  { id: 'tshirt', name: 'T恤', emoji: '👕' },
  { id: 'hoodie', name: '卫衣', emoji: '🧥' },
  { id: 'mug', name: '马克杯', emoji: '☕' },
  { id: 'bag', name: '帆布袋', emoji: '👜' },
  { id: 'blanket', name: '毛毯', emoji: '🛏️' },
  { id: 'tapestry', name: '挂毯', emoji: '🖼️' },
  { id: 'phone', name: '手机壳', emoji: '📱' },
  { id: 'metal', name: '金属牌', emoji: '🏷️' },
]

const aiTools = [
  { name: 'Midjourney', url: '#' },
  { name: 'DALL-E 3', url: '#' },
  { name: '通义万象', url: '#' },
  { name: 'Canva', url: '#' },
]

export default function StudentDesignNew() {
  const [uploadedFile, setUploadedFile] = useState<{ name: string; url: string } | null>(null)
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [designName, setDesignName] = useState('')
  const [designDesc, setDesignDesc] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const step1Done = !!uploadedFile
  const step2Done = !!selectedProduct
  const step3Done = designName.length > 0
  const allDone = step1Done && step2Done && step3Done

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setUploadedFile({ name: file.name, url })
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file)
      setUploadedFile({ name: file.name, url })
    }
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-2">新建设计</h1>
        <p className="text-page-text-secondary">上传你的创意设计，选择产品，开始你的跨境电商之旅</p>
      </div>

      <div className="grid grid-cols-[400px_1fr_340px] gap-6">
        {/* Left: Upload & Form */}
        <div className="space-y-6">
          {/* Step 1: Upload */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-4 border-b border-page-border flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step1Done ? 'bg-success text-white' : 'bg-primary/10 text-primary'}`}>
                {step1Done ? <Check className="w-3 h-3" /> : '1'}
              </span>
              <span className="font-semibold text-page-text text-sm">上传设计图</span>
            </div>
            <div className="p-6">
              {!uploadedFile ? (
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-page-border rounded-xl p-8 text-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <Upload className="w-10 h-10 text-page-text-muted mx-auto mb-3" />
                  <p className="text-sm text-page-text-secondary mb-1">拖拽设计图到这里</p>
                  <p className="text-xs text-page-text-muted">支持 PNG、JPG，建议 2000×2000px</p>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </div>
              ) : (
                <div className="relative">
                  <img src={uploadedFile.url} alt="design" className="w-full rounded-xl object-cover aspect-square" />
                  <button
                    onClick={() => setUploadedFile(null)}
                    className="absolute top-2 right-2 w-7 h-7 bg-danger text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <div className="mt-2 text-xs text-page-text-muted truncate">{uploadedFile.name}</div>
                </div>
              )}
            </div>
          </div>

          {/* Step 2: Select Product */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-4 border-b border-page-border flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step2Done ? 'bg-success text-white' : 'bg-primary/10 text-primary'}`}>
                {step2Done ? <Check className="w-3 h-3" /> : '2'}
              </span>
              <span className="font-semibold text-page-text text-sm">选择产品</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-4 gap-2">
                {products.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProduct(p.id)}
                    className={`flex flex-col items-center p-3 rounded-xl text-center transition-all ${
                      selectedProduct === p.id
                        ? 'bg-primary text-white ring-2 ring-primary ring-offset-2 ring-offset-page-surface'
                        : 'bg-page-bg text-page-text hover:bg-primary/10'
                    }`}
                  >
                    <span className="text-xl mb-1">{p.emoji}</span>
                    <span className="text-[11px] font-medium">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Design Info */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-4 border-b border-page-border flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step3Done ? 'bg-success text-white' : 'bg-primary/10 text-primary'}`}>
                {step3Done ? <Check className="w-3 h-3" /> : '3'}
              </span>
              <span className="font-semibold text-page-text text-sm">设计信息</span>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-page-text-secondary mb-1.5">作品名称 *</label>
                <input
                  type="text"
                  value={designName}
                  onChange={(e) => setDesignName(e.target.value)}
                  placeholder="给你的设计取个名字"
                  className="w-full px-4 py-2.5 bg-page-bg border border-page-border rounded-xl text-sm text-page-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm text-page-text-secondary mb-1.5">设计说明</label>
                <textarea
                  value={designDesc}
                  onChange={(e) => setDesignDesc(e.target.value)}
                  placeholder="描述你的设计灵感和创作过程..."
                  className="w-full px-4 py-2.5 bg-page-bg border border-page-border rounded-xl text-sm text-page-text outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none h-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Center: Product Preview */}
        <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
          <div className="px-6 py-4 border-b border-page-border">
            <span className="font-semibold text-page-text text-sm">产品效果预览</span>
          </div>
          <div className="p-6 flex flex-col items-center justify-center min-h-[500px]">
            {selectedProduct && uploadedFile ? (
              <div className="text-center">
                <div className="w-80 h-80 bg-gradient-to-br from-page-bg to-page-border rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <img src={uploadedFile.url} alt="preview" className="w-48 h-48 object-contain opacity-80" />
                  <div className="absolute bottom-4 text-6xl">
                    {products.find(p => p.id === selectedProduct)?.emoji}
                  </div>
                </div>
                <div className="mt-4 flex justify-center gap-2">
                  {['正面', '背面', '细节'].map((v, i) => (
                    <button key={i} className={`px-4 py-1.5 rounded-md text-xs ${i === 0 ? 'bg-primary text-white' : 'bg-page-bg text-page-text-secondary'}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center text-page-text-muted">
                <div className="text-6xl mb-4 opacity-30">👕</div>
                <p className="text-sm">上传设计图并选择产品后</p>
                <p className="text-sm">这里会显示产品效果预览</p>
              </div>
            )}
          </div>
        </div>

        {/* Right: Progress & Tips */}
        <div className="space-y-6">
          {/* Progress */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-4 border-b border-page-border">
              <span className="font-semibold text-page-text text-sm">完成进度</span>
            </div>
            <div className="p-6 space-y-4">
              {[
                { label: '上传设计图', done: step1Done },
                { label: '选择产品类型', done: step2Done },
                { label: '填写设计信息', done: step3Done },
                { label: '提交审核', done: false },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${s.done ? 'bg-success text-white' : 'border-2 border-page-border'}`}>
                    {s.done && <Check className="w-3 h-3" />}
                  </div>
                  <span className={`text-sm ${s.done ? 'text-page-text line-through' : 'text-page-text-secondary'}`}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)]">
            <div className="px-6 py-4 border-b border-page-border flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-admin" />
              <span className="font-semibold text-page-text text-sm">推荐AI工具</span>
            </div>
            <div className="p-6">
              <p className="text-xs text-page-text-muted mb-4">可以使用任意AI工具创作设计，以下是推荐：</p>
              <div className="space-y-2">
                {aiTools.map((t, i) => (
                  <a key={i} href={t.url} className="flex items-center justify-between p-3 bg-page-bg rounded-xl text-sm text-page-text hover:bg-primary/10 transition-all">
                    {t.name}
                    <ExternalLink className="w-3 h-3 text-page-text-muted" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={!allDone}
            className={`w-full py-4 rounded-[14px] font-semibold text-sm transition-all ${
              allDone
                ? 'bg-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40'
                : 'bg-page-border text-page-text-muted cursor-not-allowed'
            }`}
          >
            提交审核
          </button>
        </div>
      </div>
    </div>
  )
}
