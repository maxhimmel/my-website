import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import config from "@payload-config";
import { Github, Linkedin, Mail } from "lucide-react";
import { getPayload } from "payload";
import { Section } from "../lib/section/section";
import { sendEmail } from "./sendEmail";

export async function ContactMe() {
  const payload = await getPayload({ config });
  const contact = await payload.findGlobal({ slug: "contact" });

  return (
    <Section.Root id="contact">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
          <span className="text-primary mr-2">04.</span> Get In Touch
        </h2>
        <p className="text-lg text-foreground/70">{contact.callToAction}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6 animate-slide-up opacity-0" style={{ animationDelay: "0.2s" }}>
          <form className="space-y-4" action={sendEmail.bind(null, contact.email)}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input id="name" name="name" required placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input id="email" name="email" required type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <Input id="subject" name="subject" required placeholder="How can I help you?" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="Your message..."
                className="min-h-[150px]"
              />
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
                <a className="font-medium hover:underline" target="_blank" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/70">LinkedIn</p>
                <a className="font-medium hover:underline" target="_blank" href={contact.linkedin}>
                  {contact.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/70">GitHub</p>
                <a className="font-medium hover:underline" target="_blank" href={contact.github}>
                  {contact.github.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section.Root>
  );
}
