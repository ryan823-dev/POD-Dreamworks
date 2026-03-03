import { Globe, Shield, Zap, Save } from 'lucide-react'
import { useState } from 'react'

export default function AdminSettings() {
  const [saving, setSaving] = useState(false)

  const handleSave = () => {
    setSaving(true)
    setTimeout(() => setSaving(false), 1500)
  }

  return (
    <div className="p-8 max-w-[800px]">
      <div className="mb-6">
        <h1 className="text-[28px] font-bold text-white mb-1">系统配置</h1>
        <p className="text-sm text-text-secondary">管理平台全局设置</p>
      </div>

      <div className="space-y-6">
        {/* Basic */}
        <div className="bg-white/[0.03] border border-border rounded-[16px] p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Globe className="w-4 h-4 text-admin" /> 基本设置
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">平台名称</label>
              <input
                type="text"
                defaultValue="POD Dreamworks"
                className="w-full px-4 py-3 bg-white/[0.03] border border-border rounded-xl text-white outline-none focus:ring-2 focus:ring-admin/20"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">平台域名</label>
              <input
                type="text"
                defaultValue="poddreamworks.com"
                className="w-full px-4 py-3 bg-white/[0.03] border border-border rounded-xl text-white outline-none focus:ring-2 focus:ring-admin/20"
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/[0.03] border border-border rounded-[16px] p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 text-admin" /> 安全设置
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl">
              <div>
                <div className="text-sm text-white">强制修改初始密码</div>
                <div className="text-xs text-text-muted">新用户首次登录需修改密码</div>
              </div>
              <label className="relative inline-flex cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-admin peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
            <div className="flex items-center justify-between p-3 bg-white/[0.02] rounded-xl">
              <div>
                <div className="text-sm text-white">登录验证码</div>
                <div className="text-xs text-text-muted">启用图形验证码防止暴力破解</div>
              </div>
              <label className="relative inline-flex cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-admin peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
              </label>
            </div>
          </div>
        </div>

        {/* AI Services */}
        <div className="bg-white/[0.03] border border-border rounded-[16px] p-6">
          <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-4 h-4 text-admin" /> AI 服务配置
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-text-secondary mb-2">侵权检测 API</label>
              <input
                type="text"
                defaultValue="https://api.xiaiai.com/copyright"
                className="w-full px-4 py-3 bg-white/[0.03] border border-border rounded-xl text-white outline-none focus:ring-2 focus:ring-admin/20"
              />
            </div>
            <div>
              <label className="block text-sm text-text-secondary mb-2">文案生成 API</label>
              <input
                type="text"
                defaultValue="https://api.xiaiai.com/copywriting"
                className="w-full px-4 py-3 bg-white/[0.03] border border-border rounded-xl text-white outline-none focus:ring-2 focus:ring-admin/20"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className={`w-full py-4 rounded-xl font-semibold text-black flex items-center justify-center gap-2 transition-all ${
            saving ? 'bg-admin/50' : 'bg-admin hover:bg-admin-light'
          }`}
        >
          {saving ? (
            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
          ) : (
            <>
              <Save className="w-4 h-4" /> 保存设置
            </>
          )}
        </button>
      </div>
    </div>
  )
}
