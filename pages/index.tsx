import { useState } from "react";
import { PrimaryButton, SecondaryButton } from "../components/Button";
import Dialog from "../components/Dialog";
import ResizingBox from "../components/ResizingBox";
import { Steps } from "../components/Steps";
import { Step1, Step2, Step3 } from "../components/Wizard";

const wizardSteps = [<Step1 key={0} />, <Step2 key={1} />, <Step3 key={2} />];

export default function App() {
  const [step, setStep] = useState(0);

  function goForward() {
    setStep(step + 1);
  }

  function goBack() {
    setStep(step - 1);
  }

  let [isModalOpen, setIsModalOpen] = useState(true);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function deploy() {
    closeModal();

    // wait for modal close animation
    setTimeout(() => {
      setStep(0);
    }, 250);
  }

  const prevStep = usePreviousStep(step);
  const direction = step > prevStep ? 1 : -1;

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <SecondaryButton onClick={openModal}>Open Dialog</SecondaryButton>
      </div>
      <Dialog isOpen={isModalOpen} onClose={closeModal}>
        <Steps currentStep={step} totalSteps={wizardSteps.length} />
        <div className="mt-2">
          <ResizingBox direction={direction}>
            {wizardSteps[Math.abs(step) % wizardSteps.length]}
          </ResizingBox>
        </div>
        <div className="flex flex-row-reverse justify-between px-6 py-3 bg-gray-50 text-right">
          {step >= wizardSteps.length - 1 ? (
            <PrimaryButton onClick={deploy}>Deploy</PrimaryButton>
          ) : (
            <PrimaryButton onClick={goForward}>Next</PrimaryButton>
          )}
          {step > 0 && (
            <SecondaryButton onClick={goBack} disabled={step < 1}>
              Back
            </SecondaryButton>
          )}
        </div>
      </Dialog>
    </>
  );
}

const usePreviousStep = (currentStep: number) => {
  const [tuple, setTuple] = useState([null, currentStep]);

  if (tuple[1] !== currentStep) {
    setTuple([tuple[1], currentStep]);
  }

  const prevStep = tuple[0] ?? 0;

  return prevStep;
};
