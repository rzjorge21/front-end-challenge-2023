import { PropsWithChildren } from 'react';
import './styles.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

type Props = {
  withFooter?: boolean;
  withBackground?: boolean;
}

export const Layout = ({
  children,
  withFooter = true,
  withBackground = true,
}: PropsWithChildren<Props>) => {
  return (
    <>
      <div
        className={`layout-container ${
          withBackground ? 'pos_relative' : 'pos_inherit'
        }`}
      >
        <Header />
        <div className="mobile-px-24">{children}</div>
        {withBackground && (
          <>
            <div className="layout-container__purple_bg"></div>
            <div className="layout-container__green_bg"></div>
          </>
        )}
      </div>

      {withFooter && <Footer />}
    </>
  );
};
