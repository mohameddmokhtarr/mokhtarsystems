import { useEffect } from "react";

const SUFFIX = "Mokhtar Studio";

/**
 * Sets the document title for a route. Pass the page name only —
 * the studio name is appended. Omit the argument on the homepage,
 * which uses the full title from index.html.
 */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    if (!title) return;
    const previous = document.title;
    document.title = `${title} — ${SUFFIX}`;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
