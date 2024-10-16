import imgiv from "../assets/images/portfolio/p_4.png"
import imgv from "../assets/images/portfolio/p_5.png"
import imgvi from "../assets/images/portfolio/p_6.png"






const serviceData= [
 
  {
    id: 4,
    title: "Photo Album",
    description:
      "Developing the look and feel of physical products.",
    img: imgiv,
  },
  {
    id: 5,
    title: "Game Book",
    description:
      "Developing the look and feel of physical products.",
    img: imgv,
  },
  {
    id: 6,
    title: "Product Landing Page",
    description:
      "Developing the look and feel of physical products.",
    img: imgvi,
  },
];

function Left() {
  return (
    <div className="  ">
    {serviceData.map((portfolio) => (
      <div className="my-8">
        <div key={portfolio.id} className="relative flex justify-center">
          <div className="overflow-hidden  w-  border-2 border-black cursor-pointer  flex flex-row items-center border-solid  text-lg  rounded-3xl shadow-[4px_4px_30px_-10px_black] ">
            <img
              className="transition duration-700 ease-in-out h-full bg-cover rounded-2xl scale-150 w-full hover:scale-110 "
              src={portfolio.img}
              alt="this is an image "
            />
          </div>

          <div className="bottom-4  left-4 absolute flex flex-col w-96 items-start text-white font-semibold">
            <h3 className="text-xl font-bold"> {portfolio.title} </h3>
            <p className="">{portfolio.description} </p>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
}

export default Left;
