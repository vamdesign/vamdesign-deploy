import { Nav } from 'vamdesign-portfolio'

// Nav is position:fixed; the transform makes this box its containing block so
// the bar renders inside the card instead of pinning to the viewport.
export const Desktop = () => (
  <div style={{ transform: 'translateZ(0)', height: 88, width: 1180 }}>
    <Nav />
  </div>
)
