import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache(),
});

export const GET_ANIME_LIST = gql`
  query (
    $id: Int
    $page: Int
    $perPage: Int
    $type: MediaType = ANIME
    $sort: [MediaSort]
    $genre: String
    $search: String
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
      }
      media(id: $id, type: $type, sort: $sort, genre: $genre, search: $search) {
        id
        title {
          english
          native
        }
        seasonYear
        description
        coverImage {
          large
        }
        averageScore
        bannerImage
        siteUrl
        hashtag
        genres
      }
    }
  }
`;

export const GET_ANIME = gql`
  query ($id: Int, $type: MediaType = ANIME) {
    Media(id: $id, type: $type) {
      id
      title {
        english
      }
      seasonYear
      description
      coverImage {
        large
      }
      bannerImage
      siteUrl
      genres
      countryOfOrigin
      trailer {
        id
        site
      }
    }
  }
`;

export default client;
