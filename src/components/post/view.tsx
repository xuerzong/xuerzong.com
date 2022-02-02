import { Eye } from 'components/icon';

interface ViewProps {
  views: number;
}

const View: React.FC<ViewProps> = ({ views }) => (
  <div className="flex items-center">
    <span className="inline-block mr-2">
      <Eye />
    </span>
    <time>{views || '--'}</time>
  </div>
);

export default View;
