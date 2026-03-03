import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'

const allItems = [
  { id: '1', title: '春日樱花猫咪T恤设计', student: '张小红', cls: '电商2301班', time: '10分钟前', status: 'safe', product: '女装T恤', emoji: '👕' },
  { id: '2', title: '情人节爱心马克杯设计', student: '李明', cls: '电商2301班', time: '25分钟前', status: 'pending', product: '马克杯', emoji: '☕' },
  { id: '3', title: '街头涂鸦风卫衣设计', student: '王大力', cls: '电商2302班', time: '1小时前', status: 'risk', product: '卫衣', emoji: '🧥' },
  { id: '4', title: '简约文艺帆布袋设计', student: '赵小雨', cls: '电商2301班', time: '2小时前', status: 'safe', product: '帆布袋', emoji: '👜' },
  { id: '5', title: '星空主题法兰绒毛毯', student: '周晓晓', cls: '电商2302班', time: '3小时前', status: 'safe', product: '毛毯', emoji: '🛏️' },
  { id: '6', title: '动漫风格手机壳设计', student: '刘小东', cls: '电商2303班', time: '4小时前', status: 'risk', product: '手机壳', emoji: '📱' },
]

const statusMap: Record<string, { label: string; cls: string; cardBorder?: string }> = {
  safe: { label: '✓ 安全', cls: 'bg-success text-white' },
  pending: { label: '⏳ 检测中', cls: 'bg-warning text-white' },
  risk: { label: '⚠ 有风险', cls: 'bg-danger text-white', cardBorder: 'ring-2 ring-danger' },
}

const tabs = [
  { key: 'all', label: '全部', count: 12 },
  { key: 'safe', label: '已检测', count: 8 },
  { key: 'pending', label: '检测中', count: 2 },
  { key: 'risk', label: '有风险', count: 2 },
]

export default function TeacherReview() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = allItems.filter((item) => {
    if (activeTab !== 'all' && item.status !== activeTab) return false
    if (searchQuery && !item.title.includes(searchQuery) && !item.student.includes(searchQuery)) return false
    return true
  })

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-page-text mb-1">
          待审核作品
          <span className="text-base font-normal text-page-text-secondary ml-3">共 12 件作品等待审核</span>
        </h1>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="flex bg-page-surface rounded-xl p-1 shadow-[var(--shadow-card)]">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === t.key ? 'bg-teacher text-white' : 'text-page-text-secondary hover:text-page-text'
              }`}
            >
              {t.label} <span className="text-xs opacity-70">{t.count}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-page-surface rounded-xl px-4 py-2 shadow-[var(--shadow-card)] flex-1 max-w-[300px]">
          <Search className="w-4 h-4 text-page-text-muted" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索学生或作品..."
            className="bg-transparent outline-none text-sm text-page-text flex-1"
          />
        </div>

        <select className="bg-page-surface rounded-xl px-4 py-2.5 text-sm text-page-text shadow-[var(--shadow-card)] outline-none border-none">
          <option>全部班级</option>
          <option>电商2301班</option>
          <option>电商2302班</option>
          <option>电商2303班</option>
        </select>

        <button className="flex items-center gap-2 bg-page-surface rounded-xl px-4 py-2.5 text-sm text-page-text-secondary shadow-[var(--shadow-card)] hover:text-page-text transition-colors">
          <Filter className="w-4 h-4" />
          筛选
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/teacher/review/${item.id}`)}
            className={`bg-page-surface rounded-[16px] shadow-[var(--shadow-card)] overflow-hidden cursor-pointer hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all ${statusMap[item.status].cardBorder || ''}`}
          >
            {/* Image area */}
            <div className="h-[180px] bg-gradient-to-br from-page-bg to-page-border flex items-center justify-center relative">
              <span className="text-6xl opacity-30">{item.emoji}</span>
              <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold ${statusMap[item.status].cls}`}>
                {statusMap[item.status].label}
              </span>
              <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/60 text-white rounded-md text-[11px] flex items-center gap-1.5">
                {item.emoji} {item.product}
              </span>
            </div>

            {/* Body */}
            <div className="p-5">
              <h3 className="font-semibold text-page-text mb-3">{item.title}</h3>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teacher/20 to-teacher/10 flex items-center justify-center text-xs text-teacher font-semibold">
                  {item.student[0]}
                </div>
                <div>
                  <div className="text-sm font-medium text-page-text">{item.student}</div>
                  <div className="text-[11px] text-page-text-muted">{item.cls}</div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-page-border">
                <span className="text-xs text-page-text-muted flex items-center gap-1.5">
                  🕐 {item.time}
                </span>
                <button className="px-4 py-1.5 bg-teacher text-white rounded-lg text-xs font-medium hover:bg-teacher-dark transition-colors">
                  审核
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
