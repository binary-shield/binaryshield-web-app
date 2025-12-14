// Ebook utility functions
import { Ebook } from "@/shared/types";

export function getEbookById(id: string, ebooks: Ebook[]): Ebook | undefined {
  return ebooks.find((ebook) => ebook.id === id);
}

export function getRelatedEbooks(ebook: Ebook, allEbooks: Ebook[], limit = 3): Ebook[] {
  return allEbooks
    .filter((e) => e.category === ebook.category && e.id !== ebook.id)
    .slice(0, limit);
}

export function getEbookCategories(ebooks: Ebook[]): string[] {
  return Array.from(new Set(ebooks.map((ebook) => ebook.category)));
}

export function formatReadingTime(pages: number): string {
  const hours = Math.round(pages / 50);
  return `~${hours} hour${hours > 1 ? 's' : ''} read`;
}
