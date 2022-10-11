import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'
import Icon from '@/components/common/icons'

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
  }, [isMounted])

  return (
    <motion.button aria-label="theme-btn" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
      {isMounted && (
        <div onClick={() => setTheme(isDarkTheme ? Theme.Light : Theme.Dark)}>
          <Icon className="w-6 h-6 text-current" name="sunOutlined" />
        </div>
      )}
    </motion.button>
  )
}

export default DarkBtn
