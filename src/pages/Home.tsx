import { useEffect, useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Container } from "../components/layout/Container";
import { TopicCard } from "../components/ui/TopicCard";
import { useTopics } from "../hooks/useTopics";
import { searchMatches } from "../utils/search";
import { useDebounce } from "../hooks/useDebounce";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    document.title = "LearnStack — Learn Programming. Build Your Skills.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "A modern, structured platform for learning programming, web development, and the MERN stack.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "A modern, structured platform for learning programming, web development, and the MERN stack.";
      document.head.appendChild(meta);
    }
  }, []);

  const { topics } = useTopics();

  const filteredTopics = useMemo(() => {
    return topics
      .map((topic, index) => ({ topic, originalIndex: index }))
      .filter(({ topic }) => 
        searchMatches(topic.title, debouncedSearchQuery) || 
        searchMatches(topic.description, debouncedSearchQuery) ||
        searchMatches(topic.category, debouncedSearchQuery) ||
        (topic.tags && topic.tags.some(tag => searchMatches(tag, debouncedSearchQuery)))
      );
  }, [topics, debouncedSearchQuery]);

  return (
    <div className="flex flex-col w-full">
      <section className="pt-2 pb-8 md:pt-4 md:pb-12">
        <Container>
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Find MERN Stack Topics Here!
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive curriculum and level up your full-stack development skills today.
            </p>
          </div>

          <div className="mb-10 relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-shadow"
              placeholder="Search topics (e.g., JavaScript, MongoDB)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredTopics.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No matching topics found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTopics.map(({ topic, originalIndex }) => (
                <TopicCard key={topic.id} topic={topic} index={originalIndex} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
