import { Link } from "react-router-dom";
import img from "../../assets/image 20.svg";
import { useState } from "react";
const Signup = () => {
  const [users, setUsers] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    aboutUs: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(users);
    let message
    if (users.password === ''){
      alert('Please select')
    }
  };

  return (
    <div>
      <main className="bg-Blue pt-[30px] sm:pb-[60px] md:h-[130vh] xl:h-[130vh]">
        <div>
          <Link className="flex items-center justify-center py-[35px]" to={"/"}>
            <img src={img} alt="" />
            <h1 className="text-3xl font-bold text-white pl-2">Flexa</h1>
          </Link>
        </div>
        <section className="bg-white sm:w-[330px] md:w-[500px] m-auto rounded-xl">
          <div className="text-center py-[30px] ">
            <h5 className="py-[10px]  text-Blue">Create A New Account</h5>
            <p className="text-lightBlue font-extralight">
              Welcome To The Future Of Finance
            </p>
          </div>
          {/* CREATE ACCOUNT */}
          <form className="px-[30px] pb-[50px]" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="Full Name"
                className="text-lightblues font-thin pb-2 text-sm"
              >
                Full Name
              </label>
              <input
                type="text"
                id="Full Name"
                placeholder="Full Nmae"
                className="p-3"
                autoComplete="Given Name"
                onChange={handleChange}
                name="fullName"
                required
                value={users.fullName}
              />
            </div>
            <div className="flex flex-col py-[10px]">
              <label
                htmlFor="Email"
                className="text-lightblues font-thin pb-2 text-sm"
              >
                Email Address
              </label>
              <input
                type="email"
                id="Email"
                placeholder="Email Address"
                className="p-3"
                autoComplete="off"
                onChange={handleChange}
                name="email"
                required
                value={users.email}
              />
            </div>

            <div className="flex flex-col py-[10px]">
              <label
                htmlFor="Phone Number"
                className="text-lightblues font-thin pb-2 text-sm"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="Phone Number"
                placeholder="Phone Number"
                className="p-3"
                autoComplete="number"
                onChange={handleChange}
                name="phoneNumber"
                required
                value={users.phoneNumber}
              />
            </div>

            <div className="flex flex-col py-[10px]">
              <label
                htmlFor="Password"
                className="text-lightblues font-thin pb-2 text-sm"
              >
                Password
              </label>
              <input
                type="Password"
                id="Password"
                placeholder="Password"
                className="p-3"
                autoComplete="off"
                onChange={handleChange}
                name="password"
                required
                value={users.password}
              />
            </div>
            <div className="flex flex-col py-[10px]">
              <label
                htmlFor="About Us"
                className="text-lightblues font-thin pb-2 text-sm"
              >
                How Did You Hear About US?
              </label>
              <select
                id="About Us"
                className="p-3"
                onChange={handleChange}
                name="aboutUs"
                required
                value={users.aboutUs}
              >
                <option value="How did you hear from us">
                  How did you hear from us
                </option>
                <option value="From A Friend">From A Friend</option>
                <option value="instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="Facebook">Facebook</option>
                <option value="linkdein">Linkdein</option>
              </select>
            </div>
            <button
              id="btn"
              className="bg-Blue text-white  md:px-[65px] py-3 block w-[70%] mx-auto rounded-lg my-[30px]"
            >
              Get Started
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Signup;
