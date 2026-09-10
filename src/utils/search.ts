/**
 * Normalizes a string for search comparison by converting to lowercase
 * and removing all non-alphanumeric characters (including spaces, hyphens, etc).
 * 
 * Example:
 * normalizeSearchText("  DSa - 3  ") -> "dsa3"
 * normalizeSearchText("dsa_3") -> "dsa3"
 */
export function normalizeSearchText(text: string | undefined | null): string {
  if (!text) return "";
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

/**
 * Checks if a target string matches a search query after both are normalized.
 * Returns true if the query is empty (matches everything).
 * 
 * @param target The string being searched against (e.g., topic title)
 * @param query The user's search input
 */
export function searchMatches(target: string | undefined | null, query: string | undefined | null): boolean {
  if (!query) return true;
  
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) return true; // if query consists only of special characters/spaces

  if (!target) return false;
  
  const normalizedTarget = normalizeSearchText(target);
  return normalizedTarget.includes(normalizedQuery);
}
