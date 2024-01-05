import { Link } from "react-router-dom";
import logo from "../../assets/image 20.svg";
import twitter from "../../assets/pajamas_twitter.svg";
import ig from "../../assets/openmoji_instagram.svg";
import behance from "../../assets/uil_behance.svg";
import linkden from "../../assets/ri_linkedin-fill.svg";
const Footer = () => {
  return (
    <section className="bg-Blue text-white py-[80px]">
      <div id="container">
        <div className="flex justify-between">
          <div className=" flex items-start ">
            <img src={logo} alt="" />
            <h1>Flexa</h1>
          </div>
          {/* PRODUCT */}
          <nav>
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
          <ul>
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
          <ul>
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
        <div className=" flex pb-[80px]">
          <img src={twitter} alt="" className="bg-grey rounded-full p-2 ml-2 cursor-pointer" />
          <img src={ig} alt="" className="bg-grey rounded-full p-2 ml-2 cursor-pointer" />
          <img src={behance} alt="" className="bg-grey rounded-full p-2 ml-2 cursor-pointer" />
          <img src={linkden} alt="" className="bg-grey rounded-full p-2 ml-2 cursor-pointer" />
        </div>
      </div>
      <hr />
      <div id="container" className="flex ">
      <div  className="pt-[80px] w-[50%] leading-[1.9rem]">
          <p className="pb-[35px]">
            Flexa, your premier financial companion, is the forefront online
            savings and investing platform in Nigeria. Over the past 1 years,
            our community has preserved and invested billions of Naira,
            redirecting funds that might have been impulsively spent.
          </p>
          <p className="pb-[35px]">
            Flexa Capital Management, a licensed fund manager approved by the
            Securities and Exchange Commission (SEC) of Nigeria?
          </p>
          <p className="text-yellows">
            2022 - 2023 Flexa Global Limited - RC 1005223
          </p>
        </div>
        <div>
          
        </div>
      </div>
        
    </section>
  );
};

export default Footer;
