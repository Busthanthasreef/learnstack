export interface CodeExample {
  id: string;
  language: string;
  code: string;
  title?: string;
}

export interface LessonSection {
  id: string;
  title: string;
  content: string; // Markdown or plain text
  codeExample?: CodeExample;
}

export interface Lesson {
  id: string;
  slug: string;
  title: string;
  description: string;
  sections: LessonSection[];
}

export interface Topic {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon?: string;
  category?: string;
  tags?: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  isFeatured?: boolean;
  lessons: Lesson[];
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  topicId: string;
  order: number;
}

export interface Question {
  id: string;
  text: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
}

export interface LearningTopic {
  id: string;
  title: string;
}

export interface TQuestion {
  id: string;
  question: string;
  answer?: string;
}

export interface PQuestion {
  id: string;
  question: string;
  solution?: string;
}

export interface TopicContent {
  topicId: string;
  allTopics: LearningTopic[];
  theoryQuestions: TQuestion[];
  practicalQuestions: PQuestion[];
}
