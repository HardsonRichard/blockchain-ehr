import Web3 from "web3";

let patientContract;

let selectedAccount;

export const init = async () => {
  const PatientContract = require("./truffle/build/contracts/PatientContract.json");
  let provider = window.ethereum;
  if (typeof provider !== "undefined") {
    provider
      .request({ method: "eth_requestAccounts" })
      .then((accounts) => {
        selectedAccount = accounts[0];
        console.log(`Selected account is ${selectedAccount}`);
      })
      .catch((err) => {
        console.log(err);
      });
    window.ethereum.on("accountschanged", function (accounts) {
      selectedAccount = accounts[0];
      console.log(`Selected account changed to ${selectedAccount}`);
    });
  }
  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId();

  patientContract = new web3.eth.Contract(
    PatientContract.abi,
    PatientContract.networks[networkId].address
  );
};

// export const addPatient = (_patientName, dob) => {
//   return patientContract.methods
//     .addPatient(_patientName, dob)
//     .send({ from: selectedAccount });
// };

export const addPatient = async (_patientName, dob) => {
  try {
    const receipt = await patientContract.methods
      .addPatient(_patientName, dob)
      .send({ from: selectedAccount });
    const patientID = receipt.events.PatientAdded.returnValues._patientID;
    localStorage.setItem("patientID", patientID);
    return patientID;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addPatientDemographics = (
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
) => {
  return patientContract.methods
    .addPatientDemographics(
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
    )
    .send({ from: selectedAccount });
};

// export const addPatientDemographics = async (
//     _gender,
//     _phoneNumber,
//     _educationLevel,
//     _country,
//     _religion,
//     _tribe,
//     _maritalStatus,
//     _region,
//     _occupation,
//     _residence
//   ) => {
//     try {
//       // Retrieve the patient ID from localStorage
//       const patientId = parseInt(localStorage.getItem("patientId"));
//       if (!patientId || isNaN(patientId)) {
//         throw new Error("Patient ID not found in localStorage.");
//       }

//       await patientContract.methods.addPatientDemographics(
//         _gender,
//         _phoneNumber,
//         _educationLevel,
//         _country,
//         _religion,
//         _tribe,
//         _maritalStatus,
//         _region,
//         _occupation,
//         _residence
//       ).send({ from: selectedAccount });

//       console.log("Patient demographics added successfully");
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   };

export const getPatient = (_patientId) => {
  return patientContract.methods.getPatient(_patientId).call();
};

export const addAppointment = (_doctorID, _patientID) => {
  return patientContract.methods
    .addAppointment(_doctorID, _patientID)
    .send({ from: selectedAccount });
};

export const addPatientRecord = (
  _patientID,
  _appointmentID,
  _symptoms,
  _diagnosis,
  _test,
  _prescription,
  _medication
) => {
  return patientContract.methods
    .addPatientRecord(
      _patientID,
      _appointmentID,
      _symptoms,
      _diagnosis,
      _test,
      _prescription,
      _medication
    )
    .send({ from: selectedAccount });
};
