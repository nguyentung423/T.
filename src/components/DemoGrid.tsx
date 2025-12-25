import { Demo } from "@/content/demos";
import { DemoCard } from "./DemoCard";
import { LivePreviewCard } from "./LivePreviewCard";

interface DemoGridProps {
  demos: Demo[];
}

export function DemoGrid({ demos }: DemoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {demos.map((demo) =>
        demo.livePreviewUrl ? (
          <LivePreviewCard
            key={demo.slug}
            url={demo.livePreviewUrl}
            title={demo.title}
            role={demo.role}
            tags={demo.tags}
            href={demo.livePreviewUrl}
          />
        ) : (
          <DemoCard key={demo.slug} demo={demo} />
        )
      )}
    </div>
  );
}
