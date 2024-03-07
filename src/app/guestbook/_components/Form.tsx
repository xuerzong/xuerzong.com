'use client'
import { useRef } from 'react'
import { insertGuestbook } from '@/db/actions'

const Form: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await insertGuestbook(formData)
        formRef.current?.reset()
      }}
      className="flex items-center space-x-4"
    >
      <input
        placeholder="Input your message..."
        className="flex-1 w-full py-3 px-4 bg-transparent ring-2 ring-slate-200 dark:ring-slate-800 outline-none rounded"
        type="text"
        name="content"
      />
      <button className="py-3 px-4 bg-dark ring-2 ring-slate-200 dark:ring-slate-800 text-gray-200 hover:text-slate-50 rounded outline-none flex-shrink-0">
        Send Message
      </button>
    </form>
  )
}

export default Form
