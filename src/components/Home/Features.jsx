import img8 from "../../assets/Group 8.svg";
import rectangle from "../../assets/Rectangle.svg";
import image24 from "../../assets/image 24.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Work from "./Work";

const Features = () => {
  return (
    <div>
      <div className="text-center pt-[50px] text-2xl text-Blue font-light">
        <h3>Features That Make Us Standout</h3>
      </div>
      <section id="container">
        {/* MANAGE A CARD FOR ALL BUSINESS EXPENSES */}

        <div className="mt-[70px] text-Blue">
          <h1 className=" text-2xl font-medium pb-3">
            Manage A Card For All Business Expenses
          </h1>
          <div className="flex justify-between ">
            <p className="w-[600px]  pb-5 font-normal leading-[1.7rem]">
              Effortlessly track and your business expenses with Flex`s
              dedicated expense management card.
            </p>
            <p className=" font-light">TRACKER</p>
          </div>
          <div className="bg-Blue pl-[50px]">
            <div className="flex ">
              <div className="w-[50%] flex flex-col justify-evenly text-white">
                <div className="mb-[150px]">
                  <h1 className="text-2xl font-normal pt-[60px] pb-[30px]">
                    Customizable Spending Limits
                  </h1>
                  <p className="leading-[1.9rem]">
                    Set personalized spending limits for your Flexa expense
                    card, ensuring that you stay within budget without
                    compromising flexibility.
                  </p>
                </div>
                <Link className="flex items-center text-yellows" to={"#"}>
                  See How <MdArrowOutward className="text-2xl ml-2" />
                </Link>
              </div>
              <div
                id="imgs"
                className="h-[470px] rounded-full w-[500px] mx-auto "
              >
                <img className=" m-auto" src={img8} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* GENERATE A FREE BANK ACCOUNT */}

        <div className="mt-[70px] text-Blue">
          <h1 className=" text-2xl font-medium pb-3">
            Generate A Free Bank Account
          </h1>
          <div className="flex justify-between ">
            <p className="w-[600px] pb-5 font-normal leading-[1.7rem]">
              Unlock the power of hassle-free banking with Flex`s complimentry
              bank account generation future. in just a few clicks, create your
              own free bank account right within the Flexa platform.
            </p>
            <p className=" font-light">BANK ACCOUNT</p>
          </div>
          <div className="bg-Blue pl-[50px]">
            <div className="flex ">
              <div className="w-[50%] flex flex-col justify-evenly text-white">
                <div className="mb-[150px]">
                  <h1 className="text-2xl font-normal pt-[60px] pb-[30px]">
                    Instant And Free Bank Account Creation
                  </h1>
                  <p className="leading-[1.9rem]">
                    Quickly create your own account within Flexa without any
                    associated costs, eliminating the need for traditional
                    banking fees.
                  </p>
                </div>
                <Link className="flex items-center text-yellows" to={"#"}>
                  Learn More <MdArrowOutward className="text-2xl ml-2"/>
                </Link>
              </div>
              <div
                id="imgs"
                className="h-[470px] rounded-full w-[500px] mx-auto "
              >
                <img className="m-auto" src={rectangle} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Flexible Loans */}

        <div className="mt-[70px] mb-[100px] text-Blue">
          <h1 className=" text-2xl font-medium pb-3">
            Flexible Loans
          </h1>
          <div className="flex justify-between ">
            <p className="w-[600px] pb-5 font-normal leading-[1.7rem]">
              At Flexa, we understand that financial needs vary, and flexibility
              is key when it comes to borrowing. That`s why we are proud to
              introduce our Flexible loans feature
            </p>
            <p className="font-light">LOANS</p>
          </div>
          <div className="bg-Blue pl-[50px]">
            <div className="flex ">
              <div className="w-[50%] flex flex-col justify-evenly text-white">
                <div className="mb-[150px]">
                  <h1 className="text-2xl font-normal pt-[60px] pb-[30px]">
                    Instant And Free Bank Account Creation
                  </h1>
                  <p className="w-[500px] leading-[1.9rem]">
                    Say goodbye to lengthly approval processes. Get an instant
                    decision on your loan application, empowering you to make
                    timely financial decisions.
                  </p>
                </div>
                <Link className="flex items-center text-yellows" to={"#"}>
                  Learn More <MdArrowOutward className="text-2xl ml-2"/>
                </Link>
              </div>
              <div
                id="imgs"
                className="h-[450px] rounded-full w-[470px] mx-auto "
              >
                <img className="m-auto" src={image24} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Work />
    </div>
  );
};

export default Features;
