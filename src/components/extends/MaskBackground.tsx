import type { PropsWithChildren } from 'react'

const MaskBackground: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative border-b before:absolute before:z-0 before:block before:w-full before:h-full before:bg-grid dark:before:bg-grid-dark before:bg-grid-fade-out">
      {children}
    </div>
  )
}

export default MaskBackground
