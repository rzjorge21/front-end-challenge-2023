import { Divider } from '../Divider/Divider';
import { Logo } from '../Logo/Component';
import './styles.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content mobile-px-24">
        <div className="desktop">
          <Logo color="white" />
        </div>
        <div className="mobile">
          <Logo variant="horizontal" />
        </div>
        <div className="content__divider mobile">
          <Divider mode="dark" />
        </div>
        <div className="content__text">2023 RIMAC Seguros y Reaseguros</div>
      </div>
    </footer>
  );
};
