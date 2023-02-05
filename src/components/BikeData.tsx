import moment from '@/utils/moment'
import { useEffect, useState } from 'react'

const fetchBikeData = () => {
  return fetch('/api/v1/bike')
    .then((res) => res.json())
    .catch((e) => console.error(e))
}

type Data = {
  top_single: number
  total: number
  top_speed: number
  wrestling_times: number
  created_at: string
  updated_at: string
}

const initData: Data = {
  top_single: 0,
  total: 0,
  top_speed: 0,
  wrestling_times: 0,
  created_at: '',
  updated_at: '',
}

const BikeData = () => {
  const [data, setData] = useState<Data>({ ...initData })

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBikeData()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <p>
        更新时间：
        <code>{moment(data.updated_at).format('YYYY-MM-DD')}</code>
      </p>
      <ul>
        <li title="最远单程">
          最远单程：
          <span className="font-bold mx-2">{data.top_single}</span>
          KM
        </li>

        <li title="最高速度">
          最高速度：
          <span className="font-bold  mx-2">{data.top_speed}</span>
          KM/H
        </li>

        <li title="累计距离">
          累计距离：
          <span className="font-bold  mx-2">{data.total}</span>
          KM
        </li>

        <li title="摔跤次数">
          摔跤次数：
          <span className="font-bold  mx-2">{data.wrestling_times}</span>次
        </li>
      </ul>
    </div>
  )
}

export default BikeData
