
export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  color: string;
  icon: 'home' | 'briefcase';
}
