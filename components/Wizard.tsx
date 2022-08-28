import { Dialog } from "@headlessui/react";
import { PropsWithChildren, useState } from "react";

function StepWrapper({ children }: PropsWithChildren) {
  return <div className="p-6 w-full">{children}</div>;
}

function Title({ children }: PropsWithChildren) {
  return (
    <Dialog.Title
      as="h3"
      className="text-lg font-medium leading-6 text-gray-900"
    >
      {children}
    </Dialog.Title>
  );
}

function Description({ children }: PropsWithChildren) {
  return (
    <Dialog.Description className="text-gray-500 text-base mt-1">
      {children}
    </Dialog.Description>
  );
}

export function Step1() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <StepWrapper>
      <Title>Select Template</Title>
      <Description>Pick a starter template for your site.</Description>

      <div className="mt-5">
        <button
          onClick={() => setSelected(0)}
          className={`w-full mt-3 text-left text-gray-500 border-2 ${
            selected === 0 ? "border-indigo-700" : "border-gray-200"
          } flex px-4 py-3 rounded-md hover:shadow outline-none`}
        >
          <div className="w-[48px]">
            {/* Remix logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              fill="currentColor"
              className="text-gray-400 mt-1.5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 100V84.4721H35.2657C39.9871 84.4721 41.0123 87.9738 41.0123 90.0622V100H7Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M90.0755 77.118C90.9748 88.6719 90.9748 94.088 90.9748 100H64.2423C64.2423 98.7123 64.2653 97.5343 64.2886 96.3398C64.3609 92.6264 64.4364 88.7541 63.8347 80.9342C63.0395 69.4856 58.1095 66.9417 49.0446 66.9417H41.0133H7V46.1118H50.3169C61.7672 46.1118 67.4926 42.6285 67.4926 33.4061C67.4926 25.2968 61.7672 20.3827 50.3169 20.3827H7V0H55.0879C81.0104 0 93.8922 12.2436 93.8922 31.8013C93.8922 46.4298 84.8273 55.9702 72.5816 57.5603C82.9188 59.6273 88.9622 65.5106 90.0755 77.118Z"
              />
            </svg>
          </div>

          <div className="ml-4">
            <span className="text-gray-700 font-medium block">
              Remix with Supabase Starter
            </span>
            <span className="text-sm">
              Remix starter with Supabase, TypeScript, TailwindCSS and Cypress.
            </span>
          </div>
        </button>
        <button
          onClick={() => setSelected(1)}
          className={`w-full mt-3 text-left text-gray-500 border-2 ${
            selected === 1 ? "border-indigo-700" : "border-gray-200"
          } flex px-4 py-3 rounded-md hover:shadow outline-none`}
        >
          <div className="w-[48px]">
            {/* Next.js logo */}
            <svg
              height="48"
              viewBox="0.5 -0.2 1023 1024.1"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="!fill-current text-gray-400 mt-1"
              focusable="false"
            >
              <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"></path>
              <path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"></path>
            </svg>
          </div>

          <div className="ml-4">
            <span className="text-gray-700 font-medium block">
              Next.js Blog Starter
            </span>
            <span className="text-sm">
              A customizable blog starter built with Next.js, Tailwind, and MDX.
            </span>
          </div>
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`flex-1 w-full mt-3 text-left text-gray-500 border-2 ${
            selected === 2 ? "border-indigo-700" : "border-gray-200"
          } flex px-4 py-3 rounded-md hover:shadow outline-none`}
        >
          <div className="w-[48px]">
            {/* Nuxt.js logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 400 302"
              fill="currentColor"
              className="mt-0.5"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m227.921 82.451-13.689 24.101-46.815-82.447L23.704 277.17h97.303c0 13.311 10.613 24.102 23.704 24.102H23.704c-8.468 0-16.292-4.596-20.525-12.053a24.451 24.451 0 0 1 .001-24.099L146.894 12.055C151.128 4.597 158.954.003 167.422.003c8.469 0 16.295 4.594 20.529 12.052l39.97 70.396Z"></path>
              <path d="M331.664 265.12 241.61 106.552l-13.689-24.101-13.689 24.101-90.044 158.568a24.449 24.449 0 0 0-.001 24.099c4.233 7.457 12.056 12.053 20.524 12.053h166.4c8.47 0 16.297-4.591 20.532-12.049a24.449 24.449 0 0 0 .001-24.103h.02Zm-186.953 12.05 83.21-146.516 83.19 146.516h-166.4Z"></path>
              <path d="M396.05 289.221c-4.234 7.456-12.057 12.051-20.524 12.051h-64.415c13.091 0 23.704-10.791 23.704-24.102h40.662L260.099 73.985l-18.489 32.567-13.689-24.101 11.654-20.516c4.235-7.458 12.06-12.052 20.529-12.052s16.294 4.594 20.528 12.052L396.05 265.12a24.453 24.453 0 0 1 0 24.101Z"></path>
            </svg>
          </div>

          <div className="ml-4">
            <span className="text-gray-700 font-medium block">
              Nuxt.js Starter
            </span>
            <span className="text-sm">
              Nuxt.js starter with TypeScript, TailwindCSS. SEO and PWA ready.
            </span>
          </div>
        </button>
      </div>
    </StepWrapper>
  );
}

export function Step2() {
  return (
    <StepWrapper>
      <Title>Create Git repository</Title>
      <Description>
        Choose your Git provider to create a repo for this template.
      </Description>

      <div className="mt-6 flex flex-col items-center text-gray-700">
        <button className="flex items-center mb-5 w-24 group hover:text-black">
          <div className="w-6 text-gray-600 group-hover:text-black">
            {/* GitHub logo */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
              ></path>
            </svg>
          </div>
          <span className="ml-1.5 font-medium text-lg">GitHub</span>
        </button>
        <button className="flex items-center mb-5 w-24 group hover:text-black">
          <div className="w-6 group-hover:text-[#FC6D26]">
            {/* GitLab logo */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M5.868 2.75L8 10h8l2.132-7.25a.4.4 0 0 1 .765-.01l3.495 10.924a.5.5 0 0 1-.173.55L12 22 1.78 14.214a.5.5 0 0 1-.172-.55L5.103 2.74a.4.4 0 0 1 .765.009z"></path>
              </g>
            </svg>
          </div>
          <span className="ml-1.5 font-medium text-lg">GitLab</span>
        </button>
        <button className="flex items-center mb-5 w-24 group hover:text-black">
          <div className="w-6 px-0.5 group-hover:text-[#2684FF]">
            {/* Bitbucket logo */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"></path>
            </svg>
          </div>
          <span className="ml-1.5 font-medium text-lg">Bitbucket</span>
        </button>
      </div>
    </StepWrapper>
  );
}

export function Step3() {
  return (
    <StepWrapper>
      <Title>Site Setup</Title>
      <Description>Configure how your site builds and deploys.</Description>

      <div className="my-6">
        <label className="block text-sm font-medium text-gray-700">
          Site Name
        </label>
        <input
          type="text"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="my-6">
        <label className="block text-sm font-medium text-gray-700">Owner</label>
        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Emily Selman’s Team</option>
          <option>Floyd Miles’ Team</option>
        </select>
      </div>
      <div className="my-6">
        <label className="block text-sm font-medium text-gray-700">
          Repository visibility
        </label>
        <select className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>Public</option>
          <option>Private</option>
        </select>
      </div>
    </StepWrapper>
  );
}
