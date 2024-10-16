import { ProjectProcess } from "../../../components/Project-handling/ProjectProcess";
import { ProjectHandling } from "../../../components/Project-handling/ProjectHandling";

export function ProjectHandlingContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-black p-10 mb-20">
      <ProjectHandling />
      <ProjectProcess />
    </div>
  );
}
