import { InputHTMLAttributes } from "react";
// import { CheckboxProps } from "./interfaces";
import "./styles.scss";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  text?: string;
}

export const Checkbox = ({ text, ...rest }: Props) => {
  return (
    <div className='checkbox-container'>
      <label className='container'>
        <input type='checkbox' {...rest} />
        <span className='checkmark'></span>
      </label>
      <p>{text}</p>
    </div>
  );
};
