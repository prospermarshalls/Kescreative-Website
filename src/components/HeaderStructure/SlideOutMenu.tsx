export function SlideOutMenu() {
  return (
    <div className="hidden flex flex-col justify-evenly bg-white max-h-screen w-80  fixed top-0 left-0 z-20 pl-4 font-semibold lg:hidden">
      <ul className="grid divide-y divide-slate-200 ">
        <li className="h-12 flex items-center justify-end mr-5 hover:cursor-pointer">
          X
        </li>
        <li className="h-12 flex items-center ">Demo</li>
        <li className="h-12 flex items-center ">About Us</li>
        <li className="h-12 flex items-center ">Pages</li>
        <li className="h-12 flex items-center ">Blog</li>
        <li className="h-12 flex items-center">Contact Us</li>
        <li></li>
      </ul>
    </div>
  );
}
