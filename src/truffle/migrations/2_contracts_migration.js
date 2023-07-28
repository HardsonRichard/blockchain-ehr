const UserContract = artifacts.require("UserContract");
const PatientContract = artifacts.require("PatientContract");

module.exports = function (deployer) {
  deployer.deploy(UserContract).then(() => {
    return deployer.deploy(PatientContract, UserContract.address);
  });
};
