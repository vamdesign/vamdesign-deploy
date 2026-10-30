import { CookieConsent } from 'vamdesign-portfolio'

// Shown only until the "cookie-consent" cookie is set; fixedPosition={false}
// keeps the banner in flow so it renders inside the card.
export const Banner = () => (
  <div style={{ width: 1000 }}>
    <CookieConsent fixedPosition={false} />
  </div>
)
