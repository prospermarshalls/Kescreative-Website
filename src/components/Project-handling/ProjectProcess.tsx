import img1 from "../../assets/images/icon/arrow-right.svg";

const styling =
  "relative  w-80 h-20 hover:h-36 hover:bg-[#BFF747]  border border-black border-2 transition duration-1000 hover:shadow-[3px_3px_black]  p-5 rounded-2xl hover:grid hover:grid-cols-1 hover:gap-2 ";
const buttons = "flex w-72  justify-between";
export function ProjectProcess() {
  return (
    <div className="flex flex-col mt-10 md:mt-0 space-y-5 items-center">
      <div className={styling}>
        <button className={buttons}>
          01/ Project Ideation <img src={img1} alt="" />
        </button>{" "}
        <span className=" cursor-pointer font-bold absolute text-[15px] hover:text-[14px] left-5 bottom-2 hover:bottom-0.5 opacity-0 hover:opacity-100">
          {" "}
          The process starts with a detailed discussion with the client to
          understand their idea & goals.
        </span>
      </div>
      <div className={styling}>
        <button className={buttons}>
          02/ Development <img src={img1} alt="" />{" "}
        </button>
        <span className=" cursor-pointer font-bold absolute text-[15px] hover:text-[14px] left-5 bottom-2 hover:bottom-0.5 opacity-0 hover:opacity-100">
          {" "}
          The process starts with a detailed discussion with the client to
          understand their idea & goals.
        </span>
      </div>
      <div className={styling}>
        <button className={buttons}>
          03/ Brainstorming <img src={img1} alt="" />{" "}
        </button>
        <span className=" cursor-pointer font-bold absolute text-[15px] hover:text-[14px] left-5 bottom-2 hover:bottom-0.5 opacity-0 hover:opacity-100">
          {" "}
          The process starts with a detailed discussion with the client to
          understand their idea & goals.
        </span>
      </div>
      <div className={styling}>
        <button className={buttons}>
          04/ Launch <img src={img1} alt="" />{" "}
        </button>
        <span className=" cursor-pointer font-bold absolute text-[15px] bottom-2 hover:text-[14px] left-5 hover:bottom-0.5 opacity-0 hover:opacity-100">
          {" "}
          The process starts with a detailed discussion with the client to
          understand their idea & goals.
        </span>
      </div>
    </div>
  );
}
