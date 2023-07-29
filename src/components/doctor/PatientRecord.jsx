import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { init, addPatientRecord } from "../../Web3patient";
import Web3 from "web3";

const input_classes =
  "block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6";
const margin_top = "mt-1.5";
const label_classes = "block text-sm font-medium leading-6 text-gray-900";

const PatientRecord = (props) => {
  const [patientRecord, setPatientRecord] = useState({
    patientID: "",
    appointmentID: "",
    symptoms: "",
    diagnosis: "",
    testResult: false,
    prescription: ""
  });


  useEffect(() => {
    init();
  }, []);

  const handleSelectChange = (event) => {
    setPatientRecord({
      ...patientRecord,
      testResult: event.target.value
    });
  };

  const handlePatientRecordChange = (e) => {
    setPatientRecord({
      ...patientRecord,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      patientID,
      appointmentID,
      symptoms,
      diagnosis,
      testResult,
      prescription,
    } = patientRecord;

    const web3 = new Web3(window.ethereum);

    try {
      await addPatientRecord(
        web3.utils.toBN(patientID), // Convert to BigNumber
        web3.utils.toBN(appointmentID), // Convert to BigNumber
        symptoms,
        diagnosis,
        testResult,
        prescription
      );
      console.log("Patient record added successfully");
      props.setVisible(false); // Close the overlay after adding the patient record
    } catch (error) {
      console.log("Error adding patient record:", error);
    }
  };

  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-75 z-[1000]" />
      <div className="absolute w-1100 h-fit bg-white rounded-md shadow-lg z-[1000] overflow-auto top-10 left-40 right-40 bottom-10">
        <div className="block w-full h-full bg-slate-50 shadow-lg shadow-slate-50 rounded-md">
          <form action="" id="add-patient-record" onSubmit={handleSubmit}>
            <div className="space-y-12 px-8">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="flex  flex-col justify-center items-center">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Patient Record
                  </h2>
                  <div className="m-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="patientID" className={label_classes}>
                          Patient ID
                        </label>
                        <div className={margin_top}>
                          <input
                            type="text"
                            name="patientID"
                            id="patientID"
                            placeholder="Patient ID"
                            autoComplete="patientID"
                            value={patientRecord.patientID}
                            onChange={handlePatientRecordChange}
                            className={input_classes}
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="appointmentID"
                          className={label_classes}
                        >
                          appointment ID
                        </label>
                        <div className={margin_top}>
                          <input
                            type="text"
                            name="appointmentID"
                            id="appointmentID"
                            placeholder="appointment ID"
                            autoComplete="appointment ID"
                            value={patientRecord.appointmentID}
                            onChange={handlePatientRecordChange}
                            className={input_classes}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="symptoms" className={label_classes}>
                        Symptoms
                      </label>
                      <div className={margin_top}>
                        <textarea
                          name="symptoms"
                          id="symptoms"
                          rows={3}
                          autoComplete="symptoms"
                          className={input_classes}
                          value={patientRecord.symptoms}
                          onChange={handlePatientRecordChange}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="diagnosis" className={label_classes}>
                        Diagnosis
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="diagnosis"
                          id="diagnosis"
                          placeholder="Diagnosis"
                          autoComplete="Diagnosis"
                          value={patientRecord.diagnosis}
                          onChange={handlePatientRecordChange}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="testResult" className={label_classes}>
                        Test Result
                      </label>
                      <div className={margin_top}>
                        <select
                          id="testResult"
                          name="testResult"
                          value={patientRecord.testResult}
                          onChange={handleSelectChange}
                          required
                          className={input_classes}
                        >
                          <option value="">Select an option</option>
                          <option value="true">Found</option>
                          <option value="false">Not Found</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="prescription" className={label_classes}>
                        Prescription
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="prescriptions"
                          id="prescriptions"
                          placeholder="Prescription"
                          autoComplete="Prescription"
                          value={patientRecord.prescriptions}
                          onChange={handlePatientRecordChange}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                      <button
                        onClick={() => props.setVisible(false)}
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default PatientRecord;
