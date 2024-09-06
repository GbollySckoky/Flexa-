import master from "../../assets/logos_mastercard.svg";
import visa from "../../assets/cib_visa.svg";
import ibm from "../../assets/Vector.svg";
import spotify from "../../assets/ic_baseline-shopify.svg";
import prime from "../../assets/image 22.svg";
import pixi from "../../assets/image 23.svg";
const Display = () => {

  return (
    <div className="mt-[50px] mb-[20px] hidden lg:block ">
    <div className="box flex justify-evenly ">
        <img src={master} alt="masterCard" />
        <img src={visa} alt="visa" />
        <img src={ibm} alt="ibm" />
        <img src={spotify} alt="spotify" />
        <img src={prime} alt="prime" />
        <img src={pixi} alt="pixi" />
    </div>
    </div>
  );
};

export default Display;
