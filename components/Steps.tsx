import { Fragment } from "react";

export function Steps({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) {
  function isCompletedStep(step: number) {
    return step < currentStep;
  }

  function isCurrentStep(step: number) {
    return step === currentStep;
  }

  function isFinalStep(step: number) {
    return step === totalSteps - 1;
  }

  return (
    <div className="mx-10 mt-10 flex justify-between items-center">
      {[...Array(totalSteps)].map((_, index) => (
        <Fragment key={index}>
          {isCompletedStep(index) ? (
            <div className="rounded-full bg-indigo-600 text-white p-1 w-6 h-6">
              {/* Checkbox icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : isCurrentStep(index) ? (
            <div className="flex justify-center items-center w-6 h-6 border-2 border-indigo-600 rounded-full">
              <div className="w-3 h-3 bg-indigo-600 rounded-full" />
            </div>
          ) : (
            <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
          )}
          {isFinalStep(index) ? null : (
            <div
              className={`flex flex-1 h-0.5 ${
                isCompletedStep(index) ? "bg-indigo-600" : "bg-gray-200"
              }`}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
}
