import { SocialIcons } from "../Staff-components/SocialIcons"; 

export function FooterStructureLeft() {
  return (
    <div className=" max-w-[35em] ">
      <h1 className="text-xl md:text-4xl font-bold mb-5 text-center">
        Lets Build Your Next Project Together{" "}
      </h1>
      <p className="mt-10 text-center md:text-left">
        We collaborate closely with our clients to understand their objectives,
        target audience, and unique needs
      </p>
      <p className="mt-10 text-center md:text-left">
        We leverage our creative skills to translate these insights into
        practical design solutions
      </p>
      <div className="mt-14 text-center md:text-left">
        <p>Give us a call:</p>
        <p>+(234)8136095561</p>
      </div>
      <div className="mt-12 text-center md:text-left">
        <p>Send us an email:</p>
        <p>starlabacademy3@gmail.com</p>
      </div>
      <div className=" w-40  md:ml-0 ml-32 mt-10">
        <SocialIcons />
      </div>
    </div>
  );
}
