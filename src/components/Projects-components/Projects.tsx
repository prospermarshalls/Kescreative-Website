import img1 from "../../assets/images/v1/project1.png";
import img2 from "../../assets/images/v1/project2.png";
import img3 from "../../assets/images/v1/project3.png";
import img4 from "../../assets/images/v1/project4.png";

const projectsData = [
  {
    id: 1,
    title: "Product Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    img: img1,
  },
  {
    id: 2,
    title: "Logo and Branding",
    description:
      "Creating or refreshing a company's logo and developing a cohesive visual identity.",
    img: img2,
  },
  {
    id: 3,
    title: "App UI/UX Design",
    description:
      "Designing the UI/UX for mobile apps and web applications to ensure usability & engagement.",
    img: img3,
  },
  {
    id: 4,
    title: "Packaging Design",
    description:
      "Creating packaging solutions for products that not only protect but also attract customers on store.",
    img: img4,
  },
];

function Projects() {
  return (
    <div className="bg-black flex flex-col pt-5 ">
      <div className="text-3xl font-semibold flex justify-center mb-5">
        <h2>
          Have a wide range of{" "}
          <span className="ml-5 block">creative projects</span>
        </h2>
      </div>
      <div className="flex justify-center items-center  overflow-x-auto scrollbar-hidden mr-4">
        <div className="flex space-x-10 p-2 w-[400vw] mb-5 ">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative  border-4 rounded-2xl border-white flex-shrink-0 space-x-4 overflow-hidden"
            >
              <img
                src={project.img}
                alt={project.title}
                className="md:w-96 w-80 hover:scale-110 opacity-65 scale-150 transition ease-in-out duration-1000 cursor-pointer"
              />
              <div className="absolute left-4 bottom-4">
                <h3 className="text-lg font-semibold mb-4">{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
