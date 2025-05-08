import config from "@payload-config";
import { getPayload } from "payload";
import { type Skill } from "../../../../payload-types";
import { Section } from "../lib/section/section";

type SkillItems = Skill["skills"];

export async function Skills() {
  const payload = await getPayload({ config });
  const { docs: skills } = await payload.find({
    collection: "skills",
    limit: Number.MAX_SAFE_INTEGER,
  });

  return (
    <Section.Root id="skills">
      <Section.Header order="02" title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className="opacity-0 animate-slide-up"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <SkillCard category={skill.category} items={skill.skills} />
          </div>
        ))}
      </div>
    </Section.Root>
  );
}

function SkillCard({ category, items }: { category: string; items: SkillItems }) {
  return (
    <div className="bg-card border rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:border-primary/50">
      <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-center">
            <span className="mr-2 text-primary">&gt;</span>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
