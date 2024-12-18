import localFont from 'next/font/local'
import { Recursive } from 'next/font/google'

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

const RecursiveFont = Recursive({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const fonts = { JetBrainsMono, RecursiveFont }

export default fonts
