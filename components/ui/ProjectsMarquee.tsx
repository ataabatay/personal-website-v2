'use client';

import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import Marquee from '@/components/magicui/marquee';
import { projects } from '@/lib/projects';

export const ProjectsMarquee = ({ reverse }: { reverse: boolean | undefined }) => {
  const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
  return (
    <section className="max-w-screen-lg overflow-hidden mx-auto">
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
