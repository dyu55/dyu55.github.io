"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";

interface SearchResult {
  url: string;
  meta: {
    title?: string;
  };
  excerpt: string;
}

// Pagefind types
interface PagefindAPI {
  search: (query: string) => Promise<{ results: { data: () => Promise<SearchResult> }[] }>;
}

export function BlogSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const pagefindRef = useRef<PagefindAPI | null>(null);

  useEffect(() => {
    // Only load in browser, and only after a production build
    const loadPagefind = async () => {
      if (typeof window === "undefined") return;

      try {
        // Check if pagefind exists by trying to fetch the script
        const checkResponse = await fetch("/pagefind/pagefind.js");
        if (checkResponse.ok) {
          // Dynamically import the pagefind module
          // @ts-expect-error - Pagefind is loaded from build output
          const pagefind = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
          pagefindRef.current = pagefind as PagefindAPI;
          setIsLoaded(true);
        }
      } catch {
        // Pagefind not available (dev mode or build not complete)
        console.debug("Pagefind not available");
      }
    };

    loadPagefind();
  }, []);

  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    setError(null);

    try {
      if (pagefindRef.current) {
        const search = await pagefindRef.current.search(searchQuery);
        const resultsData = await Promise.all(
          search.results.slice(0, 10).map((r) => r.data())
        );
        setResults(resultsData);
      } else {
        setResults([]);
      }
    } catch {
      console.error("Search error");
      setError("Search failed to load");
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!value.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    debounceRef.current = setTimeout(() => {
      performSearch(value);
    }, 300);
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setError(null);
  };

  if (error && !isSearching) {
    return null;
  }

  return (
    <div className="space-y-4">
      {/* Search input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          {isSearching ? (
            <div className="animate-spin w-5 h-5 border-2 border-[var(--color-accent)] border-t-transparent rounded-full" />
          ) : (
            <Search className="w-5 h-5 text-[var(--color-muted-foreground)]" />
          )}
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder={isLoaded ? "Search posts..." : "Search available after build..."}
          disabled={!isLoaded}
          className="w-full pl-12 pr-10 py-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors disabled:opacity-50"
          aria-label="Search blog posts"
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-[var(--color-muted-foreground)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-3">
          <p className="text-sm text-[var(--color-muted-foreground)]">
            {results.length} result{results.length !== 1 ? "s" : ""} found
          </p>
          <div className="space-y-2">
            {results.map((result) => {
              const slug = result.url?.split("/").pop();
              const title = result.meta?.title || slug || "Untitled";

              return (
                <a
                  key={result.url}
                  href={result.url}
                  className="block p-4 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
                >
                  <h3 className="font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                    {title}
                  </h3>
                  {result.excerpt && (
                    <p className="text-sm text-[var(--color-text-secondary)] mt-1 line-clamp-2">
                      {result.excerpt}
                    </p>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      )}

      {query && !isSearching && results.length === 0 && isLoaded && (
        <p className="text-sm text-[var(--color-muted-foreground)]">
          No results found for &ldquo;{query}&rdquo;
        </p>
      )}
    </div>
  );
}
