import { CookieReset } from 'vamdesign-portfolio'

// Dev-only floating trigger (bottom-right); the transform contains the fixed
// positioning to this box.
export const Trigger = () => (
  <div style={{ transform: 'translateZ(0)', width: 240, height: 64 }}>
    <CookieReset />
  </div>
)
