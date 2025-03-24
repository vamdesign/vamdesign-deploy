export interface ThemeConfig {
  title: string
  description: string
  primaryColor: string
  blobColors: string[]
}

export interface ThemeConfigs {
  [key: string]: ThemeConfig
}

export interface BlobProps {
  color: string
  initialX: string
  initialY: string
}

