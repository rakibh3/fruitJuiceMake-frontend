import toast from "react-hot-toast";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { handleError } from "../../error/errorHandler";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import usePublicAxios from "../../hooks/useAxiosPublic";

const Signup = () => {
  const publicAxios = usePublicAxios();
  const navigate = useNavigate();
  const { createUserWithCredential, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    try {
      // Create user with email and password
      await createUserWithCredential(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`Sign Up`, user);
          if (user) {
            // Update user profile
            updateUserProfile(name);

            // Create user in the database
            publicAxios
              .post("/user", {
                displayName: name,
                email: user.email,
                photoURL: user.photoURL || null,
              })
              .then((response) => {
                const token = response?.data?.data.token;
                localStorage.setItem("accessToken", token);
              })
              .catch((error) => {
                handleError(error);
              });

            // Reset form
            reset();

            // Redirect to home page
            navigate("/");

            // Show success message
            toast.success("Account created successfully");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(`Error creating account: ${errorCode}`);
        });
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error(`Error creating account: ${error.message}`);
    }
  };

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <FaRegUser className="m-2 text-gray-400" />
                      <input
                        type="text"
                        {...register("name", {
                          required: true,
                          pattern: /^[A-Za-z\s]+$/,
                        })}
                        placeholder="Name"
                        className="w-full bg-gray-100 py-3 pl-1 text-sm outline-none"
                      />
                    </div>
                    {errors?.name && (
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Name is required & contain only letters!
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="max-w-sx mb-6 flex w-full items-center rounded-lg bg-gray-100 p-1">
                      <FaRegEnvelope className="m-2 text-gray-400" />
                      <input
                        type="email"
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
                      <p className="mb-3 ml-1 mt-[-1.25rem] text-start text-xs text-red-500">
                        Password is required and must be at least 8 characters
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full max-w-xs rounded-lg bg-primary/80 p-3 text-center font-semibold text-white hover:bg-primary/90"
                  >
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
