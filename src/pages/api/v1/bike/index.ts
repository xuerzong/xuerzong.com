import { NextApiRequest, NextApiResponse } from 'next'
import moment from '@/utils/moment'

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    top_single: 124.53,
    total: 3491.04,
    top_speed: 55,
    wrestling_times: 2,
    created_at: moment('2022-07-07'),
    updated_at: moment('2023-01-01'),
  })
}