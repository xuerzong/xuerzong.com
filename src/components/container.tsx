import cls from 'classnames';

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <div className={cls('max-w-screen-sm mx-auto px-4 lg:px-0', className)}>
    {children}
  </div>
);

export default Container;
