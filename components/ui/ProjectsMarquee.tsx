'use client';

import { useState } from 'react';
import project1Img from '../../public/alfred.png';
import { ProjectCard } from './ProjectCard';
import Marquee from '@/components/magicui/marquee';

const projects = [
  {
    id: 0,
    projectName: 'Alfred',
    projectDescription:
      'A fantasy football helper app to visualise fixture and player data for better decision making, A fantasy football helper app to visualise fixture and player data for better decision making',
    projectTechnologies: ['React', 'Tailwind', 'FPL API', 'React', 'Tailwind', 'FPL API'],
    projectImg: project1Img,
    deploymentLink: 'https://www.ataabatay.com',
    githubLink: 'https://www.ataabatay.com',
  },
  {
    id: 1,
    projectName: 'Alfred',
    projectDescription:
      'A fantasy football helper app to visualise fixture and player data for better decision making, A fantasy football helper app to visualise fixture and player data for better decision making',
    projectTechnologies: ['React', 'Tailwind', 'FPL API', 'React', 'Tailwind', 'FPL API'],
    projectImg: project1Img,
    deploymentLink: 'https://www.ataabatay.com',
    githubLink: 'https://www.ataabatay.com',
  },
  {
    id: 2,
    projectName: 'Alfred',
    projectDescription:
      'A fantasy football helper app to visualise fixture and player data for better decision making, A fantasy football helper app to visualise fixture and player data for better decision making',
    projectTechnologies: ['React', 'Tailwind', 'FPL API', 'React', 'Tailwind', 'FPL API'],
    projectImg: project1Img,
    deploymentLink: 'https://www.ataabatay.com',
    githubLink: 'https://www.ataabatay.com',
  },
  {
    id: 3,
    projectName: 'Alfred',
    projectDescription:
      'A fantasy football helper app to visualise fixture and player data for better decision making, A fantasy football helper app to visualise fixture and player data for better decision making',
    projectTechnologies: ['React', 'Tailwind', 'FPL API', 'React', 'Tailwind', 'FPL API'],
    projectImg: project1Img,
    deploymentLink: 'https://www.ataabatay.com',
    githubLink: 'https://www.ataabatay.com',
  },
];

export const ProjectsMarquee = ({reverse}: {reverse: boolean | undefined}) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  return (
    <section className='max-w-screen-lg overflow-hidden mx-auto'>
      <h1 className="text-white pl-8 py-2 text-s md:text-lg">projects</h1>
      <div className="relative">
        <Marquee pauseOnHover className="[--duration:30s]" reverse={reverse}>
          {projects.map((project) => (
            <ProjectCard
              project={project}
              key={project.id}
              isHovered={hoveredProjectId === project.id}
              onHover={() => setHoveredProjectId(project.id)}
              onLeave={() => setHoveredProjectId(null)}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black dark:from-background"></div>
      </div>
    </section>
  );
};
