
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link?: string; // Make link optional
  delay: number;
}

const ContactInfo = ({ icon: Icon, title, content, link, delay }: ContactInfoProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`flex items-start gap-4 transition-all duration-500 ${
        inView 
          ? 'opacity-100 transform translate-x-0' 
          : 'opacity-0 transform -translate-x-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-primary/10 text-primary rounded-lg">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        {link ? (
          <a 
            href={link} 
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  );
};

export const ContactInfoList = () => {
  return (
    <div className="space-y-6">
      <ContactInfo 
        icon={Mail} 
        title="Email" 
        content="vmanas79@gmail.com" 
        link="mailto:vmanas79@gmail.com"
        delay={200}
      />
      <ContactInfo 
        icon={Phone} 
        title="Phone" 
        content="+91 8126061141" 
        link="tel:+918126061141"
        delay={300}
      />
      <ContactInfo 
        icon={MapPin} 
        title="Location" 
        content="Lakhimpur Kheri (UP), India" 
        delay={400}
      />
    </div>
  );
};

export default ContactInfo;
