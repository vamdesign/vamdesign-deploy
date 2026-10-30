import { Slider } from 'vamdesign-portfolio'

// On the site the Slider appears only inside BackgroundOpacityControl
// (contact page): w-32, step 5, 0–100.
export const InControl = () => (
  <div className="flex items-center gap-3 rounded-lg bg-white/80 p-3 shadow-md">
    <span className="text-xs font-medium text-gray-700">Background</span>
    <Slider defaultValue={[20]} max={100} step={5} className="w-32" />
  </div>
)

export const Wide = () => <Slider defaultValue={[60]} max={100} step={5} className="w-64" />
