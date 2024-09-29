import { InputHTMLAttributes } from "react";
import "./styles.scss";

interface Options {
  value: string;
  text: string | number;
}

type Props = InputHTMLAttributes<HTMLSelectElement> & {
  variant?: "default" | "left" | "right";
  options: Options[];
};

export const Select = ({
  variant = "default",
  options,
  ...rest
}: Props) => {
  return (
    <div
      className={`select-container ${variant} default-border-color`}
    >
      <select
        className={`default-color`}
        name="document"
        id="document"
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
