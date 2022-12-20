import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

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
    <button className="relative z-40 md:z-0" aria-label="theme-btn">
      {isMounted && (
        <div
          className="text-lg w-6 h-6 text-current leading-6"
          onClick={() => setTheme(isDarkTheme ? Theme.Light : Theme.Dark)}
        >
          {isDarkTheme ? '🌛' : '🌞'}
        </div>
      )}
    </button>
  )
}

export default DarkBtn
