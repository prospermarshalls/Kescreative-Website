import Cards from "./Cards";
import Image from "../assets/images/blog/blog10.png"

export function LayoutApp() {
  return (
    <>
      {" "}
      <div
        className="overflow-x-hidden w-full items-center  justify-center text-center"
        id="portfolio"
      >
        {" "}
        <section
          className="relative bg-blue p-4 bg-cover bg-center h-screen flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${Image})`,
            height: "80vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 opacity-50"></div>
          <div className="relative flex items-center justify-center h-full text-center text-white">
            <div className="md:px-32">
              <h5 className="">KESCREATIVE <span className="font-bold">MULTIMEDIA</span></h5>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Portfolio Page
              </h3>
              <p className="text-lg  mb-8 px-5 font-light w-full ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam,
                sed. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Odio consequatur debitis ex est aliquam quia earum ducimus
                dolorem, illum impedit.
              </p>
            </div>
          </div>
        </section>
        <Cards />
      </div>
    </>
  );
}
