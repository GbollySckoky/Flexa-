import bigman from "../../assets/bigman.jpeg";
import lady1 from '../../assets/lady1.jpeg';
import lady2 from '../../assets/lady2.jpeg';
import gee from '../../assets/gee.jpeg';
import lady3 from '../../assets/lady3.jpeg'

const Users = () => {
  return (
    <section id="container">
      <div className="text-center">
        <h1>See What Our Users Has To Say</h1>
        <p>
          Every month, we bring the spotlight to the heart of Flexa`s dynamic
          financial ecosystem, unveiling the comprehensive stories of
          individuals who have harnessed the full spectrum of Flexa`s
          capabilities.
        </p>
      </div>

      {/* CARDS */}
      
      <div id='cards'  className="grid grid-cols-3  gap-x-6 gap-y-[30px] ">
        {/* CARD 1 */}
        <div className="bg-white p-[40px]">
          <div className="flex items-center ">
            <img
              className="w-[70px] h-[70px] rounded-[50%]"
              src={bigman}
              alt=""
            />
            <h4>John Doe</h4>
          </div>
          <p className="py-3 pt-[20px]">
            Helpful responsive customer support has been a standout feature for
            me.
          </p>
          <p>7.30am, 23rd March 2023</p>
        </div>
        {/* CARD 2 */}
        <div className="bg-white p-[40px]">
          <div className="flex items-center ">
            <img
              className="w-[80px] h-[80px] rounded-[50%]"
              src={lady1}
              alt=""
            />
            <h4>Oluwatobi Magret.O</h4>
          </div>
          <p className="py-3 pt-[20px]">
            Flexa`s commitment to innovation is evident. The platform consantly envolves to meet 
            the ever-changing needs of users.
          </p>
          <p>7.30am, 23rd March 2023</p>
        </div>
        {/* CARD 3 */}
        <div className="row-span-2 bg-white p-[40px]">
          <div className="flex items-center ">
            <img
              className="w-[70px] h-[70px] rounded-[50%]"
              src={lady2}
              alt=""
            />
            <h4>Aamira Fareeda.M</h4>
          </div>
          <p className="py-3 pt-[20px]">
            The flexible loans have been a game-changer for me. Being able to customize my repayment
             plan and having no hidden fees makes Flexa my go-to choice for financial support, Highly recommended!. 
          </p>
          <p>7.30am, 23rd March 2023</p>
        </div>
        {/* CARD 4 */}
        <div className="bg-white p-[40px]">
          <div className="flex items-center ">
            <img
              className="w-[70px] h-[70px] rounded-[50%]"
              src={gee}
              alt=""
            />
            <h4>Oluwajuwon Abdullateef.O</h4>
          </div>
          <p className="py-3 pt-[20px]">
            Flexa has revolutionised the way i manage my finances. The flexibility in loans and the intuitive 
            dashboard make it a standout platform for me. instant approvals and transparent terms--couldn`t
             ask for more.
          </p>
          <p>7.30am, 23rd March 2023</p>
        </div>
        {/* CARD 5 */}
        <div className="bg-white p-[40px]">
          <div className="flex items-center ">
            <img
              className="w-[70px] h-[70px] rounded-[50%]"
              src={lady3}
              alt=""
            />
            <h4>Oluwakemi Omolara.A</h4>
          </div>
          <p className="pt-[20px] pb-3">
            Flexa has made my finance management a breeze 
          </p>
          <p>7.30am, 23rd March 2023</p>
        </div>
      </div>
         
  
    </section>
  );
};

export default Users;
