interface SectionProps {
  title: string
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section>
      <h2
        id={`section-${title}`}
        className="py-6 my-6 border-b text-2xl text-primary-500 dark:text-primary-400 font-bold dark:border-gray-500"
      >
        {title}
      </h2>
      <div>{children}</div>
    </section>
  )
}

export default Section
