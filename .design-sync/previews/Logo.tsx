import { Logo } from 'vamdesign-portfolio'

export const Brand = () => <Logo className="h-8 w-auto text-[#007EA7]" />

export const Large = () => <Logo className="h-16 w-auto text-[#007EA7]" />

export const OnDark = () => (
  <div className="rounded-lg bg-slate-900 p-6">
    <Logo className="h-8 w-auto text-white" />
  </div>
)
