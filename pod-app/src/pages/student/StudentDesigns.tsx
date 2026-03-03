import { Link } from 'react-router-dom'
import { useDesignStore, type Design } from '@/stores/designStore'
import { Plus, Search, Filter, Eye, Edit2, Trash2 } from 'lucide-react'
import { useState } from 'react'

const statusMap: Record<Design['status'], { label: string; cls: string }> = {
  draft: { label: '草稿', cls: 'bg-page-text-muted/10 text-page-text-muted' },
  submitted: { label: '已提交', cls: 'bg-teacher/10 text-teacher' },
  reviewing: { label: '审核中', cls: 'bg-warning/10 text-warning' },
  safe: { label: '已检测', cls: 'bg-success/10 text-success' },
  risk: { label: '有风险', cls: 'bg-danger/10 text-danger' },
  approved: { label: '已通过', cls: 'bg-success/10 text-success' },
  rejected: { label: '已退回', cls: 'bg-danger/10 text-danger' },
  listed: { label: '已上架', cls: 'bg-primary/10 text-primary' },
}

const filterTabs: { key: string; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'draft', label: '草稿' },
  { key: 'submitted', label: '已提交' },
  { key: 'reviewing', label: '审核中' },
  { key: 'approved', label: '已通过' },
  { key: 'listed', label: '已上架' },
  { key: 'risk', label: '有风险' },
]

export default function StudentDesigns() {
  const designs = useDesignStore((s) => s.designs)
  const [tab, setTab] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = designs
    .filter((d) => tab === 'all' || d.status === tab)
    .filter((d) => !search || d.name.includes(search) || d.product.includes(search))

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-[28px] font-bold text-page-text mb-1">我的设计</h1>
          <p className="text-page-text-secondary text-sm">共 {designs.length} 件作品</p>
        </div>
        <Link
          to="/student/design/new"
          className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
        >
          <Plus className="w-4 h-4" /> 新建设计
        </Link>
      </div>

      {/* Filter & Search */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex gap-1 bg-page-surface rounded-xl p-1 shadow-[var(--shadow-card)]">
          {filterTabs.map((t) => {
            const count = t.key === 'all' ? designs.length : designs.filter((d) => d.status === t.key).length
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                  tab === t.key ? 'bg-primary text-white' : 'text-page-text-secondary hover:text-page-text'
                }`}
              >
                {t.label}({count})
              </button>
            )
          })}
        </div>
        <div className="relative flex-1 max-w-[260px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-page-text-muted" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索设计..."
            className="w-full pl-10 pr-4 py-2.5 bg-page-surface border border-page-border rounded-xl text-sm text-page-text outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-page-surface border border-page-border rounded-xl text-sm text-page-text-secondary hover:text-page-text transition-colors">
          <Filter className="w-4 h-4" /> 筛选
        </button>
      </div>

      {/* Design Grid */}
      <div className="grid grid-cols-4 gap-5">
        {filtered.map((d) => (
          <div
            key={d.id}
            className="bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all overflow-hidden group"
          >
            {/* Preview */}
            <div className="aspect-square bg-gradient-to-br from-page-bg to-page-border flex items-center justify-center text-5xl relative">
              {d.emoji}
              <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-medium ${statusMap[d.status].cls}`}>
                {statusMap[d.status].label}
              </span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30">
                  <Edit2 className="w-4 h-4" />
                </button>
                {d.status === 'draft' && (
                  <button className="w-10 h-10 bg-danger/50 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-danger/70">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            {/* Info */}
            <div className="p-4">
              <h4 className="font-semibold text-page-text text-sm truncate">{d.name}</h4>
              <p className="text-xs text-page-text-muted mt-1 truncate">{d.description}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-[11px] text-page-text-muted bg-page-bg px-2 py-0.5 rounded">{d.product}</span>
                <span className="text-[11px] text-page-text-muted">{d.createdAt}</span>
              </div>
              {d.reviewComment && (
                <div className="mt-3 p-2.5 bg-danger/5 border border-danger/10 rounded-lg text-xs text-danger">
                  ⚠️ {d.reviewComment}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🎨</div>
          <p className="text-page-text-secondary">没有找到相关设计</p>
          <Link to="/student/design/new" className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:underline">
            <Plus className="w-4 h-4" /> 创建第一个设计
          </Link>
        </div>
      )}
    </div>
  )
}
