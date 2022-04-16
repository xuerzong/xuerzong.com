import { Calendar } from '@/components/icon';

interface TimeProps {
  date: string;
}

const Time: React.FC<TimeProps> = ({ date }) => (
  <div className="flex items-center">
    <span className="inline-block mr-1">
      <Calendar />
    </span>
    <time>{date}</time>
  </div>
);

export default Time;
