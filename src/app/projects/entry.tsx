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
      <Icon />
      <div className="timeline-entry bg-base-200 shadow-lg rounded-lg p-4 m-4">
        <time className="font-mono italic">{date}</time>
        <div className="text-lg font-black">{title}</div>
        <p className="drop-shadow-sm">{description}</p>
        <div className="child-content flex mt-2">{children}</div>
        <div className="mb-14" />
      </div>
      <hr className="hr-b" />
    </li>
  );
}

function Icon() {
  return (
    <div className="timeline-middle">
      <div className="size-5 p-0.5">
        <div className="size-full bg-current rounded-full" />
      </div>
    </div>
  );
}
