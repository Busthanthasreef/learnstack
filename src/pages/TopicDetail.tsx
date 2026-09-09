import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, AlertCircle } from "lucide-react";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { useTopics } from "../hooks/useTopics";

export function TopicDetail() {
  const { topicSlug } = useParams<{ topicSlug: string }>();
  const { getTopic } = useTopics();
  
  const topic = topicSlug ? getTopic(topicSlug) : undefined;

  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} — LearnStack`;
    } else {
      document.title = "Topic Not Found — LearnStack";
    }
  }, [topic]);

  if (!topic) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">Topic Not Found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find the topic you're looking for. It may have been removed or the URL is incorrect.
        </p>
        <Link to="/topics">
          <Button variant="outline" className="gap-2">
            <ArrowLeft size={16} /> Back to Topics
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Topic Header */}
      <section className="bg-muted/30 border-b border-border py-10 md:py-16">
        <Container>
          <div className="mb-6 flex items-center text-sm text-muted-foreground gap-2">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/topics" className="hover:text-foreground transition-colors">Topics</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{topic.title}</span>
          </div>
          
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge 
                variant={topic.difficulty === 'Beginner' ? 'default' : topic.difficulty === 'Intermediate' ? 'secondary' : 'destructive'} 
                className="font-medium text-sm px-3 py-1"
              >
                {topic.difficulty || "All Levels"}
              </Badge>
              {topic.category && (
                <Badge variant="outline" className="font-medium text-sm px-3 py-1">
                  {topic.category}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {topic.icon && (
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-muted/30 p-3 flex items-center justify-center shrink-0 border border-border shadow-sm">
                  <img src={topic.icon} alt={`${topic.title} icon`} className="w-full h-full object-contain" />
                </div>
              )}
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
                {topic.title}
              </h1>
            </div>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              {topic.description}
            </p>
            
            <div className="pt-2">
              <Button size="lg" className="px-8">
                Start Learning
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-primary" />
                <span>{topic.lessons.length} {topic.lessons.length === 1 ? 'Lesson' : 'Lessons'}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Self-paced</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Topic Content (Lessons) */}
      <Container className="pt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Lessons</h2>
          
          {topic.lessons.length === 0 ? (
            <div className="rounded-lg border border-dashed border-border p-10 flex flex-col items-center justify-center text-center bg-muted/10">
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">This topic doesn't have lessons yet</h3>
              <p className="text-muted-foreground max-w-sm mb-6">
                We're still working on the content for this topic. Check back later for structured lessons and practice materials.
              </p>
              <Link to="/topics">
                <Button variant="secondary">Browse other topics</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {topic.lessons.map((lesson, index) => (
                <div 
                  key={lesson.id} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors"
                >
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-muted text-muted-foreground font-semibold text-sm shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{lesson.title}</h3>
                      {lesson.description && (
                        <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="shrink-0 sm:self-center self-start" disabled>
                    Start Lesson
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
