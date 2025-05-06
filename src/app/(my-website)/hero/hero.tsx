import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-medium text-primary opacity-0 animate-fade-in">
            Hi, my name is
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 opacity-0 animate-fade-in animate-delay-100">
            Max Himmel
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/70 mt-2 opacity-0 animate-fade-in animate-delay-200">
            I build things for the web <span className="line-through">and games</span>.
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 mt-6 max-w-2xl opacity-0 animate-fade-in animate-delay-300">
            I&apos;m a full-stack web developer specializing in TypeScript and Node, with 6 years of video
            game software experience. I create accessible, high-performance applications with engaging user
            experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-50 hover:opacity-100 transition-opacity"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
