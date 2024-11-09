'use client'

import { signIn, signOut } from 'next-auth/react'
import { AiOutlineGithub } from 'react-icons/ai'

export const SignOutButton = () => {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign Out
    </button>
  )
}

export const GithubSignInButton = () => {
  return (
    <button
      onClick={() => signIn('github')}
      className="inline-flex items-center py-3 px-4 space-x-2 bg-dark ring-2 ring-gray-200 dark:ring-gray-600 text-gray-200 hover:text-gray-50 rounded outline-none"
    >
      <AiOutlineGithub className="w-6 h-6" />
      <span>Sign in with Github</span>
    </button>
  )
}
