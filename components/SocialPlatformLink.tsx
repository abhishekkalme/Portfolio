import { LucideIcon } from "lucide-react";

interface SocialPlatformLinkProps {
  name: string;
  icon: LucideIcon;
  color: string;
  link: string;
  idx: number;
}

export default function SocialPlatformLink({
  name,
  icon: Icon,
  color,
  link,
  idx,
}: SocialPlatformLinkProps) {
  return (
    <a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${name}`}
      className={`${color} flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-150`}
    >
      <Icon className="h-4 w-4" />
      <div className="text-xs font-medium">{name}</div>
    </a>
  );
}
