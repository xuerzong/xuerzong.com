import cls from 'classnames'
import { Search, Loader } from 'tabler-icons-react'
import Input from './common/Input'
import type { InputProps } from './common/Input'

interface Props extends InputProps {
  layoutClassName?: string
  loading?: boolean
}

const SearchInput: React.FC<Props> = ({ layoutClassName, loading, ...restProps }) => {
  const iconRender = loading ? <Loader className={'animate-spin'} /> : <Search />

  return (
    <div className={cls('relative', layoutClassName)}>
      <Input {...restProps} />
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">{iconRender}</div>
    </div>
  )
}

export default SearchInput
