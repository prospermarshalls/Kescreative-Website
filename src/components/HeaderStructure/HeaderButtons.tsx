import { Link } from "react-router-dom";

const styling = "mx-10 hover:text-[#BFF747] active:opacity-60"
function HeaderButtons() {
  return (
    <div className="hidden lg:flex bg-transparent  text-white font-semibold flex-row justify-center items-center  ">
      <Link to="/">
      <button className={styling}>Home</button>
      </Link>
      <a href="#about">
        <button className={styling}>About Us</button>
      </a>
      <a href="#pages">
        <button className={styling}>Pages</button>
      </a>
      <Link to="/portfolio">

          <button className= {styling}>Portfolio</button>
       
      </Link>
    </div>
  );
}

export default HeaderButtons;
