import svg from "../../assets/image 20.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <main className="flex justify-around items-center bg-dark py-[13px] text-white">
        <div className="flex items-center">
          <img src={svg} alt="" />
          <h1 className="text-3xl font-medium pl-2">Flexa</h1>
        </div>
        <nav>
          <ul className="flex">
            <li>
              <Link className="ml-[45px]" to={"/"}>
                Home
              </Link>
            </li>
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
          <Link className="px-5" to={"#"}>
            Sign in
          </Link>
          <Link
            to={"/create"}
            className="px-5  bg-white text-dark py-[19px] rounded-xl"
          >
            Create New Account
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
