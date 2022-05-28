import React, { useEffect, useState } from 'react'
import { MoonIcon } from '@heroicons/react/outline'
import { SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

enum Theme {
  Dark = 'dark',
  Light = 'light',
}

const DarkBtn: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  const isDarkTheme = theme === Theme.Dark || resolvedTheme === Theme.Dark

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [])

  return (
    <motion.button aria-label="theme-btn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      {isMounted &&
        React.createElement(isDarkTheme ? SunIcon : MoonIcon, {
          className: 'w-6 h-6',
          onClick: () => setTheme(isDarkTheme ? Theme.Light : Theme.Dark),
        })}
    </motion.button>
  )
}

export default DarkBtn
