import Image from "next/image";
import Link from "next/link";
import { Demo } from "@/content/demos";

interface DemoCardProps {
  demo: Demo;
}

export function DemoCard({ demo }: DemoCardProps) {
  return (
    <Link
      href={demo.route}
      className="group block"
      aria-label={`View ${demo.title}'s portfolio demo`}
    >
      <article className="overflow-hidden rounded-lg border border-gray-200 bg-white transition-all duration-200 hover:border-gray-300 hover:shadow-sm">
        <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
          <Image
            src={demo.thumbnail}
            alt={`${demo.title} portfolio preview`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            {demo.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{demo.role}</p>
          <div className="flex flex-wrap gap-2">
            {demo.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs text-gray-500 bg-gray-50 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
