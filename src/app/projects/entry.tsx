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
        
        [&_.child-content]:odd:xl:justify-end        
        [&_.tech-logo]:odd:xl:order-last
        
        [&_.hr-t]:first:hidden
        [&_.hr-b]:last:hidden
        "
    >
      <hr className="hr-t" />
      <Icon className="bg-neutral text-neutral-content" />
      <div className="timeline-entry">
        <div className="bg-base-200 text-base-content shadow-lg rounded-lg p-4">
          {/* <time className="font-mono italic">{date}</time> */}
          <div className="child-content flex items-center gap-2">
            <div className="tech-logo size-8 flex items-center justify-center bg-base-300 rounded-xl">
              <UnityLogo className="size-3/4 translate-x-[-1.6px] fill-base-content" />
            </div>
            <div className="text-lg font-black">{title}</div>
          </div>
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

function UnityLogo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 50 50"
    >
      <path d="M 44.082031 25.207031 L 46.902344 20.429688 C 47.015625 20.191406 47.03125 19.917969 46.945313 19.671875 L 41.359375 3.671875 C 41.1875 3.183594 40.675781 2.90625 40.179688 3.027344 L 23.761719 7.027344 C 23.449219 7.105469 23.191406 7.328125 23.070313 7.628906 L 21.324219 12 L 16 12 C 15.722656 12 15.453125 12.117188 15.265625 12.320313 L 3.265625 25.320313 C 2.894531 25.722656 2.914063 26.347656 3.308594 26.722656 L 15.894531 38.722656 C 16.078125 38.902344 16.328125 39 16.582031 39 L 22.320313 39 L 24.070313 43.371094 C 24.199219 43.695313 24.488281 43.925781 24.828125 43.984375 L 42.289063 46.984375 C 42.34375 46.996094 42.402344 47 42.457031 47 C 42.921875 47 43.332031 46.679688 43.433594 46.214844 L 46.976563 29.984375 C 47.03125 29.734375 46.988281 29.472656 46.851563 29.25 Z M 21.324219 12 L 35.417969 9.417969 L 28 24 L 11.167969 24 Z M 22.324219 39 L 11.167969 28 L 28 28 L 36.75 41.167969 Z M 40.386719 38.898438 L 32 26 L 39.332031 11.417969 L 44.082031 25.210938 Z"></path>
    </svg>
  );
}
