import svg from "../../assets/image 20.svg";
import { Link } from "react-router-dom";
const Header = () => {

  const [toggle, setToggle] = useState(false)
  return (
    <div>
      <main className="flex justify-around items-center bg-dark h-[80px]  text-white fixed w-full  z-[30]">
        <div>
          <Link className="flex items-center" to={"/"}>
            <img src={svg} alt="" />
            <h1 className="text-3xl font-medium pl-2">Flexa</h1>
          </Link>
        </div>
        <nav className="">
          <ul className="flex sm:hidden md:static">
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
          <Link className="px-5" to={"/sign-in"}>
            Sign in
          </Link>
          <Link
            to={"/create"}
            className="px-5  bg-white text-dark py-[19px] rounded-xl"
          >
            Create New Account
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
