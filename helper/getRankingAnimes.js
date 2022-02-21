import axios from "axios";

import { NUMBER_OF_ANIMES_TO_DISPLAY } from "../constants.js";

/**
 *
 * @param {number} numberOfAnimeDisplayed: number of animes that needed to be fetched
 * @param {number} fromRank: starting from the rank (excluding). For example, fromRank = 10 means start at rank 11
 */
export default async function getRankingAnimes(
  numberOfAnimeDisplayed = NUMBER_OF_ANIMES_TO_DISPLAY,
  fromRank = 0
) {
  const rankingEndpoint = `https://api.myanimelist.net/v2/anime/ranking`;

  const { data: animeList } = await axios({
    method: "GET",
    url: rankingEndpoint,
    params: {
      offset: fromRank,
      ranking_type: "all",
      limit: numberOfAnimeDisplayed,
    },
    headers: {
      "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
    },
  });

  const animeIds = animeList.data.map((anime) => anime.node.id);

  const animeDetails = (
    await Promise.all(
      animeIds.map((animeId) =>
        axios({
          method: "GET",
          url: `https://api.myanimelist.net/v2/anime/${animeId}`,
          params: {
            fields:
              "id, title, synopsis, mean, rank, start_season, num_episodes, start_date, end_date, popularity",
          },
          headers: {
            "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
          },
        })
      )
    )
  ).map((data) => data.data);
  
  const formattedData = animeDetails.map((anime) => ({
    id: anime.id,
    title: anime.title,
    synopsis: anime.synopsis.substring(0, 600),
    mean: anime.mean,
    ranking: anime.rank,
    numberOfEpisodes: anime.num_episodes,
    pictures: {
      medium: anime.main_picture.medium,
      large: anime.main_picture.large,
    },
    startDate: anime.start_data,
    endDate: anime.end_data,
    popularity: anime.popularity
  })).sort((first, second) => first.ranking - second.ranking)

  return formattedData;
}
