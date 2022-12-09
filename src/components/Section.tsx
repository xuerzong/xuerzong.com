import { type PropsWithChildren } from 'react'

interface SectionProps {
  title: string
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({ title, children }) => {
  return (
    <section>
      <h2
        id={`section-${title}`}
        className="py-6 my-6 border-b text-3xl font-bold dark:border-gray-500"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default Section
