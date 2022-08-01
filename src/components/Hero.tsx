import { Bike, Camera, DeviceGamepad2, Terminal2 } from 'tabler-icons-react'
import cls from 'classnames'

const hobbiesIconClassName = 'w-8 h-8'

const hobbies = [
  {
    key: 'sport',
    title: '骑行',
    icon: <Bike className={hobbiesIconClassName} />,
    className: 'text-emerald-600 dark:text-emerald-400 bg-emerald-600',
  },
  {
    key: 'code',
    title: '编程',
    icon: <Terminal2 className={hobbiesIconClassName} />,
    className: 'text-sky-600 dark:text-sky-400 bg-sky-600',
  },
  {
    key: 'photo',
    title: '摄影',
    icon: <Camera className={hobbiesIconClassName} />,
    className: 'text-violet-600 dark:text-violet-400 bg-violet-600',
  },
  {
    key: 'game',
    title: '游戏',
    icon: <DeviceGamepad2 className={hobbiesIconClassName} />,
    className: 'text-rose-600 dark:text-rose-400 bg-rose-600',
  },
]

const Hero: React.FC = () => {
  const hobbiesRender = hobbies.map(({ key, title, icon, className }) => {
    return (
      <li
        key={key}
        title={title}
        className={cls(
          'flex flex-wrap items-center justify-center bg-opacity-10 hover:bg-opacity-20 py-2 ring-4 ring-current rounded whitespace-nowrap cursor-pointer',
          className
        )}
      >
        <span className="mr-2">{icon}</span>
        <div className="inline-block text-xl">{title}</div>
      </li>
    )
  })

  return (
    <section className="py-24 text-center">
      <h2 className="text-7xl font-bold mb-6">
        我叫
        <span className="inline-block text-primary-600 dark:text-primary-400 border-b-4 border-current">
          徐聪
        </span>
      </h2>

      <p className="opacity-75 mt-6 mb-16">
        一名99年有志青年，只希望我爱的人和爱我的人<strong>身体健康</strong>
      </p>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">{hobbiesRender}</ul>
    </section>
  )
}

export default Hero
