export interface Simulator {
  id: string;
  title: string;
  description: string;
  url: string;
  click_count: number;
}

export interface User {
  id: string;
  email: string;
}