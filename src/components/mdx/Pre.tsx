import React, { type PropsWithChildren, useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

interface CopyBtnProps {
  onClick(): void
  className?: string
}

const CopyBtn: React.FC<CopyBtnProps> = ({ className, onClick }) => {
  const [copiedState, setCopiedState] = useState<boolean>(false)
  const copyTimerRef = useRef<number>(null)

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  const handleCopy = () => {
    if (copiedState) {
      return
    }
    setCopiedState(true)
    onClick()
    copyTimerRef.current = window.setTimeout(() => {
      setCopiedState(false)
    }, 2000)
  }

  return (
    <button
      aria-label="copy"
      type="button"
      className={cls(
        'text-gray-700 dark:text-gray-200 transition-colors hover:text-primary-500',
        className
      )}
      onClick={handleCopy}
    >
      {copiedState ? (
        <ClipboardDocumentCheckIcon className="w-5 h-5 text-green-500" />
      ) : (
        <ClipboardDocumentIcon className="w-5 h-5" />
      )}
    </button>
  )
}

const Pre: React.FC<PropsWithChildren> = ({ children }) => {
  const preRef = useRef<HTMLDivElement>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(preRef.current?.textContent || '')
  }

  return (
    <div ref={preRef} className="relative">
      <CopyBtn onClick={handleCopy} className="absolute top-2 right-2 h-8" />
      <pre>{children}</pre>
    </div>
  )
}

export default Pre
