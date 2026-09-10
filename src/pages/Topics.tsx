import { useState, useMemo, useEffect } from "react";
import { Plus, Search, Inbox } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { Button } from "../components/ui/Button";
import { TopicCard } from "../components/ui/TopicCard";
import { AddTopicModal } from "../components/ui/AddTopicModal";
import { useTopics } from "../hooks/useTopics";
import { searchMatches } from "../utils/search";
import { useDebounce } from "../hooks/useDebounce";

export function Topics() {
  const { topics, addTopic } = useTopics();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [difficultyFilter, setDifficultyFilter] = useState("All Difficulties");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [showSuccessBadge, setShowSuccessBadge] = useState(false);

  useEffect(() => {
    document.title = "Topics — LearnStack";
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(topics.map(t => t.category).filter(Boolean));
    return ["All Categories", ...Array.from(cats)];
  }, [topics]);

  const filteredTopics = useMemo(() => {
    return topics.filter((topic) => {
      // 1. Search filter
      const matchesSearch = 
        searchMatches(topic.title, debouncedSearchQuery) ||
        searchMatches(topic.description, debouncedSearchQuery) ||
        searchMatches(topic.category, debouncedSearchQuery) ||
        (topic.tags && topic.tags.some(tag => searchMatches(tag, debouncedSearchQuery)));

      // 2. Category filter
      const matchesCategory = 
        categoryFilter === "All Categories" || 
        topic.category === categoryFilter;

      // 3. Difficulty filter
      const matchesDifficulty = 
        difficultyFilter === "All Difficulties" || 
        topic.difficulty === difficultyFilter;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [topics, debouncedSearchQuery, categoryFilter, difficultyFilter]);

  const handleAddTopic = (newTopic: any) => {
    addTopic(newTopic);
    setIsAddModalOpen(false);
    
    // Show subtle success feedback
    setShowSuccessBadge(true);
    setTimeout(() => setShowSuccessBadge(false), 3000);
  };

  return (
    <div className="flex flex-col w-full pb-20">
      <section className="bg-muted/30 border-b border-border py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <h1 className="text-4xl font-bold tracking-tight text-foreground">Topics</h1>
                {showSuccessBadge && (
                  <span className="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-500/20 animate-in fade-in duration-300">
                    Topic Added
                  </span>
                )}
              </div>
              <p className="text-lg text-muted-foreground">
                Explore our catalog of programming concepts. Find what you need, learn at your own pace, and master modern development.
              </p>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => setIsAddModalOpen(true)}
              className="gap-2 shrink-0 shadow-sm"
            >
              <Plus size={16} />
              Add Topic
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-8 sticky top-14 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border shadow-sm">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:max-w-xs md:max-w-md lg:max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-background shadow-sm"
                aria-label="Search topics"
              />
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
              <Select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-[140px] sm:w-[160px] shrink-0 bg-background shadow-sm"
                aria-label="Filter by category"
              >
                {categories.map((cat) => (
                  <option key={cat as string} value={cat as string}>{cat as string}</option>
                ))}
              </Select>
              
              <Select 
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="w-[140px] sm:w-[150px] shrink-0 bg-background shadow-sm"
                aria-label="Filter by difficulty"
              >
                <option value="All Difficulties">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </Select>
            </div>
          </div>
        </Container>
      </section>

      <Container className="pt-12">
        {topics.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground mb-2">
              <Inbox size={32} />
            </div>
            <h2 className="text-2xl font-semibold">No topics available</h2>
            <p className="text-muted-foreground max-w-md">
              Your learning topics will appear here. Add a new topic to get started.
            </p>
            <Button onClick={() => setIsAddModalOpen(true)} className="mt-4 gap-2">
              <Plus size={16} /> Add Topic
            </Button>
          </div>
        ) : filteredTopics.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
            <Search size={40} className="text-muted-foreground/50 mb-2" />
            <h2 className="text-2xl font-semibold">No matching topics found.</h2>
            <p className="text-muted-foreground max-w-sm">
              We couldn't find any topics matching your current search and filters.
            </p>
            <Button 
              variant="ghost" 
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("All Categories");
                setDifficultyFilter("All Difficulties");
              }}
            >
              Clear filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} index={topics.findIndex(t => t.id === topic.id)} />
            ))}
          </div>
        )}
      </Container>

      <AddTopicModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTopic}
      />
    </div>
  );
}
