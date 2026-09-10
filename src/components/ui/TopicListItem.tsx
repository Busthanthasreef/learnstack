import { ChevronDown, ChevronRight, PlayCircle, FileText } from "lucide-react";
import { useState } from "react";
import type { LearningTopic, LearningSession } from "../../types";

function SessionItem({ session }: { session: LearningSession }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-5 last:mb-0">
      {/* Session Header */}
      <div 
        className="flex items-center justify-between px-3 py-2.5 mb-2 border-b border-border/40 cursor-pointer hover:bg-muted/30 transition-colors rounded-t-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2.5">
          <PlayCircle size={16} className="text-primary/80" />
          <h3 className="text-sm md:text-base font-semibold text-foreground/90">{session.title}</h3>
        </div>
        {isOpen ? <ChevronDown size={16} className="text-muted-foreground" /> : <ChevronRight size={16} className="text-muted-foreground" />}
      </div>

      {/* Main Topics */}
      {isOpen && (
        <div className="pl-4 md:pl-8 space-y-3 pt-2">
          {session.mainTopics.map((mainTopic) => (
            <div key={mainTopic.id} className="bg-card rounded-lg border border-border/40 p-3 hover:border-border/80 transition-colors">
              <h4 className="font-medium text-sm text-foreground mb-2 flex items-center gap-2">
                <FileText size={14} className="text-muted-foreground/80" />
                {mainTopic.title}
              </h4>
              
              {/* Subtopics */}
              {mainTopic.subtopics.length > 0 && (
                <ul className="pl-6 space-y-1.5 border-l border-muted/60 ml-2 mt-2">
                  {mainTopic.subtopics.map((subtopic) => (
                    <li key={subtopic.id} className="text-xs text-muted-foreground flex items-center gap-3 hover:text-foreground transition-colors cursor-pointer relative before:absolute before:w-1.5 before:h-[1px] before:bg-muted-foreground/40 before:-left-[17px]">
                      {subtopic.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface TopicListItemProps {
  topic: LearningTopic;
  index: number;
}

export function TopicListItem({ topic, index }: TopicListItemProps) {
  const formattedNumber = String(index + 1).padStart(2, '0');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 border border-border/60 rounded-xl bg-card overflow-hidden shadow-sm hover:border-primary/30 transition-colors">
      {/* Day Header */}
      <div 
        className="flex items-center justify-between p-4 bg-muted/20 cursor-pointer hover:bg-muted/40 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">
            {formattedNumber}
          </div>
          <h2 className="text-base md:text-lg font-semibold text-foreground">{topic.title}</h2>
        </div>
        {isOpen ? <ChevronDown size={18} className="text-muted-foreground" /> : <ChevronRight size={18} className="text-muted-foreground" />}
      </div>

      {/* Sessions Container */}
      {isOpen && topic.sessions && topic.sessions.length > 0 && (
        <div className="p-2 md:p-4 bg-background/50">
          {topic.sessions.map((session) => (
            <SessionItem key={session.id} session={session} />
          ))}
        </div>
      )}
    </div>
  );
}
