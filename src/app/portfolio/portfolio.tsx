import { RiExternalLinkFill } from "react-icons/ri";
import { AnchorScrollOffset } from "../lib/anchorScrollOffset";
import { SiGithub } from "react-icons/si";

export function Portfolio() {
  return (
    <div className="flex flex-col p-6 relative">
      <AnchorScrollOffset id="portfolio" />
      {/* <h2 className="text-4xl font-black">Work</h2> */}
      {/* <div className="divider"></div> */}
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        <Work />
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
}

function Work() {
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Scratch Notes</h2>
        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
        <div className="card-actions justify-end">
          <a className="btn btn-primary">
            Launch <RiExternalLinkFill className="size-5/12" />
          </a>
          <a className="btn btn-secondary">
            Source <SiGithub className="size-5/12" />
          </a>
        </div>
      </div>
    </div>
  );
}
