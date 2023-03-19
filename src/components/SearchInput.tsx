import cls from 'classnames'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Input from './common/Input'
import type { InputProps } from './common/Input'

interface Props extends InputProps {
  layoutClassName?: string
  loading?: boolean
}

const SearchInput: React.FC<Props> = ({ layoutClassName, loading, ...restProps }) => {
  return (
    <div className={cls('relative', layoutClassName)}>
      <Input {...restProps} />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <MagnifyingGlassIcon className="w-6 h-6" />
      </div>
    </div>
  )
}

export default SearchInput
