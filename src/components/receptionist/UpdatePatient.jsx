import React, { useState } from "react";
import { FcDatabase } from "react-icons/fc";
import UpdatePatientForm from "./UpdatePatientForm";
import { HiOutlineSearch } from "react-icons/hi";

function UpdatePatient() {
  const [isIOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center min-h-full px-6 md:px-8 py-12 ">
      <div className="text-2xl font-semi-bold text-gray-900">
          <div className=" relative mt-1.5">
          <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 left-3 top-1/2 -translate-y-1/2"
        />
            <input
              type="text"
              name="patient-id"
              id="patient-id"
              placeholder="Enter patient ID"
              autoComplete="patient-id"
              required
              className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset px-10  ring-gray-300 placeholder:px-2 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-4 flex flex-col text-center  items-center bg-transparent text-sm px-12 text-gray-500"
        >
          <FcDatabase fontSize={120} />
          UPDATE PATIENT
        </button>
        <UpdatePatientForm isOpen={isIOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}

export default UpdatePatient;
