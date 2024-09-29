import { HorizontalLogo } from './components/HorizontalLogo';
import { VerticalLogo } from './components/VerticalLogo';
import './styles.scss';

type Props = {
  color?: "default" | "white" | "black";
  variant?: "vertical" | "horizontal";
}

export const Logo = ({
  color = 'default',
  variant = 'vertical',
}: Props) => {
  return (
    <div className={`logo-container ${color}`}>
      {variant == 'vertical' ? <VerticalLogo /> : <HorizontalLogo />}
    </div>
  );
};
