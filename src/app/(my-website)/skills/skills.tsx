import config from "@payload-config";
import { getPayload } from "payload";
import { type Skill } from "../../../../payload-types";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";
import { ReactIcon } from "../lib/reactIcon";

export async function SkillsBanner() {
  const payload = await getPayload({ config });
  const { docs: skills } = await payload.find({
    collection: "skills",
    limit: Number.MAX_SAFE_INTEGER,
  });

  return (
    <div className="flex w-full bg-base-200 overflow-x-clip border-t-2 border-b-2 border-primary drop-shadow-xl shadow-xl dark:shadow-neutral">
      <AnchorScrollOffset id="skills" />
      <Skills skills={skills} />
      <Skills skills={skills} />
    </div>
  );
}

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex animate-[scroll-left_80s_linear_infinite]">
      {skills.map((s) => (
        <Skill key={s.id} skill={s} />
      ))}
    </div>
  );
}

function Skill({ skill }: { skill: Skill }) {
  return (
    <div className="stat odd:text-primary odd:[&_.icon]:bg-primary even:text-secondary even:[&_.icon]:bg-secondary">
      <div className="stat-figure size-8">
        <ReactIcon icon={skill.reactIcon} className="size-8" />
      </div>
      {/* <div className="stat-title">{name}</div> */}
      <div className="stat-value">{skill.name}</div>
    </div>
  );
}
