

function HeroContent() {
  return (
    <div className="mt-36 md:mt-20 w-80% ml-5 md:ml-20 md:w-[60%]">
      <p className="text-lg mb-4">
        KESCREATIVE <span className="font-semibold">MULTUMEDIA</span>
      </p>
      <h1 className="text-2xl  md:text-3xl font-extrabold mb-3">
        For Tech, IT Related & Multimedia Solutions
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className=" mt-20 md:mt-36 w-full ">
        <a href="#footer">
          {" "}
          <button className="bg-[#BFF747] py-2  rounded-3xl  text-nowrap px-3 text-black text-md mr-7 font-medium hover:opacity-60 transition-border ease-in-out  ">
            Book A Free Consultaltion
          </button>
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBptCNxqKxgMWdwMpFVgsJTDxGzRnjCfbKlnMNFRlNzLxvkNTbMVTxwlPrHprNDSxSgCnNw"
          target="_blank"
        >
          <button className="mt-4 bg-transparent text-black border-[#BFF747] rounded-3xl border px-3 h-10 font-medium text-md hover:bg-[#BFF747]">
            Send An Email
          </button>
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
