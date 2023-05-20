import { AiOutlineGithub } from 'react-icons/ai'

interface Props {
  onClick?(): void
}

const GithubAuthButton: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className="flex items-center py-3 px-4 space-x-2 bg-dark ring-2 ring-gray-200 dark:ring-gray-600 text-gray-200 hover:text-gray-50 rounded outline-none"
    >
      <AiOutlineGithub className="w-6 h-6" />
      <span>使用Github登录</span>
    </button>
  )
}

export default GithubAuthButton
