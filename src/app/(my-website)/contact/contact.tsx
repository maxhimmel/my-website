import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { Section } from "../lib/section/section";

export function ContactMe() {
  return (
    <Section.Root id="contact">
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
                <a className="font-medium hover:underline" target="_blank" href="mailto:himmelmax@gmail.com">
                  himmelmax@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/70">LinkedIn</p>
                <a
                  className="font-medium hover:underline"
                  target="_blank"
                  href="https://linkedin.com/in/maxhimmel"
                >
                  linkedin.com/in/maxhimmel
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/70">GitHub</p>
                <a
                  className="font-medium hover:underline"
                  target="_blank"
                  href="https://github.com/maxhimmel"
                >
                  github.com/maxhimmel
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
