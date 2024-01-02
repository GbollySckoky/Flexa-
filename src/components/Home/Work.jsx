import { FaRegUser } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { FiLock } from "react-icons/fi";

const Work = () => {
  return (
    <section className="bg-Blue mt-[60px] ">
        <div id="container" className="pt-[70px]">
        <div>
        <p className="pb-2">How Flexa Works</p>
        <p className="pb-5">Step-By-Step Process</p>
      </div>
      <section className="flex gap-3">
        <div className="bg-lightBlue">
          <FaRegUser />
          <h2>Create Your Flexa Account </h2>
          <p>
            Begin your journey by creating a Flexa account. Simply sign up with
            your email, create a secure password, and you`re ready to go.
          </p>
        </div>
        <div className="bg-lightBlue">
          <CiWallet />
          <h2>Manage Your Wallet </h2>
          <p>
            Navigate to the wallet section to view your current balance,
            transaction breakdowns. and manage your funds.
          </p>
        </div>
        <div className="bg-lightBlue">
          <FiLock />
          <h2>Manage Your Wallet </h2>
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
