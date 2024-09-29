import { useUiStore } from '../../hooks/store/uiStore';
import './styles.scss';

const Loader = () => {
  const { isLoading } = useUiStore();

  if (!isLoading) return null;

  return (
    <div className="loader-overlay">
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;