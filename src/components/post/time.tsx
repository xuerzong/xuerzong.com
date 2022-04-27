import { AiOutlineCalendar } from 'react-icons/ai';
import { Calendar } from '@/components/icon';

interface TimeProps {
  date: string;
}

const Time: React.FC<TimeProps> = ({ date }) => (
  <div className="flex items-center">
    <AiOutlineCalendar className="inline-block mr-1" />
    <time>{date}</time>
  </div>
);

export default Time;
