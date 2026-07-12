import { siteConfig } from "@/lib/site";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

/**
 * Marque Atria Solutions : un monogramme géométrique "A" épuré
 * accompagné du nom de la société.
 */
export function Logo({ dark = true, className = "" }: LogoProps) {
  const primary = dark ? "#16324F" : "#FFFFFF";
  const accent = "#1E8E5A";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          rx="10"
          stroke={primary}
          strokeWidth="1.6"
          opacity={dark ? 0.18 : 0.35}
        />
        <path
          d="M20 8L30 31H25.4L20 17.6L14.6 31H10L20 8Z"
          fill={primary}
        />
        <circle cx="20" cy="27.5" r="2.4" fill={accent} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-heading text-[1.05rem] font-bold tracking-tight"
          style={{ color: primary }}
        >
          {siteConfig.name.split(" ")[0]}
          <span style={{ color: accent }}>.</span>
        </span>
        <span
          className="text-[0.6rem] font-medium uppercase tracking-[0.28em]"
          style={{ color: dark ? "#5a6a7a" : "rgba(255,255,255,0.7)" }}
        >
          Solutions
        </span>
      </span>
    </span>
  );
}
