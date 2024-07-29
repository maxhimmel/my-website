import React from "react";

export function Entry({
  date,
  title,
  description,
  children,
}: {
  date: string;
  title: string;
  description: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <li
      className="
        [&_.timeline-entry]:odd:timeline-end
        [&_.timeline-entry]:odd:xl:timeline-start
        [&_.timeline-entry]:even:timeline-end
        
        [&_.timeline-entry]:text-start
        [&_.timeline-entry]:odd:xl:text-end
        
        [&_.child-content]:odd:justify-start
        [&_.child-content]:odd:xl:justify-end
        [&_.child-content]:even:justify-start
        
        [&_.hr-t]:first:hidden
        [&_.hr-b]:last:hidden
        "
    >
      <hr className="hr-t" />
      <Icon className="bg-neutral text-neutral-content" />
      <div className="timeline-entry">
        <div className="bg-base-200 text-base-content shadow-lg rounded-lg p-4">
          <time className="font-mono italic">{date}</time>
          <div className="text-lg font-black">{title}</div>
          <p className="drop-shadow-sm">{description}</p>
          <div className="child-content flex mt-2">{children}</div>
        </div>
        <div className="hr-b mt-12" />
      </div>
      <hr className="hr-b" />
    </li>
  );
}

function Icon({ className }: { className?: string }) {
  return (
    <div className="timeline-middle">
      <div className="size-5 p-0.5">
        <div className={`size-full rounded-full ${className}`} />
      </div>
    </div>
  );
}
