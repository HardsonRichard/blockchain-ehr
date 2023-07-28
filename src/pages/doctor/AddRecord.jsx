import React, { useState } from "react";
import PatientRecord from "../../components/doctor/PatientRecord";
import { HiClipboardCopy, HiOutlineSearch } from "react-icons/hi";

const AddRecord = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex flex-col sticky top-16  z-[80] py-1">
      <div className="flex justify-center py-8 text-blue-600">
        ADD PATIENT RECORD MODULE
      </div>
      <div className="flex flex-col justify-center items-center min-h-full w-full px-4 py-2">
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
          onClick={(e) => setVisible(true)}
          className="mt-4 flex flex-col text-center  items-center bg-transparent text-sm px-12 text-gray-500"
        >
          <HiClipboardCopy fontSize={120} />
          ADD PATIENT RECORD
        </button>
            <PatientRecord isOpen={visible} visible={visible} setVisible={setVisible} />
      </div>
    </div>
  );
};

export default AddRecord;
