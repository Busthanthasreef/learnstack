import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Topic } from "../../types";
import { Card, CardHeader, CardTitle, CardFooter } from "./Card";

interface TopicCardProps {
  topic: Topic;
  index?: number;
}

import React from "react";

export const TopicCard = React.memo(function TopicCard({ topic, index }: TopicCardProps) {
  const formattedNumber = index !== undefined ? String(index + 1).padStart(2, '0') : null;

  return (
    <Link to={`/details/${topic.slug}`} className="block h-full group outline-none">
      <Card className="flex flex-col h-full bg-background border-border hover:border-primary/50 hover:shadow-lg hover:scale-105 transition-all duration-300 p-2.5 md:p-3">
        <CardHeader className="pb-2.5">
          <div className="flex items-center gap-2.5">
            {formattedNumber && (
              <span className="text-base md:text-lg font-bold text-muted-foreground/30 tabular-nums">
                {formattedNumber}
              </span>
            )}
            {topic.icon && (
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-md bg-muted/20 p-1.5 flex items-center justify-center shrink-0 border border-border">
                <img src={topic.icon} alt={`${topic.title} icon`} className="w-full h-full object-contain drop-shadow-sm" />
              </div>
            )}
            <CardTitle className="text-sm md:text-base font-bold whitespace-pre-line leading-tight">{topic.title}</CardTitle>
          </div>
        </CardHeader>
        <CardFooter className="pt-0 mt-auto">
          <div className="inline-flex h-8 py-1 px-3 text-xs bg-primary text-primary-foreground rounded-md font-semibold w-full justify-between items-center group-hover:bg-primary/90 shadow-sm transition-colors pointer-events-none">
            Start Learning
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
});
