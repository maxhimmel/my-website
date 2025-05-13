"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { sendEmail } from "./sendEmail";

type Props = {
  email: string;
};

export function Form({ email }: Props) {
  const [state, formAction, pending] = useActionState(sendEmail.bind(null, email), { sent: null });

  useEffect(() => {
    if (state.sent !== null) {
      if (state.sent) {
        toast.success("Email sent!", { description: "Thanks for reaching out 👋" });
      } else {
        toast.error("Something went wrong.", { description: "I'm sorry about that 🤔" });
      }
    }
  }, [state]);

  return (
    <form className="space-y-4" action={formAction}>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <Input id="name" name="name" placeholder="Your Name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input id="email" name="email" type="email" placeholder="your@email.com" />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1">
          Subject
        </label>
        <Input id="subject" name="subject" placeholder="How can I help you?" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[150px]" />
      </div>

      {pending ? (
        <Loading />
      ) : (
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      )}
    </form>
  );
}

function Loading() {
  return (
    <Button disabled className="w-full">
      <Loader2 className="animate-spin" /> Sending
    </Button>
  );
}
