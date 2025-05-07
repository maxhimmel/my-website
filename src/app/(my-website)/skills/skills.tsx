import { Section } from "../lib/section/section";

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
  return (
    <Section.Root id="skills">
      <Section.Header order="02" title="Skills" />

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
    </Section.Root>
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
