import cls from 'classnames'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: cls.ArgumentArray) => {
  return twMerge(cls(...args))
}
