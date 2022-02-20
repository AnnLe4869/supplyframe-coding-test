import axios from "axios";

/**
 *
 * @param {number} numberOfAnimeDisplayed: number of animes that needed to be fetched
 * @param {number} fromRank: starting from the rank (excluding). For example, fromRank = 10 means start at rank 11
 */
export default async function getRankingAnimes(
  numberOfAnimeDisplayed = 10,
  fromRank = 0
) {
  const endpoint = `https://api.myanimelist.net/v2/anime/ranking`;
  const { data } = await axios({
    method: "GET",
    url: endpoint,
    params: {
      offset: fromRank,
      ranking_type: "all",
      limit: numberOfAnimeDisplayed,
    },
    headers: {
      "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
    },
  });

  const formattedData = data.data.map(anime => ({
    animeId: anime.node.id,
    animeTitle: anime.node.title,
    animeRanking: anime.ranking,
    animePictures: {
      medium: anime.node.main_picture.medium,
      large: anime.node.main_picture.large
    }
  }))

  return formattedData;
}
