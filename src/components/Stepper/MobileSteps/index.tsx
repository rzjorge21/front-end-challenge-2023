import { ArrowIcon } from "../../Icons/ArrowIcon";

export const MobileSteps = ({ step } : any) => {
  return (
    <div className="steps-container__content mobile-steps px-mobile-24">
      <div className="content__step">
        <ArrowIcon />
        <div className={`step__text`}>
          PASO {step === 'one' ? '1' : '2'} DE 2
        </div>
        <div className="step__progress-bar">
          <div
            className={`progress-bar__fill ${
              step === 'one' ? 'first' : 'second'
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};
