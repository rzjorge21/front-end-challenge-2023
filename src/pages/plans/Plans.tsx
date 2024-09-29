import { useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { ArrowIcon } from "../../components/Icons/ArrowIcon";
import { Card } from "../../components/Card/Card";
import { ForMeIcon } from "../../components/Icons/ForMeIcon";
import { ForSomeoneElseIcon } from "../../components/Icons/ForSomeoneElseIcon";
import { PlanCard } from "../../components/PlanCard/PlanCard";
import { Stepper } from "../../components/Stepper/Stepper";
import "./styles.scss";
import { useUserStore } from "../../hooks/store/userStore";
import { getAge } from "../../utils/getAge";
import { usePlanStore } from "../../hooks/store/planStore";
import { PlanModel } from "../../models/planModel";

export default function Plans() {
  const { user } = useUserStore();
  const { plansData } = usePlanStore();

  const [plansToShow, setPlansToShow] = useState<PlanModel[]>([]);
  const [selectedPerson, setselectedPerson] = useState<"me" | "other">();

  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  const cardsPerPage = window.matchMedia("(max-width: 768px)").matches ? 1 : 3;

  useEffect(() => {
    setMaxPages(Math.ceil(plansToShow.length / cardsPerPage));
  }, [plansToShow, cardsPerPage]);

  const indexOfLastCard = (currentPage + 1) * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = plansToShow.slice(indexOfFirstCard, indexOfLastCard);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const onSelectOption = (option: "me" | "other") => {
    const age = getAge(user?.birthDay!);
    setselectedPerson(option);
    if (option == "me") {
      let filteredPlans = plansData.filter((plan) => plan.age < age);
      setPlansToShow(filteredPlans);
    } else {
      let filteredPlans = plansData;
      setPlansToShow(filteredPlans);
    }
  };

  return (
    <Layout withFooter={false} withBackground={false}>
      <Stepper step="one" />
      <div className="plans-container">
        <button
          className="plans-container__arrow-container"
          onClick={() => window.history.back()}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        <div className="plans-title-container">
          <h1>{user?.name} ¿ Para quién deseas cotizar?</h1>
        </div>
        <div className="plans-subtitle-container">
          <p>Selecciona la opción que se ajuste más a tus necesidades</p>
        </div>
        <div className="plans-container__cards-container">
          <Card
            Icon={ForMeIcon}
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            selected={selectedPerson === "me"}
            onClick={() => {
              onSelectOption("me");
            }}
          />
          <Card
            Icon={ForSomeoneElseIcon}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            selected={selectedPerson === "other"}
            onClick={() => {
              onSelectOption("other");
            }}
          />
        </div>
        <div className="plans-container__plans-container">
          {currentCards.map((plan) => (
            <PlanCard
              key={plan.age}
              age={plan.age}
              description={plan.description}
              name={plan.name}
              price={plan.price}
            />
          ))}
        </div>

        {maxPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <ArrowIcon width="20" height="20" color="white" />
            </button>
            <span>
              {currentPage + 1}/{maxPages}
            </span>
            <button
              onClick={nextPage}
              disabled={indexOfLastCard >= plansToShow.length}
              className="arrow-reversed"
            >
              <ArrowIcon width="20" height="20" color="white" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
