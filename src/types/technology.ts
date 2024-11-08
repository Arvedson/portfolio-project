// src/types/technology.ts

export interface TechnologyItem {
    description: string;
    usage: string;
    icon: string;
  }
  
  export interface Technologies {
    [key: string]: TechnologyItem;
  }
  