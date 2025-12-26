interface LivePreviewCardProps {
  url: string;
  title: string;
  role: string;
  tags: string[];
  href: string;
}

export function LivePreviewCard({
  url,
  title,
  role,
  tags,
  href,
}: LivePreviewCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      aria-label={`View ${title}'s portfolio demo`}
    >
      <article className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04),0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.06),0_30px_50px_-15px_rgba(0,0,0,0.12)]">
        {/* Browser Window Preview */}
        <div className="relative aspect-[4/3] bg-white overflow-hidden">
          {/* Mac Window Header */}
          <div
            className="absolute top-0 left-0 right-0 h-8 flex items-center px-3 z-20"
            style={{
              backgroundColor: "#F5F5F7",
              borderBottom: "1px solid #E8E8ED",
            }}
          >
            {/* Traffic Light Controls */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.1)]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.1)]" />
              <div className="w-3 h-3 rounded-full bg-[#28C840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.1)]" />
            </div>
            <div className="w-14" /> {/* Spacer for symmetry */}
          </div>

          {/* Iframe Container - Scrollbar Killer using Container Masking */}
          <div className="absolute top-8 left-0 right-0 bottom-0 overflow-hidden bg-white">
            {/* Scaled Desktop Viewport */}
            <div
              className="origin-top-left overflow-hidden"
              style={{
                width: "1280px",
                height: "960px",
                transform: "scale(0.32)",
              }}
            >
              <iframe
                src={url}
                className="h-full border-none"
                title={`${title} Portfolio Preview`}
                tabIndex={-1}
                loading="lazy"
                style={{
                  pointerEvents: "none",
                  width: "calc(100% + 17px)", // Push scrollbar outside visible area
                }}
              />
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 z-30 bg-transparent group-hover:bg-black/[0.03] transition-colors duration-300" />
        </div>

        {/* Card Info */}
        <div className="p-5 bg-white">
          <h3 className="text-[17px] font-semibold text-gray-900 mb-0.5 tracking-[-0.01em]">
            {title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{role}</p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[10px] uppercase tracking-wide font-bold rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </a>
  );
}
