import { Divider } from '../../components/Divider/Divider';
import { ArrowIcon } from '../../components/Icons/ArrowIcon';
import { UserIcon } from '../../components/Icons/UserIcon';
import { Layout } from '../../components/Layout/Layout';
import { Stepper } from '../../components/Stepper/Stepper';
import { usePlanStore } from '../../hooks/store/planStore';
import { useUserStore } from '../../hooks/store/userStore';
import './styles.scss';

function Resume() {
  const { user, cellphone, dni } = useUserStore();
  const { selectedPlan } = usePlanStore();

  return (
    <Layout withFooter={false} withBackground={false}>
      <Stepper step="two" />
      <div className="resume-container">
        <button
          className="resume-container__arrow-container"
          onClick={() => window.history.back()}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        <h1 className="resume-container__title">Resumen del seguro</h1>
        <div className="resume-container__details">
          <p className="details-card__subtitle">PRECIOS CALCULADOS PARA:</p>
          <div className="details-card__name">
            <UserIcon />
            <p>
              {user?.name} {user?.lastName}
            </p>
          </div>
          <Divider />
          <div>
            <p className="details-card__title">Responsable de pago</p>
            <p className="details-card__item">
              DNI: {dni}
            </p>
            <p className="details-card__item">Celular: {cellphone}</p>
          </div>
          <div className="details-card__content">
            <p className="details-card__title">Plan elegido</p>
            <p className="details-card__item">{selectedPlan?.name}</p>
            <p className="details-card__item">
              Costo del Plan: ${selectedPlan?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
