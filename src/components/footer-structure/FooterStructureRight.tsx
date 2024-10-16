import imgarrow from "../../assets/images/icon/arrow-right2.svg";

const inputStyle =
  "bg-transparent border border-grey rounded-[15px] outline-none focus:ring-1 focus:ring-[#fdfde1]  p-4 w-[26em] md:w-[31em] ";

export function FooterStructureRight() {
  return (
    <div className="flex flex-col w-[100%] items-center md:mt-0 mt-10">
      <h1 className="font-semibold mb-5 text-2xl">Send Us A Message</h1>
      <ul className="flex flex-col space-y-4 text-sm">
        <li>
          <input type="text" placeholder="Your Name" className={inputStyle} />
        </li>
        <li>
          <input
            type="email"
            placeholder="Your email address"
            className={inputStyle}
          />
        </li>
        <li>
          <input
            type="number"
            placeholder="Your Phone Number"
            className={inputStyle}
          />
        </li>
        <li>
          <textarea
            className={inputStyle + "h-40 resize-none rounded-[25px] p-5 mb-5 "}
            placeholder="Write Your Message here..."
          ></textarea>
        </li>
      </ul>

      <div className="p-0">
        <button className="shadow-bottom-only border-2 hover:shadow-none border-black text-black rounded-3xl px-4 w-[20em] md:w-[25em] items-center py-3 bg-[#BFF747] flex justify-between">
          Send a message{" "}
          <img
            className="bg-black p-[8px] rounded-[45px]"
            src={imgarrow}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
