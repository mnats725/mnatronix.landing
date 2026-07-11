"use client";

import { useEffect, useState } from "react";

const INACTIVE_SECTION_ID = "top";
const OBSERVER_ROOT_MARGIN = "-24% 0px -68% 0px";

export function useActiveSection(sectionIds: readonly string[]): string | null {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const sections = [INACTIVE_SECTION_ID, ...sectionIds]
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const closestSection = findClosestSection(visibleSections.values());
        if (!closestSection) return;

        setActiveSectionId(
          closestSection.target.id === INACTIVE_SECTION_ID ? null : closestSection.target.id,
        );
      },
      { rootMargin: OBSERVER_ROOT_MARGIN },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
}

function findClosestSection(
  entries: IterableIterator<IntersectionObserverEntry>,
): IntersectionObserverEntry | null {
  let closestEntry: IntersectionObserverEntry | null = null;
  let closestDistance = Number.POSITIVE_INFINITY;

  for (const entry of entries) {
    const distance = Math.abs(entry.boundingClientRect.top);
    if (distance < closestDistance) {
      closestEntry = entry;
      closestDistance = distance;
    }
  }

  return closestEntry;
}
