import { Button } from "@/components/ui/button";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { getPayload } from "payload";

export async function Hero() {
  const payload = await getPayload({ config });
  const hero = await payload.findGlobal({ slug: "hero" });

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-xl md:text-2xl font-medium text-primary opacity-0 animate-fade-in">
            Hi, my name is
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 opacity-0 animate-fade-in animate-delay-100">
            Max Himmel
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/70 mt-2 opacity-0 animate-fade-in animate-delay-200">
            <RichText data={hero.tagline} />
          </h2>
          <h3 className="text-lg md:text-xl text-foreground/70 mt-6 max-w-2xl opacity-0 animate-fade-in animate-delay-300">
            <RichText data={hero.summary} />
          </h3>
          <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-fade-in animate-delay-400">
            <Button size="lg" className="group" asChild>
              <a href="#projects">
                View My Work{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-foreground w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </section>
  );
}
