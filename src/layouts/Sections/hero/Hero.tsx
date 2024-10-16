import HeroContent from "./HeroContent";
import BackgroundImage from "../../../assets/images/v1/hero-thumb.png";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-[40em] overflow-hidden ]"
      id="hero"
    >
      <div className="">
        <HeroContent />
      </div>
    </div>
  );
}

export default Hero;
