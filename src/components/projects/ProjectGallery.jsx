import React from 'react';
import ProjectCard from './ProjectCard'; // This will now import the dual-image card

const projectsData = [
  { 
    id: 1, 
    image1: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    id: 2, 
    image1: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop',
    image2: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=1000&auto=format&fit=crop'
  }
];

const ProjectGallery = () => {
  return (
    <div className="flex flex-col gap-y-12 p-4">
      {projectsData.map((project) => (
        <div key={project.id} className="w-full h-[850px] flex gap-4 overflow-hidden">
          <ProjectCard 
            image1={project.image1}
            image2={project.image2}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;