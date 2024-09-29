import { useForm } from "react-hook-form";
import { FaRegEnvelope } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const { signInWithCredential } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    // Sign in user with email and password
    signInWithCredential(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          reset();
          navigate("/");
          toast.success("Sign in successful");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(`Error signing in: ${errorCode}`);
      });
  };

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <div className="flex w-full max-w-4xl flex-col rounded-2xl bg-white shadow-lg md:flex-row">
          {/* Sign In */}
          <div className="w-full p-5 md:w-3/5">
            <div className="py-10">
              <h2 className="mb-1 text-2xl font-bold tracking-wide text-primary/80 sm:text-3xl">
                Hi, Welcome Back!
              </h2>
              <div className="mb-3 inline-block w-10 border-2 border-primary/80"></div>
              {/* Sign In form */}
              <div className="flex flex-col items-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <FaRegEnvelope className="m-2 text-gray-400" />
                      <input
                        type="text"
                        {...register("email", {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })}
                        placeholder="Email"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>
                    {errors?.email && (
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Email is required or invalid
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <TbPassword className="m-2 text-gray-400" />
                      <input
                        type="password"
                        {...register("password", {
                          required: true,
                          minLength: 8,
                        })}
                        placeholder="Password"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>
                    {errors?.password && (
                      <p className="mb-1 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Password is required and must be at least 8 character
                      </p>
                    )}
                    <p className="mb-5 flex w-full max-w-xs justify-end">
                      <Link to="#" className="text-xs">
                        Forgot Password?
                      </Link>
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full max-w-xs rounded-lg bg-primary/80 p-3 text-center font-semibold text-white hover:bg-primary/90"
                  >
                    Sign in
                  </button>
                </form>
                <p className="mt-2 text-center text-xs sm:px-6 dark:text-gray-600">
                  Don&apos;t have an account?
                  <Link
                    rel="noopener noreferrer"
                    to="/signup"
                    className="ml-1 font-semibold no-underline dark:text-gray-800"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Sign Up */}
          <div className="hidden w-2/5 md:flex">
            <div className="rounded-br-2xl rounded-tr-2xl bg-primary/80 px-12 py-36 text-white">
              <h2 className="mb-2 text-3xl font-bold">Hello </h2>
              <div className="mb-2 inline-block w-12 border-2 border-white"></div>
              <p className="mb-4">
                Fill up personal information and start journey with us
              </p>
              <Link
                to="/signup"
                className="inline-block rounded-full border-2 border-white px-12 py-2 font-semibold hover:bg-white hover:text-primary/80"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
