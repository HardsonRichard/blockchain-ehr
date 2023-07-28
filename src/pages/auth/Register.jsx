import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext, { useAuth } from "../../contexts/AuthContext";

function Register() {
  const { credentials, register, setCredentials, handleSubmit } =
    useAuth();

  return (
    <div className="flex min-h-full flex-col justify-center items-center px-6 py-10 lg:px-8 w-full">
      <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register
      </h2>

      <div className="mt-10 sm:mx-auto sm:max-w-sm sm:w-full">
        <form onSubmit={handleSubmit} action="#" className="space-y-2 w-full">
          <div className="mt-2">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <input
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
              id="username"
              name="username"
              type="text"
              placeholder="John Harry Doe"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Role
            </label>
            <div className="mt-2">
              <select
                onChange={(e) =>
                  setCredentials({ ...credentials, role: e.target.value })
                }
                id="role"
                name="role"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              >
                <option value="">Select Role</option>
                <option value="0">Receptionist</option>
                <option value="1">Nurse</option>
                <option value="2">Doctor</option>
                <option value="3">Laboratory Technician</option>
                <option value="4">Pharmacist</option>
                <option value="5">Admin</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="youremail@gmail.com"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    confirmPassword: e.target.value,
                  })
                }
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="********"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              onClick={register}
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
        </form>

        <button className="mt-10 text-center text-sm px-12 text-gray-500">
          Already have an account?
          <Link to="/login">
            {" "}
            <span className="font-semibold leading-6 text-blue-700 hover:text-blue-500 text-decoration-underline">
              Login here
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Register;
