export class Movies {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}

export class MoviesResponse {
  count: number;
  next: string;
  previous: string;
  results: Movies[];
}

export class SelectLabels {
    movie: string;
    species: string;
}