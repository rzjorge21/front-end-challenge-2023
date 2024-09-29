import { DesktopSteps } from './DesktopSteps';
import { MobileSteps } from './MobileSteps';
import './styles.scss';

type Props = {
  step: "one" | "two";
}


export const Stepper = ({ step }: Props) => {
  return (
    <div className="steps-container">
      <DesktopSteps step={step} />
      <MobileSteps step={step} />
    </div>
  );
};
