import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { LearningTopic } from "../../types";

interface TopicListItemProps {
  topic: LearningTopic;
  index: number;
}

export function TopicListItem({ topic, index }: TopicListItemProps) {
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <Link 
      to={`#`}
      className="flex items-center justify-between p-4 mb-3 border border-border rounded-lg bg-card hover:border-primary/50 hover:bg-secondary/20 transition-all group"
    >
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-muted-foreground/50 tabular-nums">
          {formattedNumber}
        </span>
        <h3 className="font-medium text-lg">{topic.title}</h3>
      </div>
      <ArrowRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </Link>
  );
}
