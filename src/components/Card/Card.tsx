import { ButtonHTMLAttributes } from "react";
import "./styles.scss";
import { CheckIcon } from "../Icons/CheckIcon";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: () => JSX.Element;
  title: string;
  description: string;
  selected: boolean;
};

export const Card = ({
  Icon,
  title,
  description,
  selected,
  onClick,
}: Props) => {
  return (
    <button
      className={`smallcard-container ${selected ? "selected" : "unselected"}`}
      onClick={onClick}
    >
      <div className="smallcard-container__checkbox-container">
        {selected ? (
          <CheckIcon />
        ) : (
          <div className="checkbox-container__unchecked"></div>
        )}
      </div>
      <div className="smallcard-container__title-container">
        <Icon />
        <h3>{title}</h3>
      </div>
      <p className="smallcard-container__description">{description}</p>
    </button>
  );
};
