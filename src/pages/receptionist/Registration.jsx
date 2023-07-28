import React, { useState } from "react";
import RegisterPatient from "../../components/receptionist/RegisterPatient";
import UpdatePatient from "../../components/receptionist/UpdatePatient";
import RegisterCorpse from "../../components/receptionist/RegisterCorpse";


const buttonClassNames =
  "flex w-[20rem] mx-3 justify-center rounded-md bg-green-800 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm hover:bg-green-500 focus:bg-green-500 focus:outline-none";


function Registration() {
  const [content, setContent] = useState(<RegisterPatient />);

  function handleClick(buttonContent) {
    setContent(buttonContent);
  }

  return (
    <div className="flex flex-col sticky top-16  z-[80] py-1">
      <div className="flex justify-center py-8 text-blue-600">
        REGISTRATION MODULE
        
      </div>
      <div className="flex justify-between items-center min-h-full w-full px-4 py-2">
        <button
          className={buttonClassNames}
          onClick={() => handleClick(<RegisterPatient />)}
        >
          REGISTER PATIENT
        </button>
        <button
         className={buttonClassNames}
         onClick={() => handleClick(<UpdatePatient />)}
        >
          UPDATE PATIENT
        </button>
        <button className={buttonClassNames}
        onClick={() => handleClick(<RegisterCorpse />)}
        >
          REGISTER CORPSE
        </button>
      </div>
      <div className="mt-4 mx-4 border-t border-gray-200">
        {content && <div className="p-4">{content}</div>}
      </div>
    </div>
  );
}

export default Registration;
