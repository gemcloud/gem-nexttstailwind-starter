import React from "react";
import { ThemeContext } from "@/components/themes/ThemeContext";

export const DemoChildComponent = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
      <h1
        className={`${theme} bg-custom-400 bg-opacity-100 text-5xl font-bold text-custom-100 text-opacity-75`}
      >
        Hello bg-opacity-100
      </h1>
      <h1
        className={`${theme} bg-custom-400 bg-opacity-77 text-5xl font-bold text-custom-100 text-opacity-20`}
      >
        Hello bg-opacity-75
      </h1>
      <h1
        className={`${theme} bg-custom-400/75 text-5xl font-bold text-custom-100 text-opacity-20`}
      >
        Hello bg-opacity-75 bg-custom-400/75 opacityValue used!
      </h1>
      <h1
        className={`${theme} bg-custom-400 bg-opacity-75 text-5xl font-bold text-custom-100 text-opacity-20`}
      >
        Hello bg-opacity-50
      </h1>
      <h1
        className={`${theme} bg-custom-400 bg-opacity-25 text-5xl font-bold text-custom-100 text-opacity-20`}
      >
        Hello bg-opacity-25
      </h1>
      <h1
        className={`${theme} bg-custom-400 bg-opacity-0 text-5xl font-bold text-custom-100 text-opacity-20`}
      >
        Hello bg-opacity-0
      </h1>

      <div
        className={`${theme}  h-8 bg-custom-100/80 text-sm text-custom-400 ring-custom-200 `}
      >
        “Call To Action” (CTA) component
      </div>
      <div
        className={`${theme} max-w-md overflow-hidden  rounded bg-custom-200 text-white shadow-lg `}
      >
        {/* <h3 className=""> */}
        <h3
          className={`${theme} m-0 bg-custom-300 p-4 text-2xl font-bold tracking-tight text-custom-100 text-opacity-75 md:px-6 `}
        >
          Join our mailing list
        </h3>
        <div className="p-4 md:px-6 md:pb-6">
          <p>Be the first to hear about our new offerings</p>
          <button
            // className="mt-4 rounded-xl border-2 py-3 px-8 font-bold hover:border-white hover:bg-transparent focus:border-white focus:bg-transparent md:mt-6"
            className={`${theme} mt-4 rounded-xl border-2 border-custom-300 bg-custom-300 py-3 px-8 font-bold hover:border-white hover:bg-transparent focus:border-white focus:bg-transparent md:mt-6`}
            type="button"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};
