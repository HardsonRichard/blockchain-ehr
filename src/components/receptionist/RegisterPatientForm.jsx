import React from "react";
import ReactDOM from "react-dom";
import { BigNumber } from "bignumber.js";
import { useState, useEffect } from "react";
import { init, addPatient, addPatientDemographics } from "../../Web3patient.js";

const input_classes =
  "block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6";
const margin_top = "mt-1.5";
const label_classes = "block text-sm font-medium leading-6 text-gray-900";

function RegisterPatientForm(props) {
  const [patient, setPatient] = useState({
    _patientName: "",
    dob: "",
  });
  const [patientDemographics, setPatientDemographics] = useState({
    _gender: "",
    _phoneNumber: "",
    _educationLevel: "",
    _country: "",
    _religion: "",
    _tribe: "",
    _maritalStatus: "",
    _region: "",
    _occupation: "",
    _residence: "",
  });

  useEffect(() => {
    init();
  }, []);

  const handlePatient = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handlePatientDemographics = (e) => {
    setPatientDemographics({
      ...patientDemographics,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { _patientName, dob } = patient;
    const {
      _gender,
      _phoneNumber,
      _educationLevel,
      _country,
      _religion,
      _tribe,
      _maritalStatus,
      _region,
      _occupation,
      _residence,
    } = patientDemographics;

    try {
      // Convert the date string (dob) to a timestamp
      const timestamp = Date.parse(dob);
      // Check if the conversion to timestamp was successful
      if (isNaN(timestamp)) {
        throw new Error("Invalid date format. Please enter a valid date.");
      }
      const DOB = new BigNumber(timestamp.toString());
const patientID = await addPatient(_patientName, DOB);
      console.log("Patient added successfully with ID:", patientID);

      // Retrieve the patient ID from localStorage and increment it by one
      const NextPatientID = parseInt(localStorage.getItem('patientID'));

      await addPatientDemographics(
        patientID,
        _gender,
        _phoneNumber,
        _educationLevel,
        _country,
        _religion,
        _tribe,
        _maritalStatus,
        _region,
        _occupation,
        _residence
      );

      console.log("Patient demographics added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-75 z-[1000]" />

      <div className="absolute w-1100 h-fit bg-white rounded-md shadow-lg z-[1000] overflow-auto top-10 left-40 right-40 bottom-10">
        <div className="block w-full h-full bg-slate-50 shadow-lg shadow-slate-50 rounded-md">
          <form action="" id="patient-registration" onSubmit={handleSubmit}>
            <div className="space-y-12 px-8">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="flex justify-center items-center">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
                    Patient Information
                  </h2>
                </div>
                <div className="mt-8 w-full">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="first-name" className={label_classes}>
                        First name
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="_patientName"
                          id="patient-name"
                          placeholder="Patient Name"
                          autoComplete="patient-name"
                          value={patient._patientName}
                          onChange={handlePatient}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    {/* <div>
                      <label htmlFor="middle-name" className={label_classes}>
                        Middle name
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="middle-name"
                          id="middle-name"
                          placeholder="Middle Name"
                          autoComplete="middle-name"
                          value={patient._patientName}
                          onChange={handlePatient}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="Last-name" className={label_classes}>
                        Last name
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          placeholder="Last Name"
                          autoComplete="last-name"
                          value={patient._patientName}
                          onChange={handlePatient}
                          className={input_classes}
                        />
                      </div>
                    </div> */}
                  </div>

                  <div className="mt-2 grid lg:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="date-of-birth" className={label_classes}>
                        DOB
                      </label>
                      <div className={margin_top}>
                        <input
                          type="date"
                          name="dob"
                          id="dob"
                          placeholder="Date of Birth"
                          required
                          value={patient.dob}
                          onChange={handlePatient}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="gender" className={label_classes}>
                        Gender
                      </label>
                      <div className={margin_top}>
                        <select
                          id="gender"
                          name="gender"
                          autoComplete="gender"
                          value={patientDemographics._gender}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone-number" className={label_classes}>
                        Phone number
                      </label>
                      <div className={margin_top}>
                        <input
                          type="tel"
                          name="_phoneNumber"
                          id="phone-number"
                          placeholder="Phone Number"
                          autoComplete="tel"
                          value={patientDemographics._phoneNumber}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="Education Level"
                        className={label_classes}
                      >
                        Education Level
                      </label>
                      <div className={margin_top}>
                        <select
                          id="education-level"
                          name="_educationLevel"
                          autoComplete="education"
                          required
                          value={patientDemographics._educationLevel}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option>None</option>
                          <option>Primary Education</option>
                          <option>Ordinary level</option>
                          <option>Advanced level</option>
                          <option>Undergraduate level</option>
                          <option>Postgraduate level</option>
                          <option>PhD level</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="country" className={label_classes}>
                        Country
                      </label>
                      <div className={margin_top}>
                        <select
                          id="country"
                          name="_country"
                          autoComplete="country"
                          value={patientDemographics._country}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option>United States</option>
                          <option>Canada</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="religion" className={label_classes}>
                        Religion
                      </label>
                      <div className={margin_top}>
                        <select
                          id="religion"
                          name="_religion"
                          autoComplete="religion"
                          value={patientDemographics._religion}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option>Christian</option>
                          <option>Muslim</option>
                          <option>Budha</option>
                          <option>Hindu</option>
                          <option>Judaism</option>
                          <option>Traditional</option>
                          <option>Pagan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="tribe" className={label_classes}>
                        Tribe
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="_tribe"
                          id="tribe"
                          placeholder="Tribe"
                          autoComplete="tribe"
                          required
                          value={patientDemographics._tribe}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="marital-status" className={label_classes}>
                        Marital Status
                      </label>
                      <div className={margin_top}>
                        <select
                          id="marital-status"
                          name="marital-status"
                          autoComplete="marital-status"
                          value={patientDemographics._maritalStatus}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option>Single</option>
                          <option>Married</option>
                          <option>Divorced</option>
                          <option>Widowed</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="region" className={label_classes}>
                        Region
                      </label>
                      <div className={margin_top}>
                        <select
                          id="region"
                          name="_region"
                          autoComplete="region"
                          value={patientDemographics._region}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        >
                          <option value="">Select a region</option>
                          <option value="Arusha">Arusha</option>
                          <option value="Dar es Salaam">Dar es Salaam</option>
                          <option value="Dodoma">Dodoma</option>
                          <option value="Geita">Geita</option>
                          <option value="Iringa">Iringa</option>
                          <option value="Kagera">Kagera</option>
                          <option value="Katavi">Katavi</option>
                          <option value="Kigoma">Kigoma</option>
                          <option value="Kilimanjaro">Kilimanjaro</option>
                          <option value="Lindi">Lindi</option>
                          <option value="Manyara">Manyara</option>
                          <option value="Mara">Mara</option>
                          <option value="Mbeya">Mbeya</option>
                          <option value="Morogoro">Morogoro</option>
                          <option value="Mtwara">Mtwara</option>
                          <option value="Mwanza">Mwanza</option>
                          <option value="Njombe">Njombe</option>
                          <option value="Pemba North">Pemba North</option>
                          <option value="Pemba South">Pemba South</option>
                          <option value="Pwani">Pwani</option>
                          <option value="Rukwa">Rukwa</option>
                          <option value="Ruvuma">Ruvuma</option>
                          <option value="Shinyanga">Shinyanga</option>
                          <option value="Simiyu">Simiyu</option>
                          <option value="Singida">Singida</option>
                          <option value="Songwe">Songwe</option>
                          <option value="Tabora">Tabora</option>
                          <option value="Tanga">Tanga</option>
                          <option value="Zanzibar Central/South">
                            Zanzibar Central/South
                          </option>
                          <option value="Zanzibar North">Zanzibar North</option>
                          <option value="Zanzibar Urban/West">
                            Zanzibar Urban/West
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="occupation" className={label_classes}>
                        Occupation
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="_occupation"
                          id="occupation"
                          placeholder="Occupation"
                          autoComplete="occupation"
                          required
                          value={patientDemographics._occupation}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="residence" className={label_classes}>
                        Residence
                      </label>
                      <div className={margin_top}>
                        <input
                          type="text"
                          name="_residence"
                          id="residence"
                          placeholder="Residence"
                          autoComplete="residence"
                          value={patientDemographics._residence}
                          onChange={handlePatientDemographics}
                          className={input_classes}
                        />
                      </div>
                    </div>
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
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default RegisterPatientForm;

// import React, { useState, useEffect } from "react";
// import { init, addPatient, addPatientDemographics } from "../../Web3patient.js";

// const inputClasses =
//   "block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6";

// const labelClasses = "block text-sm font-medium leading-6 text-gray-900";
// const margin_top = "mt-1.5";

// const RegisterPatientForm = (props) => {
//   const [patient, setPatient] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     dob: "",
//   });

//   const [patientDemographics, setPatientDemographics] = useState({
//     gender: "",
//     phoneNumber: "",
//     educationLevel: "",
//     country: "",
//     religion: "",
//     tribe: "",
//     maritalStatus: "",
//     region: "",
//     occupation: "",
//     residence: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     init();
//   }, []);

//   const handlePatientChange = (e) => {
//     setPatient({
//       ...patient,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleDemographicsChange = (e) => {
//     setPatientDemographics({
//       ...patientDemographics,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       await addPatient(patient.firstName, patient.dob);
//       await addPatientDemographics(
//         patientDemographics.gender,
//         patientDemographics.phoneNumber,
//         patientDemographics.educationLevel,
//         patientDemographics.country,
//         patientDemographics.religion,
//         patientDemographics.tribe,
//         patientDemographics.maritalStatus,
//         patientDemographics.region,
//         patientDemographics.occupation,
//         patientDemographics.residence
//       );

//       setLoading(false);
//       props.setVisible(false);
//     } catch (error) {
//       setError("An error occurred while registering the patient.");
//       setLoading(false);
//     }
//   };

//   if (!props.isOpen) return null;

//   return (
//     <>
//       <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-75 z-[1000]" />

//       <div className="absolute w-1100 h-fit bg-white rounded-md shadow-lg z-[1000] overflow-auto top-10 left-40 right-40 bottom-10">
//         <div className="block w-full h-full bg-slate-50 shadow-lg shadow-slate-50 rounded-md">

//           <form
//             action=""
//             id="patient-registration"
//             onSubmit={handleSubmit}
//             className="space-y-12 px-8"
//           >
//             <div className="border-b border-gray-900/10 pb-12">
//               <div className="flex justify-center items-center">
//                 <h2 className="text-base font-semibold leading-7 text-gray-900">
//                   Patient Information
//                 </h2>
//               </div>
//               <div className="mt-8 w-full">
//                 <div className="grid lg:grid-cols-3 gap-6">
//                   <div>
//                     <label htmlFor="first-name" className={labelClasses}>
//                       First name
//                     </label>
//                     <div className="mt-1.5">
//                       <input
//                         type="text"
//                         name="firstName"
//                         id="first-name"
//                         placeholder="First Name"
//                         autoComplete="given-name"
//                         value={patient.firstName}
//                         onChange={handlePatientChange}
//                         className={inputClasses}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="middle-name" className={labelClasses}>
//                       Middle name
//                     </label>
//                     <div className="mt-1.5">
//                       <input
//                         type="text"
//                         name="middleName"
//                         id="middle-name"
//                         placeholder="Middle Name"
//                         autoComplete="middle-name"
//                         value={patient.middleName}
//                         onChange={handlePatientChange}
//                         className={inputClasses}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="Last-name" className={labelClasses}>
//                       Last name
//                     </label>
//                     <div className="mt-1.5">
//                       <input
//                         type="text"
//                         name="lastName"
//                         id="last-name"
//                         placeholder="Last Name"
//                         autoComplete="family-name"
//                         value={patient.lastName}
//                         onChange={handlePatientChange}
//                         className={inputClasses}
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-2 grid lg:grid-cols-3 gap-6">
//                   <div>
//                     <label htmlFor="date-of-birth" className={labelClasses}>
//                       Date of Birth
//                     </label>
//                     <div className="mt-1.5">
//                       <input
//                         type="date"
//                         name="dob"
//                         id="dob"
//                         placeholder="Date of Birth"
//                         required
//                         value={patient.dob}
//                         onChange={handlePatientChange}
//                         className={inputClasses}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="gender" className={labelClasses}>
//                       Gender
//                     </label>
//                     <div className="mt-1.5">
//                       <select
//                         id="gender"
//                         name="gender"
//                         autoComplete="gender"
//                         value={patientDemographics.gender}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                         required
//                       >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="phone-number" className={labelClasses}>
//                       Phone number
//                     </label>
//                     <div className="mt-1.5">
//                       <input
//                         type="tel"
//                         name="phoneNumber"
//                         id="phone-number"
//                         placeholder="Phone Number"
//                         autoComplete="tel"
//                         value={patientDemographics.phoneNumber}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="Education Level" className={labelClasses}>
//                       Education Level
//                     </label>
//                     <div className={margin_top}>
//                       <select
//                         id="education-level"
//                         name="education-level"
//                         autoComplete="education"
//                         required
//                         value={patientDemographics._educationLevel}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       >
//                         <option>None</option>
//                         <option>Primary Education</option>
//                         <option>Ordinary level</option>
//                         <option>Advanced level</option>
//                         <option>Undergraduate level</option>
//                         <option>Postgraduate level</option>
//                         <option>PhD level</option>
//                         <option>Other</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div>
//                     <label htmlFor="country" className={labelClasses}>
//                       Country
//                     </label>
//                     <div className={margin_top}>
//                       <select
//                         id="country"
//                         name="country"
//                         autoComplete="country"
//                         value={patientDemographics._country}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       >
//                         <option>United States</option>
//                         <option>Canada</option>
//                         <option>Mexico</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="religion" className={labelClasses}>
//                       Religion
//                     </label>
//                     <div className={margin_top}>
//                       <select
//                         id="religion"
//                         name="religion"
//                         autoComplete="religion"
//                         value={patientDemographics._country}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       >
//                         <option>Christian</option>
//                         <option>Muslim</option>
//                         <option>Budha</option>
//                         <option>Hindu</option>
//                         <option>Judaism</option>
//                         <option>Traditional</option>
//                         <option>Pagan</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="tribe" className={labelClasses}>
//                       Tribe
//                     </label>
//                     <div className={margin_top}>
//                       <input
//                         type="text"
//                         name="tribe"
//                         id="tribe"
//                         placeholder="Tribe"
//                         autoComplete="tribe"
//                         required
//                         value={patientDemographics._tribe}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="marital-status" className={labelClasses}>
//                       Marital Status
//                     </label>
//                     <div className={margin_top}>
//                       <select
//                         id="marital-status"
//                         name="marital-status"
//                         autoComplete="marital-status"
//                         value={patientDemographics._maritalStatus}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       >
//                         <option>Single</option>
//                         <option>Married</option>
//                         <option>Divorced</option>
//                         <option>Widowed</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="region" className={labelClasses}>
//                       Region
//                     </label>
//                     <div className={margin_top}>
//                       <select
//                         id="region"
//                         name="region"
//                         autoComplete="region"
//                         value={patientDemographics._region}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       >
//                         <option value="">Select a region</option>
//                         <option value="Arusha">Arusha</option>
//                         <option value="Dar es Salaam">Dar es Salaam</option>
//                         <option value="Dodoma">Dodoma</option>
//                         <option value="Geita">Geita</option>
//                         <option value="Iringa">Iringa</option>
//                         <option value="Kagera">Kagera</option>
//                         <option value="Katavi">Katavi</option>
//                         <option value="Kigoma">Kigoma</option>
//                         <option value="Kilimanjaro">Kilimanjaro</option>
//                         <option value="Lindi">Lindi</option>
//                         <option value="Manyara">Manyara</option>
//                         <option value="Mara">Mara</option>
//                         <option value="Mbeya">Mbeya</option>
//                         <option value="Morogoro">Morogoro</option>
//                         <option value="Mtwara">Mtwara</option>
//                         <option value="Mwanza">Mwanza</option>
//                         <option value="Njombe">Njombe</option>
//                         <option value="Pemba North">Pemba North</option>
//                         <option value="Pemba South">Pemba South</option>
//                         <option value="Pwani">Pwani</option>
//                         <option value="Rukwa">Rukwa</option>
//                         <option value="Ruvuma">Ruvuma</option>
//                         <option value="Shinyanga">Shinyanga</option>
//                         <option value="Simiyu">Simiyu</option>
//                         <option value="Singida">Singida</option>
//                         <option value="Songwe">Songwe</option>
//                         <option value="Tabora">Tabora</option>
//                         <option value="Tanga">Tanga</option>
//                         <option value="Zanzibar Central/South">
//                           Zanzibar Central/South
//                         </option>
//                         <option value="Zanzibar North">Zanzibar North</option>
//                         <option value="Zanzibar Urban/West">
//                           Zanzibar Urban/West
//                         </option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="occupation" className={labelClasses}>
//                       Occupation
//                     </label>
//                     <div className={margin_top}>
//                       <input
//                         type="text"
//                         name="occupation"
//                         id="occupation"
//                         placeholder="Occupation"
//                         autoComplete="occupation"
//                         required
//                         value={patientDemographics._occupation}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="residence" className={labelClasses}>
//                       Residence
//                     </label>
//                     <div className={margin_top}>
//                       <input
//                         type="text"
//                         name="residence"
//                         id="residence"
//                         placeholder="Residence"
//                         autoComplete="residence"
//                         value={patientDemographics._residence}
//                         onChange={handleDemographicsChange}
//                         className={inputClasses}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {error && <div className="text-red-600 mt-6">{error}</div>}

//               <div className="mt-6 flex items-center justify-end gap-x-6">
//                 <button
//                   onClick={() => props.setVisible(false)}
//                   type="button"
//                   className="text-sm font-semibold leading-6 text-gray-900"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                 >
//                   {loading ? "Submitting..." : "Submit"}
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RegisterPatientForm;
