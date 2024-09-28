import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-4 text-center">
        <div className="flex w-full max-w-4xl flex-col rounded-2xl bg-white shadow-lg md:flex-row">
          {/* Sign In */}

          <div className="hidden w-2/5 md:flex">
            <div className="rounded-bl-2xl rounded-tl-2xl bg-primary/80 px-12 py-36 text-white">
              <h2 className="mb-1 text-2xl font-bold tracking-wide">
                Welcome Back
              </h2>
              <div className="mb-2 inline-block w-16 border-2 border-white"></div>
              <p className="mb-4">
                Fill up personal information and start journey with us
              </p>
              <Link
                to="/signin"
                className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-primary/80"
              >
                Sign in
              </Link>
            </div>
          </div>

          {/* Sign Up */}

          <div className="w-full p-5 md:w-3/5">
            <div className="py-10">
              <h2 className="mb-1 text-2xl font-medium tracking-wide text-primary/80 sm:text-3xl">
                Create an account
              </h2>
              <div className="mb-3 inline-block w-16 border-2 border-primary/80"></div>
              {/* Sign up form */}
              <div className="flex flex-col items-center">
                <form action="">
                  <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                    <FaRegUser className="m-2 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                    />
                  </div>

                  <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                    <FaRegEnvelope className="m-2 text-gray-400" />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                    />
                  </div>

                  <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                    <TbPassword className="m-2 text-gray-400" />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                    />
                  </div>

                  <button className="block w-full max-w-xs rounded-lg bg-primary/80 p-3 text-center font-semibold text-white hover:bg-primary/90">
                    Sign up
                  </button>
                </form>
                <p className="mt-2 text-center text-xs sm:px-6 dark:text-gray-600">
                  Already have an account?
                  <Link
                    rel="noopener noreferrer"
                    to="/signin"
                    className="ml-1 font-semibold no-underline dark:text-gray-800"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
