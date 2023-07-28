import React, { useState } from "react";
import { FcKindle } from "react-icons/fc";
import RegisterPatientForm from "./RegisterPatientForm";

function RegisterPatient() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col justify-center min-h-full px-6 md:px-8 py-12 items-center">
      <div className="text-2xl font-semi-bold text-gray-900">
        <button
          onClick={(e) => setVisible(true)}
          className="mt-4 flex flex-col text-center  items-center bg-transparent text-sm px-12 text-gray-500"
        >
          <FcKindle fontSize={120} />
          REGISTER PATIENT
        </button>
            <RegisterPatientForm isOpen={visible} visible={visible} setVisible={setVisible} />

      </div>
    </div>
  );
}

export default RegisterPatient;
