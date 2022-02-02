import { Pentagon } from '../icon';

const Category: React.FC = ({ children }) => (
  <div className="flex items-center">
    <span className="inline-block mr-1">
      <Pentagon />
    </span>
    <time>{children}</time>
  </div>
);

export default Category;
