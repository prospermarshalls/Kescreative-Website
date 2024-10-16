export function HeaderButtonContact() {
  return (
    <div className="flex items-center text-[#000] font-semibold ">
      <a href="#footer">
        <button className="md:bg-[#BFF747] px-4 md:border-2 md:shadow-bottom-only w-35 text-base border-black h-12 rounded-3xl  hover:shadow-none active:opacity-60">
          Contact Us
        </button>
      </a>
      <button className="lg:hidden">
        <i className="text-white  ml-10 active:text-[#7e7c7c] fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
