import { BackgroundOpacityControl } from 'vamdesign-portfolio'

// Floating control (fixed bottom-right, md+ only) used on the contact page.
export const Default = () => (
  <div style={{ transform: 'translateZ(0)', width: 320, height: 80 }}>
    <BackgroundOpacityControl defaultOpacity={20} />
  </div>
)

export const Raised = () => (
  <div style={{ transform: 'translateZ(0)', width: 320, height: 80 }}>
    <BackgroundOpacityControl defaultOpacity={70} />
  </div>
)
