import Cards from "./Cards";

export function Staff() {
  return (
    <div className="text-black">
      <div className="flex justify-center text-lg md:text-4xl font-semibold mt-5">
        <h1>We Have A Team Of <span className="md:ml-5 md:block">Creative People</span> </h1>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
