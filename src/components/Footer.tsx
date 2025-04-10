
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-blue-700 bg-clip-text text-transparent 
                            drop-shadow-[0_0_6px_rgba(124,58,237,0.6)] 
                            animate-glow">
              Portfolio
            </span>
            <span className="text-primary">.</span>
          </h3>
            <p className="text-muted-foreground">
              Crafting digital experiences with passion and precision.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Manasverma1111" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manas-verma-b91131300" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            {/* <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a> */}
            <a 
              href="mailto:vmanas79@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full hover:bg-secondary"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Manas Verma. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 space-x-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
