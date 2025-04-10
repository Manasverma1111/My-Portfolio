
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ThreeScene from './ThreeScene';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Developer. Designer. Creator.';
  
  useEffect(() => {
    let currentIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <ThreeScene />
      
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-2xl">
          <h1 className="animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Manas Verma</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 h-10">
            {typedText}<span className="animate-pulse">|</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            I build exceptional digital experiences that combine aesthetic design
            with cutting-edge technology. Let's create something amazing together.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown size={16} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          
          <div className="flex space-x-4 mt-10">
            <a href="https://github.com/Manasverma1111" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manas-verma-b91131300/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={24} />
            </a> */}
            <a href="mailto:vmanas@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  );
};

export default Hero;
