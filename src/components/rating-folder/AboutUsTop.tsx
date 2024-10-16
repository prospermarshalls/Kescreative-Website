import { Rating } from "./Rating";
import img4 from "../../assets/images/v1/t_thumb3.png"
import img5 from "../../assets/images/v1/t_thumb2.png"
import img6 from "../../assets/images/v1/t_thumb4.png"

const commonClasses =
  "h-[23em] md:w-[50%] w-[80%]  flex py-10 justify-between items-center flex-col px-4 rounded-2xl  cursor-pointer hover:shadow-[0_0_60px_-15px_rgba(0,0,0,0.9)] transition-shadow ease-in-out duration-[0.5s] mx-4";

export function AboutUsTop() {
  return (
    <div className="flex flex-col p-10">
      <div className=" h-40  border-t-2 pt-20 flex justify-center  border-slate-600">
        <h1 className=" text-lg md:text-4xl font-bold text-black">
          Clients Are Always Satisfied With Us
        </h1>
      </div>
      <div className="  flex lg:flex-row flex-col justify-normal lg:justify-around  text-black pb-20">
        <div className={commonClasses}>
          <div className="  flex justify-center">
            <img
              className="w-28 object-contain border-2 border-black rounded-[56px]"
              src={img6}
              alt=""
            />
          </div>
          <h1 className="font-bold my-3">Sarah Thompson</h1>
          <ul>
            <Rating />
          </ul>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={commonClasses}>
          <div className="  flex justify-center">
            <img
              className="w-28 object-contain border-2 border-black rounded-[56px]"
              src={img5}
              alt=""
            />
          </div>
          <h1 className="font-bold my-3">James Anderson</h1>

          <ul>
            <Rating />
          </ul>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <div className={commonClasses}>
          <div className="  flex justify-center">
            <img
              className="w-28 object-contain border-2 border-black rounded-[56px]"
              src={img4}
              alt=""
            />
          </div>
          <h1 className="font-bold my-3">Maria Garcia</h1>
          <ul>
            <Rating />
          </ul>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      </div>
    </div>
  );
}
