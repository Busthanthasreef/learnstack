import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Topic } from "../../types";
import { Card, CardHeader, CardTitle, CardFooter } from "./Card";
import { Badge } from "./Badge";

interface TopicCardProps {
  topic: Topic;
  index?: number;
}

export function TopicCard({ topic, index }: TopicCardProps) {
  const formattedNumber = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link to={`/details/${topic.slug}`} className="block h-full group outline-none">
      <Card className="flex flex-col h-full bg-background border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 p-2">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-4">
            <Badge 
              variant={
                topic.difficulty === 'Beginner' ? 'default' : 
                topic.difficulty === 'Intermediate' ? 'secondary' : 
                'destructive'
              } 
              className="font-medium"
            >
              {topic.difficulty || "All Levels"}
            </Badge>
            {topic.category && (
              <span className="text-xs font-medium text-muted-foreground">{topic.category}</span>
            )}
          </div>
          <div className="flex items-center gap-4">
            {formattedNumber && (
              <span className="text-2xl font-bold text-muted-foreground/40 tabular-nums">
                {formattedNumber}
              </span>
            )}
            {topic.icon && (
              <div className="w-16 h-16 rounded-md bg-muted/20 p-2.5 flex items-center justify-center shrink-0 border border-border">
                <img src={topic.icon} alt={`${topic.title} icon`} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            )}
            <CardTitle className="text-xl md:text-2xl font-bold">{topic.title}</CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="pt-2 mt-auto">
          <div className="inline-flex h-10 py-2 px-4 text-sm bg-secondary text-secondary-foreground rounded-md font-medium w-full justify-between items-center group-hover:bg-secondary/80 transition-colors pointer-events-none">
            Start Learning
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
