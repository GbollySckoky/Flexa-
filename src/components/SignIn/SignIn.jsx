import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [inputs, setInput] = useState({
    email: "",
    password:""
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setInput((prevState) => {
      return {...prevState, [name]: value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
  }
  return (
    <div>
      <section className="bg-lightblues ">
        <div className=" h-screen flex flex-col justify-center  items-center">
          <div className="text-center text-white">
            <h1 className="sm:text-4xl  md:text-5xl font-medium sm:pb-2 md:pb-3">
              Welcome Back
            </h1>
            <p className="sm:text-2xl md:text-4xl sm:font-extralight font-light  ">
              Sign in to continue with
              <strong className="text-yellows"> Flexa</strong>
            </p>
            <p className="sm:pt-[15px] w-[280px] md:w-full md:pt-[25px] font-normal pb-[20px]">
              <small>
                To sign in, please type in the emial address linked to your
                account
              </small>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="sm:w-[280px] md:w-[450px] bg-transparent p-3 mb-5 rounded-md"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="sm:w-[280px] md:w-[450px] bg-transparent p-3 mb-4 rounded-md"
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="text-center text-yellows text-[15px] font-extralight sm:mb-5 mb-8">
              <Link to={"#"}>
                Forgot Password? <span className="text-white">Reset it</span>
              </Link>
            </div>
            <div className="bg-white text-Blue text-center w-3/5 mx-auto rounded-md py-3 mb-4">
              <button>Get Started</button>
            </div>
          </form>
          <div className="flex items-center text-white">
            <p className="font-thin">
              {" "}
              <small>Don`t Have An Account?</small>
            </p>
            <Link className="font-light text-sm" to={"/create"}>
              Sign Up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
