
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Send } from 'lucide-react';
// import { useToast } from '@/components/ui/use-toast';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thanks for reaching out. I'll get back to you soon.",
//       });
//       setFormData({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="glass-card p-6">
//       <h3 className="text-xl font-bold mb-6">Send a Message</h3>
      
//       <div className="space-y-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <label htmlFor="name" className="text-sm font-medium">
//               Your Name
//             </label>
//             <Input
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="John Doe"
//               required
//             />
//           </div>
          
//           <div className="space-y-2">
//             <label htmlFor="email" className="text-sm font-medium">
//               Your Email
//             </label>
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="john@example.com"
//               required
//             />
//           </div>
//         </div>
        
//         <div className="space-y-2">
//           <label htmlFor="subject" className="text-sm font-medium">
//             Subject
//           </label>
//           <Input
//             id="subject"
//             name="subject"
//             value={formData.subject}
//             onChange={handleChange}
//             placeholder="How can I help you?"
//             required
//           />
//         </div>
        
//         <div className="space-y-2">
//           <label htmlFor="message" className="text-sm font-medium">
//             Message
//           </label>
//           <Textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your message here..."
//             rows={6}
//             required
//           />
//         </div>
        
//         <Button 
//           type="submit" 
//           disabled={isSubmitting}
//           className="w-full gap-2"
//         >
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//           <Send size={16} />
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;



import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      toast({
        title: 'Message sent!',
        description: 'Thanks for reaching out. I\'ll get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: 'Error!',
        description: 'Something went wrong. Please try again later.',
        variant: 'destructive',
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6">
      <h3 className="text-xl font-bold mb-6">Send a Message</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Your Name</label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Your Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">Subject</label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="How can I help you?"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message here..."
            rows={6}
            required
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full gap-2">
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={16} />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
