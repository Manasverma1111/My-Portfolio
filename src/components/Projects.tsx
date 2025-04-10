
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import edtechimg from '@/assets/images/edtechimg.jpg';
import pathimg from '@/assets/images/pathvisualimg.jpg'

const projects = [
  {
    id: 1,
    title: 'Ed-Tech Platform',
    description: 'BrainScape is a fully responsive ed-tech platform. Our innovative platform"combines technology expertise, and community to create an unparalleled educational experience.',
    image: edtechimg,
    tags: ['React', 'Node.js', 'MongoDB', 'Juspay'],
    github: 'https://github.com/Manasverma1111/BrainScape-Ed_Tech_Platform.git',
    liveDemo: 'https://brain-scape-ed-tech-platform.vercel.app/'
  },
  {
    id: 2,
    title: 'Dynamic Pathfinding Algorithm Simulator',
    description: 'A interactive algorithm visualization tool built with to demonstrate popular graph algorithms like Dijkstra and A*. Visualizes the shortest path between nodes in a grid-based layout for better understanding of algorithm behavior.',
    image: pathimg,
    tags: ['HTML', 'CSS', 'JavaScript', 'DSA'],
    github: 'https://github.com/Manasverma1111/Pathfinding-Visualizer-DSA.git',
    liveDemo: 'https://manasverma1111.github.io/Pathfinding-Visualizer-DSA/'
  },
  {
    id: 3,
    title: 'Real-time Chat Application',
    description: 'A real-time messaging application with features like typing indicators, read receipts, and file sharing.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1170&auto=format&fit=crop',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com',
    liveDemo: 'https://example.com'
  }
];

const ProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        inView 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-20'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <Card className="glass-card overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={16} />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Live Demo
              <ExternalLink size={16} />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-500 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Here are some of my recent projects that showcase my skills and expertise in
            various technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
