import svg from "../../assets/image 20.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div className="fixed w-full bg-dark">
      <main className="flex justify-between items-center h-[80px] text-white">
        <div>
          <Link className="flex items-center" to={"/"}>
            <img src={svg} alt="" />
            <h1 className="text-3xl font-medium pl-2">Flexa</h1>
          </Link>
        </div>
        <nav className="">
          <ul className="flex">
            <li>
              <Link className="ml-[45px]" to={"#"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="ml-[45px]" to={"#"}>
                How it Works
              </Link>
            </li>
            <li>
              <Link className="ml-[45px]" to={"#"}>
                Security
              </Link>
            </li>
            <li>
              <Link className="ml-[45px]" to={"#"}>
                FAQs
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link className="px-9 py-[13px]" to={"/sign-in"}>
            Sign in
          </Link>
          <Link
            to={"/create"}
            className="px-9  bg-white text-dark py-[13px] rounded-lg"
          >
            Sign up
          </Link>
        </div>

        <div>
          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
