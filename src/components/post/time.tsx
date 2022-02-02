import moment from 'utils/moment';
import { Calendar } from 'components/icon';

interface TimeProps {
  date: string;
}

const Time: React.FC<TimeProps> = ({ date }) => (
  <div className="flex items-center">
    <span className="inline-block mr-1">
      <Calendar />
    </span>
    <time>{moment(date).format('YYYY.MM.DD')}</time>
  </div>
);

export default Time;
