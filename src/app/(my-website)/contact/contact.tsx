// import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactMe() {
  // const sectionRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       const [entry] = entries;
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("opacity-100");
  //         observer.unobserve(entry.target);
  //       }
  //     },
  //     {
  //       threshold: 0.1,
  //     }
  //   );

  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }

  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <section
      id="contact"
      // ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 transition-opacity duration-1000 ease-in-out" //opacity-0
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <span className="text-primary mr-2">04.</span> Get In Touch
          </h2>
          <p className="text-lg text-foreground/70">
            I&apos;m currently open to new opportunities and would love to hear from you. Whether you have a
            question or just want to say hi, I&apos;ll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[150px]" />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div
            className="flex flex-col space-y-8 animate-slide-up opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="h-1 w-20 bg-primary"></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-medium">himmelmax@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/maxhimmel</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">GitHub</p>
                  <p className="font-medium">github.com/maxhimmel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
