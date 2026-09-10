import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { Book, Lightbulb, Code, ArrowLeft } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Badge } from "../components/ui/Badge";
import { TopicListItem } from "../components/ui/TopicListItem";
import { QuestionItem } from "../components/ui/QuestionItem";
import { useTopics } from "../hooks/useTopics";
import { useTopicContent } from "../hooks/useTopicContent";

type TabType = "all-topics" | "t-questions" | "p-questions";

export function TopicDetails() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const { getTopic } = useTopics();
  const [activeTab, setActiveTab] = useState<TabType>("all-topics");

  const topic = topicSlug ? getTopic(topicSlug) : undefined;
  const content = useTopicContent(topicSlug);

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} | LearnStack`;
    }
  }, [topic]);

  if (!topic || !content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Compact Header & Tabs */}
      <section className="bg-background border-b border-border sticky top-[73px] z-10 pt-4 md:pt-0">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0 relative">
            
            {/* Left Side: Go Back */}
            <div className="order-1 flex-1 flex items-center shrink-0 md:py-4">
              <Link 
                to="/" 
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-secondary/30 hover:bg-secondary/60 px-3 py-1.5 rounded-md"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Go Back</span>
              </Link>
            </div>

            {/* Center: Tabs */}
            <div className="order-3 md:order-2 flex shrink-0 items-center justify-start md:justify-center overflow-x-auto hide-scrollbar -mb-px w-full md:w-auto">
              <button
                onClick={() => setActiveTab("all-topics")}
                className={`flex items-center gap-2 px-4 md:px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "all-topics" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Book size={16} />
                All Topics
              </button>
              <button
                onClick={() => setActiveTab("t-questions")}
                className={`flex items-center gap-2 px-4 md:px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "t-questions" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Lightbulb size={16} />
                T-Questions
              </button>
              <button
                onClick={() => setActiveTab("p-questions")}
                className={`flex items-center gap-2 px-4 md:px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === "p-questions" 
                    ? "border-primary text-primary" 
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <Code size={16} />
                P-Questions
              </button>
            </div>

            {/* Right Side: Topic Info */}
            <div className="order-2 md:order-3 absolute right-0 top-0 md:top-auto md:relative flex items-center justify-end flex-row-reverse md:flex-row md:flex-1 md:justify-end gap-3 shrink-0 md:py-4 w-auto md:w-auto z-10">
              {topic.icon && (
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted/20 p-1.5 md:p-2 flex items-center justify-center shrink-0 border border-border shadow-sm">
                  <img src={topic.icon} alt={`${topic.title} icon`} className="w-full h-full object-contain drop-shadow-sm" />
                </div>
              )}
              <div className="flex flex-col items-end text-right">
                <h1 className="text-lg md:text-2xl font-bold tracking-tight text-foreground">{topic.title}</h1>
                <div className="flex items-center justify-end gap-2 mt-0.5">
                  <span className="hidden md:inline text-xs font-medium text-muted-foreground">
                    {topic.category}
                  </span>
                  <span className="hidden md:inline text-muted-foreground text-xs">•</span>
                  {topic.difficulty && (
                    <Badge 
                      variant={
                        topic.difficulty === 'Beginner' ? 'default' : 
                        topic.difficulty === 'Intermediate' ? 'secondary' : 
                        'destructive'
                      } 
                      className="font-medium px-2 py-0 h-4 text-[10px]"
                    >
                      {topic.difficulty}
                    </Badge>
                  )}
                  <span className="md:hidden text-muted-foreground text-xs">•</span>
                  <span className="md:hidden text-xs font-medium text-muted-foreground">
                    {topic.category}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Content Area */}
      <section className="flex-1 py-8 md:py-12 bg-background/50">
        <Container>
          <div className="max-w-3xl mx-auto">
            {activeTab === "all-topics" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {content.allTopics.length > 0 ? (
                  content.allTopics.map((item, index) => (
                    <TopicListItem key={item.id} topic={item} index={index} />
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Content for All Topics will be available soon.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "t-questions" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {content.theoryQuestions.length > 0 ? (
                  content.theoryQuestions.map((q, index) => (
                    <QuestionItem key={q.id} index={index} question={q.question} answer={q.answer} />
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Theory Questions will be available soon.</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "p-questions" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {content.practicalQuestions.length > 0 ? (
                  content.practicalQuestions.map((q, index) => (
                    <QuestionItem key={q.id} index={index} question={q.question} answer={q.solution} />
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <p>Practical Questions will be available soon.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
}
