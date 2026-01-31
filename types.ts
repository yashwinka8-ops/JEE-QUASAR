
export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  color: string;
  type: 'planet' | 'nebula' | 'star';
  coordinates: { x: number; y: number; z: number };
}

export interface GroundingSource {
  title: string;
  url: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  sources?: GroundingSource[];
}

export enum GalaxyStatus {
  IDLE = 'IDLE',
  NAVIGATING = 'NAVIGATING',
  SCANNING = 'SCANNING'
}
