import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Container } from "../components/layout/Container";
import { TopicCard } from "../components/ui/TopicCard";
import { useTopics } from "../hooks/useTopics";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredTopics = topics
    .map((topic, index) => ({ topic, originalIndex: index }))
    .filter(({ topic }) => 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      topic.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="flex flex-col w-full">
      <section className="pt-6 pb-8 md:pt-8 md:pb-12">
        <Container>
          <div className="mb-6 relative max-w-xl mx-auto">
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
              <p className="text-muted-foreground text-lg">No topics found matching "{searchQuery}"</p>
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
