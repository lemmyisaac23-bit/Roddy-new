import { type HTMLAttributes } from "react";

/** Full name with G and h visually emphasized (matches Grillhashpowermine spelling). */
export function BrandName({
  className = "",
  logo = false,
  ...rest
}: { logo?: boolean } & HTMLAttributes<HTMLSpanElement>) {
  if (logo) {
    return (
      <span className={`text-xl font-black tracking-tight ${className}`} {...rest}>
        <span className="text-white">
          <span className="font-black">G</span>rill
        </span>
        <span className="text-gradient-teal">
          <span className="font-black">h</span>ashpowermine
        </span>
      </span>
    );
  }
  return (
    <span className={className} {...rest}>
      <span className="font-black">G</span>rill
      <span className="font-black">h</span>ashpowermine
    </span>
  );
}
