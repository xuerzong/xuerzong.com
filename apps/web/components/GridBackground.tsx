import { forwardRef, type PropsWithChildren } from 'react'

const GridBackground: React.FC<PropsWithChildren> = forwardRef<HTMLDivElement, PropsWithChildren>(
  (props, ref) => {
    return (
      <div
        ref={ref}
        className="relative before:absolute before:z-0 before:block before:w-full before:h-full before:bg-grid dark:before:bg-grid-dark before:bg-grid-fade-out"
        {...props}
      />
    )
  }
)

GridBackground.displayName = 'GridBackground'

export default GridBackground
