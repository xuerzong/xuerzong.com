import React, { type PropsWithChildren, useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useDebounce } from 'use-debounce'

interface CopyBtnProps {
  onClick(): void
  className?: string
}

const CopyButton: React.FC<CopyBtnProps> = ({ className, onClick }) => {
  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef<number>(null)
  const [tooltipOpen, setTooltipOpen] = useDebounce(false, 300)

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  const handleCopy: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (copied) {
      return
    }
    setCopied(true)
    onClick()
    copyTimerRef.current = window.setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root onOpenChange={setTooltipOpen} open={tooltipOpen || copied} delayDuration={300}>
        <Tooltip.Trigger asChild>
          <button
            aria-label="copy"
            type="button"
            className={cls(
              'flex items-center justify-center',
              'w-8 h-8 transition-colors border rounded',
              'border dark:border-gray-600 rounded',
              'bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800',
              className
            )}
            onClick={handleCopy}
          >
            {copied ? (
              <ClipboardDocumentCheckIcon className="w-5 h-5" />
            ) : (
              <ClipboardDocumentIcon className="w-5 h-5" />
            )}
          </button>
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={4}
            className={cls(
              'text-sm px-2 py-1',
              'border dark:border-gray-600 rounded',
              'bg-white dark:bg-gray-700'
            )}
          >
            {copied ? '复制成功' : '点击复制'}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

const Pre: React.FC<PropsWithChildren> = ({ children }) => {
  const preRef = useRef<HTMLDivElement>(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(preRef.current?.textContent || '')
  }

  return (
    <div ref={preRef} className={cls('relative my-4', 'border rounded dark:border-gray-700')}>
      <CopyButton onClick={handleCopy} className="absolute top-2 right-2" />
      <pre className="m-0 p-4">{children}</pre>
    </div>
  )
}

export default Pre
