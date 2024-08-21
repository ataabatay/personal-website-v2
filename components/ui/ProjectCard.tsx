import { StaticImageData } from 'next/image';
import Image from 'next/image';

export const ProjectCard = ({
  project,
  isHovered,
  onHover,
  onLeave,
}: {
  project: {
    id: number;
    projectName: string;
    projectDescription: string;
    projectTechnologies: Array<string>;
    projectImg: StaticImageData;
    deploymentLink: string;
    githubLink: string;
  };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  return (
    <>
      <div
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className={`
          flex rounded text-slate-200 bg-slate-900
          transform transition-all duration-150 ease-in-out min-h-36 w-[500px] scale-90 md:scale-100 md:mx-2
          ${isHovered ? 'md:scale-105' : 'grayscale'}
        `}
      >
        <Image src={project.projectImg} alt="project-image" className="relative min-h-36 w-40 rounded" />
        <p className="absolute bottom-2 left-4 font-bold">{project.projectName}</p>
        <div className="hover-state p-4 flex flex-col justify-between gap-4">
          <p className="text-xs md:text-md">{project.projectDescription}</p>
          <div className="badges flex justify-between gap-2">
            <div className="technologies flex gap-2 flex-wrap flex-grow ">
              {project.projectTechnologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-gray-800 px-2 py-1 text-xs font-medium text-gray-50"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="links flex gap-4 self-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github hover:text-amber-600 hover:cursor-pointer"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
              <a
                className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 hover:bg-amber-600 hover:text-gray-50 transition-all duration-100 hover:cursor-pointer"
                href={project.deploymentLink}
              >
                visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
