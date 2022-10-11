interface Props {
  description?: string
}

const Empty: React.FC<Props> = ({ description = '暂无数据' }) => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <span className="text-sm opacity-60">{description}</span>
    </div>
  )
}

export default Empty
