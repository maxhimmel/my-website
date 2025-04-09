// https://github.com/DanielPantle/strapi-plugin-react-icons/issues/22#issuecomment-1793514490

import dynamic from "next/dynamic";
import { IconType } from "react-icons";

const ICON_COMPONENTS: Record<string, () => Promise<any>> = {
  Ai: () => import("react-icons/ai"),
  Bs: () => import("react-icons/bs"),
  Bi: () => import("react-icons/bi"),
  Ci: () => import("react-icons/ci"),
  Di: () => import("react-icons/di"),
  Fi: () => import("react-icons/fi"),
  Fc: () => import("react-icons/fc"),
  Fa: () => import("react-icons/fa6"),
  Gi: () => import("react-icons/gi"),
  Go: () => import("react-icons/go"),
  Gr: () => import("react-icons/gr"),
  Hi: () => import("react-icons/hi2"),
  Im: () => import("react-icons/im"),
  Lia: () => import("react-icons/lia"),
  Io: () => import("react-icons/io5"),
  Lu: () => import("react-icons/lu"),
  Md: () => import("react-icons/md"),
  Pi: () => import("react-icons/pi"),
  Rx: () => import("react-icons/rx"),
  Ri: () => import("react-icons/ri"),
  Si: () => import("react-icons/si"),
  Sl: () => import("react-icons/sl"),
  Tb: () => import("react-icons/tb"),
  Tfi: () => import("react-icons/tfi"),
  Ti: () => import("react-icons/ti"),
  Vsc: () => import("react-icons/vsc"),
  Wi: () => import("react-icons/wi"),
  Cg: () => import("react-icons/cg"),
};

export function ReactIcon({
  icon,
  size,
  color,
  className,
}: {
  icon: string;
  size?: string | number;
  color?: string;
  className?: string;
}) {
  for (let i = 3; i >= 2; i--) {
    const iconComponentImport = ICON_COMPONENTS[icon.substring(0, i)];
    if (iconComponentImport) {
      const DynamicIcon = dynamic(() => iconComponentImport().then((icons) => icons[icon])) as IconType;
      return <DynamicIcon className={className} size={size} color={color} />;
    }
  }

  return null;
}
