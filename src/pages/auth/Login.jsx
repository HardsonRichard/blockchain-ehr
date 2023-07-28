import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext, { useAuth } from "../../contexts/AuthContext";


function Login(props) {
  const { loginInput, setLoginInput, login, handleSubmit, UserContract } = useAuth();
  // const [loginResult, setLoginResult] = useState("");

  /*const handleLogin = () => {
    // Perform authentication logic, e.g., API call
    // If authentication is successful, set isAuthenticated to true
    setIsAuthenticated(true);

    history.push('/dashboard');

  }*/

  // const handleLogin = async () => {
  //   try {
  //     if (userContract) {
  //       // Call the login function from the contract
  //       const result = await userContract.methods.login(email, password).call();

  //       // Handle the login result
  //       if (result) {
  //         setLoginResult("Login successful");
  //       } else {
  //         setLoginResult("Invalid credentials");
  //       }
  //     } else {
  //       console.error("User contract not available");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     setLoginResult("Error occurred");
  //   }
  // };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Login
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setLoginInput({ ...loginInput, email: e.target.value })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="youremail@gmail.com"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-blue-600 hover:text-blue-500 focus:text-blue-500"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  setLoginInput({ ...loginInput, password: e.target.value })
                }
                id="password"
                name="password"
                type="password"
                placeholder="********"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus:bg-blue-700 focus:outline-none"
              onClick={login}
            >
              Sign in
            </button>
          </div>
        </form>

        <button className="mt-10 text-center text-sm px-12 text-gray-500">
          Don't have an account,
          <Link to="/register">
            {" "}
            <span className="font-semibold leading-6 text-blue-700 hover:text-blue-500 text-decoration-underline">
              Register here
            </span>
          </Link>
        </button>
        {/* <p>{loginResult}</p> */}
      </div>
    </div>
  );
}

export default Login;
