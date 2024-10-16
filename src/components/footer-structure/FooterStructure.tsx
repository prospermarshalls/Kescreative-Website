import { FooterStructureLeft } from "./FooterStructureLeft";
import { FooterStructureRight } from "./FooterStructureRight";

export function FooterStructure() {
  return (
    <div className="grid md:grid-cols-2 bg-black p-2 md:p-10 text-white" id="footer">
      <FooterStructureLeft />
      <FooterStructureRight />
    </div>
  );
}
