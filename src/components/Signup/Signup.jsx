import { Link } from "react-router-dom";
import img from "../../assets/image 20.svg";
import { useState } from "react";
const Signup = () => {
  const [] = useState({});

  return (
    <div>
      <main className="bg-lightBlue">
        <div>
          <Link className="flex items-center" to={"/"}>
            <img src={img} alt="" />
            <h1>Flexa</h1>
          </Link>
        </div>
        <section className="bg-white  w-[30%] m-auto rounded-xl">
          <div className="text-center py-[30px] ">
            <h5 className="py-[10px]  text-Blue">Create A New Account</h5>
            <p className="text-lightBlue font-extralight">
              Welcome To The Future Of Finance
            </p>
          </div>
          {/* CREATE ACCOUNT */}
          <form className="px-[30px]">
            <div className="flex flex-col">
              <label htmlFor="Full Name" className="text-lightblues font-thin pb-2 text-sm">
                Full Name
              </label>
              <input type="text" placeholder="Full Nmae" className="p-3" />
            </div>

            <div className="flex flex-col py-[20px]">
              <label htmlFor="Email" className="text-lightblues font-thin pb-2 text-sm">
                Email Address
              </label>
              <input type="Email" placeholder="Email Address" className="p-3" />
            </div>

            <div className="flex flex-col py-[20px]">
              <label htmlFor="Phone Number" className="text-lightblues font-thin pb-2 text-sm">
                Phone Number
              </label>
              <input type="tel" placeholder="Phone Number" className="p-3" />
            </div>

            <div className="flex flex-col py-[20px]">
              <label htmlFor="Password" className="text-lightblues font-thin pb-2 text-sm">
                Password
              </label>
              <input type="Password" placeholder="Password" className="p-3" />
            </div>

            <div className="flex flex-col py-[20px]">
              <label htmlFor="About Us" className="text-lightblues font-thin pb-2 text-sm">
                How Did You Hear About US?
              </label>
              <input
                type="text"
                placeholder="How Did You Hear About Us?"
                className="p-3"
              />
            </div>

            <button className="bg-Blue text-white px-[65px] py-3 rounded-lg">
              Get Started
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signup;
