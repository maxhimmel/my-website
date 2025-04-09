import config from "@payload-config";
import { getPayload } from "payload";
import { ReactNode } from "react";
import {
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from "react-icons/si";
import { TbStackMiddle } from "react-icons/tb";
import { type Skill } from "../../../../payload-types";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";

export async function SkillsBanner() {
  const payload = await getPayload({ config });
  const { docs: skills } = await payload.find({
    collection: "skills",
    limit: Number.MAX_SAFE_INTEGER,
  });

  return (
    <div className="flex w-full bg-base-200 overflow-x-clip border-t-2 border-primary shadow-xl dark:shadow-neutral">
      <AnchorScrollOffset id="skills" />
      <Skills skills={skills} />
      <Skills skills={skills} />
    </div>
  );
}

function Skills({ skills }: { skills: Skill[] }) {
  return (
    <div className="stats overflow-x-clip shadow animate-[scroll-left_80s_linear_infinite]">
      <Skill name="TypeScript" icon={<SiTypescript className="size-8" />} />
      <Skill name="JavaScript" icon={<SiJavascript className="size-8" />} />
      <Skill name="Next.js" icon={<SiNextdotjs className="size-8" />} />
      <Skill name="React" icon={<SiReact className="size-8" />} />
      <Skill name="Node" icon={<SiNodedotjs className="size-8" />} />
      <Skill name="Git" icon={<SiGit className="size-8" />} />
      <Skill name="tRPC" icon={<SiTrpc className="size-8" />} />
      <Skill name="Express" icon={<SiExpress className="size-8" />} />
      <Skill name="Prisma" icon={<SiPrisma className="size-8" />} />
      <Skill name="PostgreSQL" icon={<SiPostgresql className="size-8" />} />
      <Skill name="MongoDB" icon={<SiMongodb className="size-8" />} />
      <Skill name="Tailwind" icon={<SiTailwindcss className="size-8" />} />
      <Skill name="HTML" icon={<SiHtml5 className="size-8" />} />
      <Skill name="Full Stack" icon={<TbStackMiddle className="size-8" />} />
    </div>
  );
}

function Skill({ icon, name }: { icon: ReactNode; name: string }) {
  return (
    <div className="stat odd:text-primary even:text-secondary">
      <div className="stat-figure">{icon}</div>
      {/* <div className="stat-title">{name}</div> */}
      <div className="stat-value">{name}</div>
    </div>
  );
}
