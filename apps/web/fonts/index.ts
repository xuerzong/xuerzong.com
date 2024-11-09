import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'

const JetBrainsMono = localFont({
  src: [
    {
      path: './JetBrainsMono-Regular.ttf',
      weight: '400',
    },
    {
      path: './JetBrainsMono-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-mono',
})

const fonts = { JetBrainsMono, GeistSans }

export default fonts
