import React from 'react';
import ReactDOM from 'react-dom';

const input_classes =
  "block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6";
const margin_top = "mt-1.5";
const label_classes = "block text-sm font-medium leading-6 text-gray-900";

function UpdatePatientForm(props) {
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-neutral-900 bg-opacity-75 z-[1000]" />

      <div className="absolute w-1100 h-fit bg-white rounded-md shadow-lg z-[1000] overflow-auto top-10 left-40 right-40 bottom-10">
        <div className="block w-full h-full bg-slate-50 shadow-lg shadow-slate-50 rounded-md">
          <form action="" id="patient-update">
            <div className="space-y-12 px-8 py-4">
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
                          name="first-name"
                          id="first-name"
                          placeholder="First Name"
                          autoComplete="given-name"
                          className={input_classes}
                        />
                      </div>
                    </div>

                    <div>
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
                          className={input_classes}
                        />
                      </div>
                    </div>
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
                          name="phone-number"
                          id="phone-number"
                          placeholder="Phone Number"
                          autoComplete="tel"
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
                          name="education-level"
                          autoComplete="education"
                          required
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
                          name="country"
                          autoComplete="country"
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
                          name="religion"
                          autoComplete="religion"
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
                          name="tribe"
                          id="tribe"
                          placeholder="Tribe"
                          autoComplete="tribe"
                          required
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
                          name="region"
                          autoComplete="region"
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
                          name="occupation"
                          id="occupation"
                          placeholder="Occupation"
                          autoComplete="occupation"
                          required
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
                          name="residence"
                          id="residence"
                          placeholder="Residence"
                          autoComplete="residence"
                          className={input_classes}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                  <button
                    onClick={() => props.setIsOpen(false)}
                    type="button"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Update
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

export default UpdatePatientForm;