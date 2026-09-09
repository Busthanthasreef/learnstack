import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QuestionItemProps {
  index: number;
  question: string;
  answer?: string;
}

export function QuestionItem({ index, question, answer }: QuestionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const formattedNumber = String(index + 1).padStart(2, '0');

  return (
    <div className="mb-3 border border-border rounded-lg bg-card overflow-hidden transition-all">
      <button 
        onClick={() => answer && setIsOpen(!isOpen)}
        disabled={!answer}
        className={`w-full flex items-start text-left p-4 ${answer ? 'cursor-pointer hover:bg-secondary/10' : 'cursor-default'}`}
      >
        <span className="text-lg font-bold text-muted-foreground/50 tabular-nums mr-4 mt-0.5 shrink-0">
          {formattedNumber}
        </span>
        <h3 className="font-medium text-lg flex-grow pr-4">{question}</h3>
        {answer && (
          <div className="shrink-0 mt-1 text-muted-foreground transition-transform">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        )}
      </button>
      
      {isOpen && answer && (
        <div className="p-4 pt-0 border-t border-border/10 bg-secondary/5">
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none pt-4 text-muted-foreground whitespace-pre-wrap">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}
