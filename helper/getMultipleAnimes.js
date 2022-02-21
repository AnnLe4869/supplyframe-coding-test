import { getAnimeDetail } from "./getAnimeDetail.js";

export async function getMultipleAnimes(ids) {
  const animeDetails = await Promise.all(ids.map(getAnimeDetail));
  const formattedData = animeDetails
    .map((anime) => ({
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
      popularity: anime.popularity,
    }))
    .sort((first, second) => first.ranking - second.ranking);

  return formattedData;
}


