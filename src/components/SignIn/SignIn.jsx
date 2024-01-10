import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <section className="bg-Blue ">
        <div className=" h-screen flex flex-col justify-center  items-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-medium pb-3">Welcome Back</h1>
            <p className="text-4xl font-light  ">
              Sign in to continue with{" "}
              <strong className="text-yellows">Flexa</strong>
            </p>
            <p className="pt-[25px] font-thin pb-[20px]">
              <small>
                To sign in, please type in the emial address linked to your
                account
              </small>{" "}
            </p>
          </div>
          <form>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-[450px] bg-transparent p-3 mb-5 rounded-md"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-[450px] bg-transparent p-3 mb-4 rounded-md"
              />
            </div>
            <div className="text-center text-yellows text-[15px] font-extralight mb-8">
              <Link to={"#"}>Forgot Password?</Link>
            </div>
            <div className="bg-white text-center w-3/5 mx-auto rounded-md py-3 mb-4 text-lightblues">
              <button>Get Started</button>
            </div>
          </form>
          <div className="flex items-center text-white">
            <p className="font-thin"> <small>Don`t Have An Account?</small></p>
            <Link className="font-light text-sm" to={"/create"}>Sign Up</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
