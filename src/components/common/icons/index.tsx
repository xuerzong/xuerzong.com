import React from 'react'
import { Moon, Sun, Calendar } from 'tabler-icons-react'
import { ComputerOutlinedIcon } from './Computer'
import Github from './Github'
import { LogoLight } from './Logo'

export interface SVGIconProps {
  className?: string
}

const iconMap = {
  github: Github,
  computerOutlined: ComputerOutlinedIcon,
  sunOutlined: Sun,
  moonOutlined: Moon,
  calendarOutlined: Calendar,
  logoLight: LogoLight,
}

export type IconName = keyof typeof iconMap

interface IconProps {
  name: IconName
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, ...restProps }) => {
  const Component = iconMap[name]

  if (!Component) {
    return null
  }

  return React.createElement<SVGIconProps>(Component, restProps)
}

export default Icon