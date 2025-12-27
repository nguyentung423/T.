"use client";

import { useState } from "react";
import { Demo } from "@/content/demos";
import { DemoCard } from "./DemoCard";
import { LivePreviewCard } from "./LivePreviewCard";

interface DemoGridProps {
  demos: Demo[];
}

export function DemoGrid({ demos }: DemoGridProps) {
  const [showAll, setShowAll] = useState(false);

  // Show first 2 items initially, all 3 when expanded
  const visibleDemos = showAll ? demos : demos.slice(0, 2);
  const hasMore = demos.length > 2 && !showAll;

  return (
    <div className="space-y-6">
      {/* Grid: 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleDemos.map((demo, index) => {
          // 3rd item (index 2): span 2 cols, flex center, constrained width
          const isThirdItem = index === 2;

          if (isThirdItem) {
            return (
              <div
                key={demo.slug}
                className="md:col-span-2 flex justify-center"
              >
                {/* Constrained width to match top row cards: 50% minus half gap */}
                <div className="w-full md:w-[calc(50%-0.75rem)]">
                  {demo.livePreviewUrl ? (
                    <LivePreviewCard
                      url={demo.livePreviewUrl}
                      title={demo.title}
                      role={demo.role}
                      tags={demo.tags}
                      href={demo.livePreviewUrl}
                    />
                  ) : (
                    <DemoCard demo={demo} />
                  )}
                </div>
              </div>
            );
          }

          return (
            <div key={demo.slug}>
              {demo.livePreviewUrl ? (
                <LivePreviewCard
                  url={demo.livePreviewUrl}
                  title={demo.title}
                  role={demo.role}
                  tags={demo.tags}
                  href={demo.livePreviewUrl}
                />
              ) : (
                <DemoCard demo={demo} />
              )}
            </div>
          );
        })}
      </div>

      {/* Load More / Collapse Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
          >
            <span>Xem thêm</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Collapse Button */}
      {showAll && demos.length > 2 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setShowAll(false)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 hover:text-gray-900 transition-all duration-200"
          >
            <span>Thu gọn</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
