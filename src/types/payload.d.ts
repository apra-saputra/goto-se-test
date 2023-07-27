type MediaType = {
  id: number;
  title: {
    english: string;
    native: string;
  };
  seasonYear: number;
  averageScore: number;
  countryOfOrigin: string;
  description: string;
  coverImage: {
    large: string;
  };
  bannerImage: string;
  siteUrl: string;
  popularity: number;
  hashtag: string;
  genres: string[];
  averageScore: number;
  trailer: {
    id: string;
    site: string;
  };
};

type PageInfo = {
  currentPage: number;
  hasNextPage: boolean;
  lastPage: number;
  perPage: number;
  total: number;
};

type PayloadType = {
  Page: {
    media: MediaType[];
    pageInfo: PageInfo;
  };
};

type PayloadAnime = {
  Media: MediaType;
};
