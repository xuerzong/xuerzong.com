import Github from './Github'

const iconMap = {
  github: Github,
}

interface IconProps {
  name: keyof typeof iconMap
}

const Icon: React.FC<IconProps> = ({ name }) => {
  const Component = iconMap[name]
  return <Component />
}

export default Icon
