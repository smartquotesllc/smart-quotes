import { cn } from "@/lib/utils";

export function FadeIn({ children, className, delayMs = 0 }: { children: React.ReactNode; className?: string; delayMs?: number }) {
  return (
    <div className={cn("animate-fade-up", className)} style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}>
      {children}
    </div>
  );
}
