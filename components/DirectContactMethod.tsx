import { motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";

interface DirectContactMethodProps {
  icon: LucideIcon;
  color: string;
  label: string;
  value: string;
  link: string;
  idx: number;
  cardVariants: {
    hidden: { opacity: number; y: number };
    visible: (i: number) => {
      opacity: number;
      y: number;
      transition: { duration: number; delay: number };
    };
  };
}

export default function DirectContactMethod({
  icon: Icon,
  color,
  label,
  value,
  link,
  idx,
  cardVariants,
}: DirectContactMethodProps) {
  return (
    <motion.a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label}: ${value}`}
      className="glass-card flex items-center justify-between p-4 transition-colors duration-150 hover:bg-muted cursor-pointer group"
      custom={idx}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex items-center space-x-3">
        <Icon className={`w-5 h-5 ${color}`} />
        <div>
          <div className="text-xs text-muted-foreground">{label}</div>
          <div className="text-sm font-medium break-words text-foreground">
            {value}
          </div>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-150" />
    </motion.a>
  );
}
