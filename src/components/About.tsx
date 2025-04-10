
import { useInView } from 'react-intersection-observer';
import character from '@/assets/images/character.jpeg'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={`transition-all duration-500 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            className={`transition-all duration-500 delay-100 ${
              inView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-10'
            }`}
          >
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg transition-transform duration-500 hover:scale-110">
                <img
                  // src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop"
                  src={character}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">1+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 delay-200 ${
              inView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-10'
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate <span className="text-primary">Full Stack Developer</span> with a creative mindset
            </h3>
            
            <p className="text-muted-foreground mb-6">
              I'm a web developer with a passion for creating beautiful, functional, and user-centered digital experiences. With 1+ years of experience in the field, I am dedicated to crafting solutions that bridge the gap between user needs and business goals.
            </p>
            
            <p className="text-muted-foreground mb-6">
              My journey in development began when I built my first website in college, and I've been hooked ever since. I believe in writing clean, maintainable code and staying up-to-date with the latest technologies and best practices.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h4 className="font-bold mb-4">Education</h4>
                <div className="mb-3">
                  <p className="font-medium">Bachelor in Computer Science</p>
                  <p className="text-muted-foreground text-sm">GLA University Mathura (UP), India (2022-2026)</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Experience</h4>
                <div className="mb-3">
                  <p className="font-medium">Full Stack Developer</p>
                  <p className="text-muted-foreground text-sm">Self Learning</p>
                </div>
                {/* <div>
                  <p className="font-medium">Web Developer</p>
                  <p className="text-muted-foreground text-sm">Digital Agency (2019-2020)</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
