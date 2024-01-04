import { Link } from "react-router-dom";
import logo from "../../assets/image 20.svg";
import twitter from "../../assets/pajamas_twitter.svg"
import ig from "../../assets/openmoji_instagram.svg"
import behance  from "../../assets/uil_behance.svg"
import linkden from "../../assets/ri_linkedin-fill.svg"
const Footer = () => {
  return (
    <section id="container" className="bg-Blue ">
      <div  className="flex justify-between pt-[80px] pb-[20px]">
        <div className=" flex items-start ">
          <img src={logo} alt="" />
          <h1>Flexa</h1>
        </div>
        {/* PRODUCT */}
        <nav>
          <ul>
            <li>
              <Link to={"#"}>Products</Link>
            </li>
            <li>
              <Link to={"#"}>Invest</Link>
            </li>
            <li>
              <Link to={"#"}>Loans</Link>
            </li>
            <li>
              <Link to={"#"}>Flexfinance</Link>
            </li>
            <li>
              <Link to={"#"}>Target Savings</Link>
            </li>
          </ul>
        </nav>

        {/* COMPANY */}
        <ul>
          <li>
            <Link to={"#"}>Company</Link>
          </li>
          <li>
            <Link to={"#"}>Invest</Link>
          </li>
          <li>
            <Link to={"#"}>Loans</Link>
          </li>
          <li>
            <Link to={"#"}>Flexfinance</Link>
          </li>
          <li>
            <Link to={"#"}>Target Savings</Link>
          </li>
        </ul>

        {/* LEGAL */}
        <ul>
          <li>
            <Link to={"#"}>Legal</Link>
          </li>
          <li>
            <Link to={"#"}>Invest</Link>
          </li>
          <li>
            <Link to={"#"}>Loans</Link>
          </li>
          <li>
            <Link to={"#"}>Flexfinance</Link>
          </li>
          <li>
            <Link to={"#"}>Target Savings</Link>
          </li>
        </ul>
      </div>

      {/* MEDIAS */}
      <div className=" flex pb-[80px]">
        <img src={twitter} alt="" className="bg-grey rounded-full p-2 ml-2"/>
        <img src={ig} alt="" className="bg-grey rounded-full p-2 ml-2"/>
        <img src={behance} alt="" className="bg-grey rounded-full p-2 ml-2"/>
        <img src={linkden} alt="" className="bg-grey rounded-full p-2 ml-2"/>
      </div>
      <hr />
    </section>
  );
};

export default Footer;
