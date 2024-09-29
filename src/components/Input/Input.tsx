import { InputHTMLAttributes } from "react";
import "./styles.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  variant?: "default" | "left" | "right";
};

export const Input = ({
  variant = "default",
  label,
  ...rest
}: Props) => {
  return (
    <div
      className={`input-container ${variant} default-border-color`}
    >
      <label className={`default-color`}>
        {label}
      </label>
      <input {...rest} />
    </div>
  );
};
