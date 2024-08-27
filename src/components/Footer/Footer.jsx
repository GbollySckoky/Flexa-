import { Link } from "react-router-dom";
import logo from "../../assets/image 20.svg";
import twitter from "../../assets/pajamas_twitter.svg";
import ig from "../../assets/openmoji_instagram.svg";
import behance from "../../assets/uil_behance.svg";
import linkden from "../../assets/ri_linkedin-fill.svg";
import playStore from "../../assets/Group 33.svg";
import appleStore from "../../assets/Group 34.svg";

const Footer = () => {
  return (
    <section className="bg-lightblues text-white lg:py-[80px] py-[30px]">
      <div id="container">
        <div className="lg:flex justify-between hidden">
          <div className=" flex items-start text-4xl">
            <img src={logo} alt="logo" />
            <h1 className="font-medium pl-4">Flexa</h1>
          </div>
          {/* PRODUCT */}
          <nav className="hidden lg:block">
            <ul>
              <li className="pb-3 text-yellows">
                <Link to={"#"}>Products</Link>
              </li>
              <li className="pb-3">
                <Link to={"#"}>Invest</Link>
              </li>
              <li className="pb-3">
                <Link to={"#"}>Loans</Link>
              </li>
              <li className="pb-3">
                <Link to={"#"}>Flexfinance</Link>
              </li>
              <li className="pb-3">
                <Link to={"#"}>Target Savings</Link>
              </li>
            </ul>
          </nav>

          {/* COMPANY */}
          <ul className="hidden lg:block">
            <li className="pb-3 text-yellows">
              <Link to={"#"}>Company</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Invest</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Loans</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Flexfinance</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Target Savings</Link>
            </li>
          </ul>

          {/* LEGAL */}
          <ul className="hidden lg:block">
            <li className="pb-3 text-yellows">
              <Link to={"#"}>Legal</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Invest</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Loans</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Flexfinance</Link>
            </li>
            <li className="pb-3">
              <Link to={"#"}>Target Savings</Link>
            </li>
          </ul>
        </div>

        {/* MEDIAS */}
        <div className=" lg:flex pb-[80px] hidden">
          <img
            src={twitter}
            alt=""
            className="bg-grey text-lightblues rounded-full p-2 ml-2 cursor-pointer"
          />
          <img
            src={ig}
            alt=""
            className="bg-grey text-lightblues rounded-full p-2 ml-2 cursor-pointer"
          />
          <img
            src={behance}
            alt=""
            className="bg-grey text-lightblues rounded-full p-2 ml-2 cursor-pointer"
          />
          <img
            src={linkden}
            alt=""
            className="bg-grey text-lightblues rounded-full p-2 ml-2 cursor-pointer"
          />
        </div>
      </div>

      <hr className="hidden lg:block"/>

      <div id="container" className="lg:flex justify-between">
        <div className="lg:pt-[80px] lg:w-[50%] leading-[1.9rem]">
          <p className="pb-[35px] font-extralight lg:font-medium">
            Flexa, your premier financial companion, is the forefront online
            savings and investing platform in Nigeria. Over the past 1 years,
            our community has preserved and invested billions of Naira,
            redirecting funds that might have been impulsively spent.
          </p>
          <p className="pb-[35px] font-extralight lg:font-medium">
            Flexa Capital Management, a licensed fund manager approved by the
            Securities and Exchange Commission (SEC) of Nigeria?
          </p>
          <p className="text-yellows font-extralight lg:font-medium">
            2022 - 2023 Flexa Global Limited - RC 1005223
          </p>
        </div>
        <div className="lg:flex hidden items-end pt-[30px] lg:pt-0 ">
          <img
            src={playStore}
            alt=""
            className="bg-white text-lightblues px-5 py-2 rounded-md cursor-pointer"
          />
          <img
            src={appleStore}
            alt=""
            className="bg-white text-lightblues ml-6 px-5 py-2 rounded-md cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;
