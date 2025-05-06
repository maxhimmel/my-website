// import { useEffect, useRef } from "react";

const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML", "CSS", "C#", "Python"] },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Next.js", "Redux", "Tailwind CSS", "Unity"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "VS Code", "Jest"],
  },
  {
    category: "Other",
    items: ["RESTful APIs", "GraphQL", "CI/CD", "Agile Methodologies", "Game Development", "UI/UX Design"],
  },
];

export function Skills() {
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
      id="skills"
      // ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/30 transition-opacity duration-1000 ease-in-out" //opacity-0
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center">
          <span className="text-primary mr-2">02.</span> Skills
          <span className="h-px bg-border grow ml-6"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="opacity-0 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <SkillCard category={skill.category} items={skill.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, items }: { category: string; items: string[] }) {
  return (
    <div className="bg-card border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-primary">&gt;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
