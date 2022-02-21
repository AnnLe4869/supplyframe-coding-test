import axios from "axios";
import { NUMBER_OF_ANIMES_TO_DISPLAY } from "../constants.js";

/**
 *
 * @param {number} numberOfAnimeDisplayed: number of animes that needed to be fetched
 * @param {number} fromRank: starting from the rank (excluding). For example, fromRank = 10 means start at rank 11
 */
export async function getRankingAnimeIds(
  numberOfAnimeDisplayed = NUMBER_OF_ANIMES_TO_DISPLAY,
  fromRank = 0
) {
  const rankingEndpoint = `https://api.myanimelist.net/v2/anime/ranking`;
  const { data: animeList } = await axios.get(rankingEndpoint, {
    params: {
      offset: fromRank,
      ranking_type: "all",
      limit: numberOfAnimeDisplayed,
    },
    headers: {
      "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
    },
  });

  return animeList.data.map((anime) => anime.node.id);
}

