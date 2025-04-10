
// import { useInView } from 'react-intersection-observer';
// import { Progress } from '@/components/ui/progress';

// const skills = [
//   { 
//     category: 'Frontend',
//     items: [
//       { name: 'React.js', level: 70 },
//       { name: 'JavaScript', level: 75 },
//       // { name: 'TypeScript', level: 85 },
//       { name: 'HTML/CSS', level: 90 }
//     ]
//   },
//   {
//     category: 'Backend',
//     items: [
//       { name: 'Node.js', level: 80 },
//       { name: 'Express', level: 75 },
//       { name: 'MongoDB/SQL', level: 70 },
//       // { name: 'SQL', level: 70 }
//     ]
//   },
//   {
//     category: 'Tools & Others',
//     items: [
//       { name: 'Git/GitHub', level: 85 },
//       { name: 'AI Prompting', level: 65 },
//       // { name: 'Figma', level: 70 },
//       { name: 'AWS', level: 60 }
//     ]
//   }
// ];

// const SkillCategory = ({ category, items, index }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <div 
//       ref={ref}
//       className={`glass-card p-6 transition-all duration-700 ${
//         inView 
//           ? 'opacity-100 transform translate-y-0' 
//           : 'opacity-0 transform translate-y-20'
//       }`}
//       style={{ transitionDelay: `${index * 200}ms` }}
//     >
//       <h3 className="text-xl font-bold mb-6">{category}</h3>
//       <div className="space-y-6">
//         {items.map((skill, idx) => (
//           <div key={skill.name} className="space-y-2">
//             <div className="flex justify-between">
//               <span className="font-medium">{skill.name}</span>
//               <span className="text-muted-foreground">{skill.level}%</span>
//             </div>
//             <Progress 
//               value={inView ? skill.level : 0} 
//               className="h-2 transition-all duration-1000" 
//               style={{ transitionDelay: `${idx * 100 + 300}ms` }}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Skills = () => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   return (
//     <section id="skills" className="section-padding bg-secondary/30">
//       <div className="container-custom">
//         <div
//           ref={ref}
//           className={`mb-12 transition-all duration-500 ${
//             inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
//           }`}
//         >
//           <h2 className="section-title">My Skills</h2>
//           <p className="text-muted-foreground max-w-2xl">
//             Here's a breakdown of the technologies and tools I'm proficient in.
//             I'm constantly learning and adding new skills to my repertoire.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {skills.map((skill, index) => (
//             <SkillCategory 
//               key={skill.category} 
//               category={skill.category} 
//               items={skill.items}
//               index={index}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import { useInView } from 'react-intersection-observer';
import { Progress } from '@/components/ui/progress';

const skills = [
  { 
    category: 'Frontend',
    items: [
      { name: 'React.js', level: 75 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML/CSS', level: 85 }
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB/SQL', level: 70 }
    ]
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git/GitHub', level: 80 },
      { name: 'AI Prompting', level: 65 },
      { name: 'AWS', level: 60 }
    ]
  }
];

const SkillCategory = ({ category, items, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`glass-card p-6 transition-all duration-700 ease-soft transform
  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  hover:scale-[1.10] hover:shadow-neon-glow hover:animate-neon
  hover:ring-2 hover:ring-blue-500/70 hover:ring-offset-2 hover:ring-offset-background`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <h3 className="text-xl font-bold mb-6">{category}</h3>
      <div className="space-y-6">
        {items.map((skill, idx) => (
          <div key={skill.name} className="space-y-2 group">
            <div className="flex justify-between">
              <span className="font-medium">{skill.name}</span>
              <span className="text-muted-foreground">{skill.level}%</span>
            </div>
            <Progress 
              value={inView ? skill.level : 0} 
              className="h-2 transition-all duration-700 ease-in-out group-hover:scale-[1.01]" 
              style={{ transitionDelay: `${idx * 100 + 300}ms` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-500 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl">
            Here's a breakdown of the technologies and tools I'm proficient in.
            I'm constantly learning and adding new skills to my repertoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCategory 
              key={skill.category} 
              category={skill.category} 
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
