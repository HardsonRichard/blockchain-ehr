import React, { useState } from "react";

const AddTestResult = ({ patientName, testType, onAddTestResults }) => {
  const [testResults, setTestResults] = useState("");

  const handleTestResultsChange = (event) => {
    setTestResults(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the test results to the parent component
    onAddTestResults(patientName, testType, testResults);
    // Reset the form
    setTestResults("");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg p-4 border border-gray-300">
        <h3 className="text-md font-semibold text-blue-500 mb-4 text-centre">
          ADD TEST RESULTS
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="patientName"
              className="block text-sm font-medium text-gray-700"
            >
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="testType"
              className="block text-sm font-medium text-gray-700"
            >
              Test Type
            </label>
            <input
              type="text"
              id="testType"
              value={testType}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="testResults"
              className="block text-sm font-medium text-gray-700"
            >
              Test Results
            </label>
            <textarea
              id="testResults"
              value={testResults}
              onChange={handleTestResultsChange}
              rows={5}
              className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add Test Results
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTestResult;
