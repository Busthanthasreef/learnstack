import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Book, Lightbulb, Code } from "lucide-react";
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
      {/* Header */}
      <section className="bg-card border-b border-border py-12 md:py-16">
        <Container>
          <div className="flex flex-col items-center text-center">
            {topic.icon && (
              <div className="w-20 h-20 rounded-xl bg-muted/20 p-3 mb-6 flex items-center justify-center shrink-0 border border-border shadow-sm">
                <img src={topic.icon} alt={`${topic.title} icon`} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">{topic.title}</h1>
            <div className="flex items-center justify-center gap-2">
              {topic.category && (
                <span className="text-sm font-medium text-muted-foreground">{topic.category}</span>
              )}
              {topic.category && topic.difficulty && (
                <span className="text-muted-foreground">•</span>
              )}
              {topic.difficulty && (
                <Badge 
                  variant={
                    topic.difficulty === 'Beginner' ? 'default' : 
                    topic.difficulty === 'Intermediate' ? 'secondary' : 
                    'destructive'
                  } 
                  className="font-medium"
                >
                  {topic.difficulty}
                </Badge>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Tabs */}
      <section className="border-b border-border bg-background sticky top-[73px] z-10">
        <Container>
          <div className="flex items-center overflow-x-auto hide-scrollbar -mb-px">
            <button
              onClick={() => setActiveTab("all-topics")}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "all-topics" 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <Book size={18} />
              All Topics
            </button>
            <button
              onClick={() => setActiveTab("t-questions")}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "t-questions" 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <Lightbulb size={18} />
              T-Questions
            </button>
            <button
              onClick={() => setActiveTab("p-questions")}
              className={`flex items-center gap-2 px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "p-questions" 
                  ? "border-primary text-primary" 
                  : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              <Code size={18} />
              P-Questions
            </button>
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
