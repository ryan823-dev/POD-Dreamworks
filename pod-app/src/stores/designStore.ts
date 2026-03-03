import { create } from 'zustand'

export interface Design {
  id: string
  name: string
  product: string
  emoji: string
  status: 'draft' | 'submitted' | 'reviewing' | 'safe' | 'risk' | 'approved' | 'rejected' | 'listed'
  createdAt: string
  imageUrl?: string
  description?: string
  reviewComment?: string
}

interface DesignState {
  designs: Design[]
  addDesign: (design: Design) => void
  updateStatus: (id: string, status: Design['status'], comment?: string) => void
}

const initialDesigns: Design[] = [
  { id: '1', name: '春日樱花猫咪T恤', product: 'T恤', emoji: '👕', status: 'approved', createdAt: '2025-03-01 14:20', description: '可爱的樱花猫咪图案设计' },
  { id: '2', name: '情人节爱心马克杯', product: '马克杯', emoji: '☕', status: 'reviewing', createdAt: '2025-03-01 16:45', description: '浪漫爱心系列' },
  { id: '3', name: '街头涂鸦风卫衣', product: '卫衣', emoji: '🧥', status: 'risk', createdAt: '2025-02-28 10:30', description: '街头潮流涂鸦风格', reviewComment: '疑似包含品牌logo元素' },
  { id: '4', name: '极简几何手机壳', product: '手机壳', emoji: '📱', status: 'listed', createdAt: '2025-02-27 09:15', description: '极简主义几何图案' },
  { id: '5', name: '复古花卉帆布袋', product: '帆布袋', emoji: '👜', status: 'approved', createdAt: '2025-02-26 11:00', description: '复古风格花卉印花' },
  { id: '6', name: '宇宙星空抱枕', product: '抱枕', emoji: '🛏️', status: 'listed', createdAt: '2025-02-25 15:30', description: '梦幻星空主题设计' },
  { id: '7', name: '水墨山水挂画', product: '挂画', emoji: '🖼️', status: 'draft', createdAt: '2025-02-24 20:10', description: '中国风水墨画设计' },
  { id: '8', name: '卡通柴犬T恤', product: 'T恤', emoji: '👕', status: 'submitted', createdAt: '2025-03-02 08:00', description: '可爱柴犬卡通插画' },
]

export const useDesignStore = create<DesignState>()((set) => ({
  designs: initialDesigns,

  addDesign: (design) => set((s) => ({ designs: [design, ...s.designs] })),

  updateStatus: (id, status, comment) =>
    set((s) => ({
      designs: s.designs.map((d) =>
        d.id === id ? { ...d, status, reviewComment: comment ?? d.reviewComment } : d
      ),
    })),
}))
