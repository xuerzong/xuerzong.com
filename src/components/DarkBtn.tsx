import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

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

  if (!isMounted) return null

  return (
    <button
      className="relative z-40 md:z-0 p-2 bg-gray-200 dark:bg-gray-800 rounded"
      aria-label="theme-btn"
      onClick={() => setTheme(isDarkTheme ? Theme.Light : Theme.Dark)}
    >
      {isDarkTheme ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
    </button>
  )
}

export default DarkBtn
