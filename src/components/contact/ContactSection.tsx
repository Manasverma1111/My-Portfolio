
import { useInView } from 'react-intersection-observer';
import { ContactInfoList } from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={`mb-12 transition-all duration-500 ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out.
            I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div
              className={`transition-all duration-500 delay-100 ${
                inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
              }`}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Feel free to reach out through any of the following channels.
                I'm typically able to respond within 24 hours.
              </p>
            </div>

            <ContactInfoList />
          </div>

          <div
            className={`transition-all duration-500 delay-300 ${
              inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
