import imgi from "../assets/images/portfolio/p_1.png";
import imgii from "../assets/images/portfolio/p_2.png";
import imgiii from "../assets/images/portfolio/p_3.png";

const serviceData = [
  {
    id: 1,
    title: "Brand Book",
    description:
      "Product Design Developing the look and feel of physical products, aesthetics, and functionality.",
    img: imgi,
  },
  {
    id: 2,
    title: "Gift Card",
    description: "Developing the look and feel of physical products.",
    img: imgii,
  },
  {
    id: 3,
    title: "Animation",
    description: "Developing the look and feel of physical products.",
    img: imgiii,
  },
];

function Right() {
  return (
    <div className="  ">
      {serviceData.map((portfolio) => (
        <div className="my-8">
          <div key={portfolio.id} className="relative flex justify-center">
            <div className="overflow-hidden  w-[]  border-2 border-black cursor-pointer  flex flex-row items-center border-solid  text-lg  rounded-3xl shadow-[4px_4px_30px_-10px_black] ">
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

export default Right;
