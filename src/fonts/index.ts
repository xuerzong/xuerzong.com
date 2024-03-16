import localFont from 'next/font/local'

const outfit = localFont({
  src: [
    {
      path: './Outfit-Regular.ttf',
      weight: '400',
    },
    {
      path: './Outfit-Bold.ttf',
      weight: '700',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})

const jetBrainsMono = localFont({
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

const fonts = { outfit, jetBrainsMono }

export default fonts
