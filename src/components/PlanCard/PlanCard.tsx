import { useNavigate } from "react-router-dom";
import { Divider } from "../Divider/Divider";
import { HomeIcon } from "../Icons/HomeIcon";
import "./styles.scss";
import { usePlanStore } from "../../hooks/store/planStore";
import { PlanModel } from "../../models/planModel";

type Props = PlanModel & {};

export const PlanCard = ({ ...plan }: Props) => {
  const navigate = useNavigate();
  const { setSelectedPlan } = usePlanStore();

  const handleSelectPlan = (plan: PlanModel) => {
    setSelectedPlan(plan);
    navigate("/resume");
  };

  return (
    <div className="plan-card-container">
      <div>
        <div className="plan-card-container__title-container">
          <div className="title-container__title">{plan.name}</div>
          <HomeIcon />
        </div>
        <div className="plan-card-container__cost-title">COSTO DEL PLAN</div>
        <div className="plan-card-container__price">${plan.price} al mes</div>
        <Divider />
        <div className="plan-card-container__descriptions-container">
          {plan.description.map((description, index) => (
            <div key={index} className="description-container__description">
              <div className="description__point"></div>
              <div className="description__content">{description}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="plan-card-container__button"
        onClick={() => handleSelectPlan(plan)}
      >
        Seleccionar Plan
      </button>
    </div>
  );
};
