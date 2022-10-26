import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { emailLogin, gmailLogin, githubLogin } = useContext(AuthContext);

  const location = useLocation();
  console.log("from", location.state?.from?.pathname);
  const navigate = useNavigate();
  const [err, setErr] = useState({
    email: "",
    pass: "",
    confirmPass: "",
  });

  const [userInfo, setUserInfo] = useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelEmailChange = (e) => {
    console.log(e.target.value);
    const inputEmail = e.target.value;
    if (
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        inputEmail
      )
    ) {
      setErr({ ...err, email: "Please Provide a valid email" });
      return;
    }
    setErr({ ...err, email: "" });
    setEmail(inputEmail);
    setUserInfo({ ...userInfo, email: inputEmail });
  };
  const handelPasswordChange = (e) => {
    const inputPassword = e.target.value;
    setErr({ ...err, pass: "" });
    setPassword(inputPassword);
    setUserInfo({ ...userInfo, password: inputPassword });
  };
  const signInWithEmail = (e) => {
    e.preventDefault();
    const form = e.target;

    emailLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        form.reset();
        navigate(location.state?.from?.pathname);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
      });
  };

  const signInWithGoogle = () => {
    gmailLogin()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(location.state?.from?.pathname);
      })
      .then((error) => {
        console.log(error);
      });
  };

  const signInWithGithub = () => {
    githubLogin()
      .then((res) => {
        const user = res.user;
        navigate(location.state?.from?.pathname);

        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://www.penyourthought.com/wp-content/uploads/2021/06/A-Brief-Insight-Into-TensorFlow-Development-and-Its-Features.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12"></div>
        </section>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mb-4 text-lg font-semibold text-left text-gray-900">
              Log in to your account
            </h1>

            <form className="pb-1 space-y-4" onSubmit={signInWithEmail}>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Email
                </span>
                <input
                  autoComplete="on"
                  className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm px-5 py-2 w-full border rounded"
                  type="email"
                  placeholder="Ex. james@bond.com"
                  onChange={handelEmailChange}
                  required
                />
              </label>
              <label className="block">
                <span className="block mb-1 text-xs font-medium text-gray-700">
                  Your Password
                </span>
                <input
                  autoComplete="on"
                  className="px-5 py-2 w-full border rounded mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  type="password"
                  placeholder="••••••••"
                  onChange={handelPasswordChange}
                  required
                />
              </label>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="block ml-2 text-xs font-medium text-gray-700 cursor-pointer">
                    Remember me
                  </span>
                </label>
              </div>
              <input
                type="submit"
                className="w-full py-3 btn btn-icon bg-indigo-accent-700"
                value="Login"
              />

              {/*  */}
              <div className="pb-6 space-y-2 border-b  border-gray-200">
                <p className=" border-b pt-1 text-center text-xl">
                  <small className="">or</small>
                </p>

                <Link
                  onClick={signInWithGoogle}
                  className="w-full py-3 btn btn-icon btn-google bg-indigo-accent-700 border-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mr-1"
                  >
                    <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                  </svg>
                  Continue with Google
                </Link>
                <Link
                  onClick={signInWithGithub}
                  className="w-full py-3 btn btn-icon bg-indigo-accent-700"
                >
                  <FaGithub className="mr-1" style={{ height: "24px", width: "24px" }} />
                  Continue with Github
                </Link>
              </div>
            </form>
            <div className="my-6 space-y-2">
              <p className="text-xs text-gray-600">
                Don't have an account?
                <Link to="/register" className="text-indigo-accent-700 hover:text-black">
                  Create an account
                </Link>
              </p>
              <Link
                href="#"
                className="block text-xs text-indigo-accent-700 hover:text-black"
              >
                Forgot password?
              </Link>
              <Link
                href="#"
                className="block text-xs text-indigo-accent-700 hover:text-black"
              >
                Privacy & Terms
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
