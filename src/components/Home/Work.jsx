import { FaRegUser } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { FiLock } from "react-icons/fi";

const Work = () => {
  return (
    <section className="bg-Blue mt-[60px] ">
      <div id="container" className="py-[80px] ">
        <div className="text-white">
          <p className="pb-2">How Flexa Works</p>
          <p className="pb-5 text-3xl font-medium">Step-By-Step Process</p>
        </div>
        <section className="grid grid-cols-3 gap-3">

          {/* CREATE YOUR FLEXA ACCOUNT */}

          <div className="bg-lightBlue text-white px-[30px] pt-[40px] pb-[80px]">
            <FaRegUser className="py-5 text-7xl bg-white text-yellows rounded-full" />
            <h1 className="py-[20px]">Create Your Flexa Account </h1>
            <p>
              Begin your journey by creating a Flexa account. Simply sign up
              with your email, create a secure password, and you`re ready to go.
            </p>
          </div>

          {/* MANAGE YOUR WALLET */}

          <div className="bg-lightBlue text-white px-[30px] pt-[40px] pb-[80px]">
            <CiWallet className="py-5 text-7xl  bg-white text-yellows rounded-full" />
            <h1 className="py-[20px]">Manage Your Wallet </h1>
            <p>
              Navigate to the wallet section to view your current balance,
              transaction breakdowns. and manage your funds.
            </p>
          </div>

          {/* SECURE YOUR ACCOUNT */}

          <div className="bg-lightBlue text-white px-[30px] pt-[40px] pb-[80px]">
            <FiLock className="py-5 text-7xl bg-white text-yellows rounded-full" />
            <h1 className="py-[20px]">Manage Your Wallet </h1>
            <p>
              Navigate to the wallet section to view your current balance,
              transaction breakdowns. and manage your funds.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Work;
