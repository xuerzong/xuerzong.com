import { toast } from 'sonner'
import { signIn, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'
import GithubAuthButton from '@/components/extends/GithubAuthButton'
import { useGuestbook } from '@/hooks/swr/useGuestbook'
import { createGuestbook } from '@/services/client/guestbook'

const GuestInput: React.FC = () => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const session = useSession()
  const { mutate: refresh } = useGuestbook()

  useEffect(() => {
    toast.error('测试测试')
  }, [])

  const handleSubmit = async () => {
    if (!content || content.length > 1024) {
      return ''
    }
    setLoading(true)
    try {
      const { ok } = await createGuestbook(content)
      if (!ok) throw new Error('')
      toast.success('成功留下了您的足迹～')
    } catch {
      toast.error('发生位置错误')
    } finally {
      setLoading(false)
      setContent('')
      refresh()
    }
  }

  return session.data ? (
    <div className="flex items-center space-x-2">
      <Input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full"
        placeholder="留下点什么..."
      />
      <Button variant="primary" onClick={handleSubmit} loading={loading}>
        留言
      </Button>
    </div>
  ) : (
    <GithubAuthButton onClick={() => signIn('github')} />
  )
}

export default GuestInput
