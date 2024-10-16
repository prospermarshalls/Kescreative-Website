import { HeaderButtonContact } from "../../../components/HeaderStructure/HeaderButtonContact";
import HeaderButtons from "../../../components/HeaderStructure/HeaderButtons";
import { HeaderImage } from "../../../components/HeaderStructure/HeaderImage";
import { SlideOutMenu } from "../../../components/HeaderStructure/SlideOutMenu";


export function PageHeader() {
  return (

      
      <div className="sticky top-0 z-10 flex w-full h-20 bg-black justify-between px-10 md:px-20 lg:px-30  ">
        <HeaderImage />
        <HeaderButtons />
        <HeaderButtonContact />
        <SlideOutMenu />
      </div>
     
    
  );
}
