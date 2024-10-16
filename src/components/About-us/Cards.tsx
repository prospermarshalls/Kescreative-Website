import images from "../../assets/images/icon/arrow-right.svg";
import imga from "../../assets/images/v1/icon/icon1.svg";
import imgb from "../../assets/images/v1/icon/icon2.svg";
import imgc from "../../assets/images/v1/icon/icon3.svg";
import imgd from "../../assets/images/v1/icon/icon4.svg";

const serviceData = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    imgTop: imga,
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    imgTop: imgb,
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    imgTop: imgc,
  },
  {
    id: 4,
    title: "Motion Graphics",
    description:
      "Creating packaging solutions for products that not only protect but also attract customers on store.",
    imgTop: imgd,
  },
];

export function Cards() {
  return (
    <div className="md:p-16 p-4 ">
      <div className="text-black flex flex-col items-center  md:grid md:grid-cols-2  gap-10 ">
        {serviceData.map((project) => (
          <div
            key={project.id}
            className="flex bg-[whitesmoke]  flex-col justify-between  h-72 w-full p-8 border-2 rounded-lg border-black transition cursor-pointer duration-500 hover:bg-[#BFF747] hover:shadow-[4px_4px_rgb(0,0,0)]"
          >
            <div className="">
              <img src={project.imgTop} alt={project.title} className="" />
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div>
              <img src={images} alt={`${project.title} Bottom`} className="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
