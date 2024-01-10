import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <section className="bg-Blue h-screen">
        <div className=" h-screen bg-red-600 flex flex-col justify-center  items-center">
        <div className="text-center">
          <h1 className="text-4xl font-medium">Welcome Back</h1>
          <p className="text-2xl font-normal tracking-wider">Sign in to continue with Flexa</p>
          <p className="pt-[25px] text-xs pb-[15px]">To sign in, please type in the emial address linked to your account</p>
        </div>
        <form>
          <div>
            <input type="email" placeholder="Email Address" className="w-[400px]"/>
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <div>
            <Link to={"#"}>Forgot Password?</Link>
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </form>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
