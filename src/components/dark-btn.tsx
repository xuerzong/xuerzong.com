import { useTheme } from '@/hooks/useTheme';
export const DarkBtn = () => {
  const { changeDarkMode } = useTheme();
  return (
    <span className="hover:-rotate-45 transition-transform duration-300 cursor-pointer">
      <i className="gg-sun" onClick={changeDarkMode} />
    </span>
  );
};
