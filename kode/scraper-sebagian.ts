export interface ScraperResponse {
  message: string;
  data: Datum[];
}

export interface Datum {
  id: string;
  username: string;
  fullname: string;
  bio: string;
  post_count: number;
  is_analyzed: boolean;
  createdAt: string; // string dari API
}
