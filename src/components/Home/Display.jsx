import master from "../../assets/logos_mastercard.svg";
import visa from "../../assets/cib_visa.svg";
import ibm from "../../assets/Vector.svg";
import spotify from "../../assets/ic_baseline-shopify.svg";
import prime from "../../assets/image 22.svg";
import pixi from "../../assets/image 23.svg";
const Display = () => {
  return (
    <section  className="media bg-white py-[25px]  mt-[50px]">
      <div id="container" className="box flex justify-between">
        <img src={master} alt="" />
        <img src={visa} alt="" />
        <img src={ibm} alt="" />
        <img src={spotify} alt="" />
        <img src={prime} alt="" />
        <img src={pixi} alt="" />
      </div>
    </section>
  );
};

export default Display;
