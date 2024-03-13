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
})

const fonts = { outfit }

export default fonts
