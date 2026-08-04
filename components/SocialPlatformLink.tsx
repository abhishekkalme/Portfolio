import { LucideIcon } from "lucide-react";

interface SocialPlatformLinkProps {
  name: string;
  icon: LucideIcon;
  link: string;
}

export default function SocialPlatformLink({
  name,
  icon: Icon,
  link,
}: SocialPlatformLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit my ${name}`}
      className="flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Icon className="h-4 w-4" />
      <div className="text-xs font-medium">{name}</div>
    </a>
  );
}
