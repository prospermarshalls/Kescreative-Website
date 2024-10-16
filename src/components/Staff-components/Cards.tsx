import { SocialIcons } from "./SocialIcons";
import img1 from "../../assets/images/team/team5.png";
import img2 from "../../assets/images/team/team6.png";
import img3 from "../../assets/images/team/team7.png";
import img4 from "../../assets/images/team/team1.png";

export default function Cards() {
  return (
    <div className="flex flex-col md:flex-row space-x-5 justify-around ">
      <div className="px-3 flex flex-col items-center my-7 ">
        <div className=" p-2 rounded-[88px]   shadow-[0_0_10px_-5px_black] ">
          <img
            className="w-40  rounded-[80px]"
            src={img1}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold flex justify-center mt-2">Andrew Mark</h3>
          <h5 className="text-sm">Creative Director</h5>
          <SocialIcons />
        </div>
      </div>
      <div className="px-3 flex flex-col items-center my-7 ">
        <div className=" p-2 rounded-[88px]  shadow-[0_0_10px_-5px_black] ">
          <img
            className="w-40  rounded-[80px]"
            src={img2}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold flex justify-center mt-2">Jack Taylor</h3>
          <h5 className="text-sm">Senior Designer</h5>
          <SocialIcons />
        </div>
      </div>
      <div className="px-3 flex flex-col items-center my-7">
        <div className=" p-2 rounded-[88px]  shadow-[0_0_10px_-5px_black] ">
          <img
            className="w-40  rounded-[80px]"
            src={img3}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold flex justify-center mt-2 ">Martine Joy</h3>
          <h5 className="text-sm">Project Manager</h5>
          <SocialIcons />
        </div>
      </div>
      <div className="px-3 flex flex-col items-center my-7">
        <div className=" p-2 rounded-[88px]  shadow-[0_0_10px_-5px_black] ">
          <img
            className="w-40  rounded-[80px]"
            src={img4}
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold flex justify-center items-center mt-2">
            Adam Straw
          </h3>
          <h5 className="text-sm">Web Developer</h5>
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}
