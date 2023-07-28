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
    <div className="my-4">
      <h3 className="text-lg font-medium">Add Test Results</h3>
      <form onSubmit={handleSubmit} className="mt-2">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="testResults" className="block text-sm font-medium text-gray-700">
              Patient Name
            </label>
            <input
              type="text"
              id="patientName"
              value={patientName}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="testResults" className="block text-sm font-medium text-gray-700">
              Test Type
            </label>
            <input
              type="text"
              id="testType"
              value={testType}
              disabled
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="testResults" className="block text-sm font-medium text-gray-700">
            Test Results
          </label>
          <textarea
            id="testResults"
            value={testResults}
            onChange={handleTestResultsChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add Test Results
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTestResult;

