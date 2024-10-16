import img1 from "../../assets/images/v1/video-bg.png"
import img2 from "../../assets/images/v1/play-btn.svg"


export function AboutUsBottom() {
  return (
    <div className="text-black">
      <div className="flex md:flex-row flex-col mt-16 justify-between mx-12">
        <h1 className="text-4xl ">
          We make your <br /> business stand out
        </h1>
        <div className=" text-base md:w-[40%] w-[70%] md:mt-0 mt-16 ">
          <p>
            We work closely with clients to know their objectives target
            audience unique needs and practical design solutions.
          </p>
        </div>
      </div>
      <div className=" w-full flex items-center justify-center relative">
        <img
          className="rounded-[40px] md:max-w-[80%] p-5 "
          src={img1}
          alt=""
        />
        <button className="  absolute  ">
          <a href="https://www.youtube.com/watch?v=ulbAQvhKbME&t=2s" target="_blank">
            <img
              className="shadow-bottom-only w-20 md:w-28 rounded-full hover:shadow-none"
              src={img2}
              alt=""
            />
          </a>
        </button>
      </div>
    </div>
  );
}
