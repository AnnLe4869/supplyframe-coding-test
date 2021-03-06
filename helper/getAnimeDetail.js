import axios from "axios";

export async function getAnimeDetail(id) {
  const { data } = await axios.get(`https://api.myanimelist.net/v2/anime/${id}`, {
    params: {
      fields:
        "id, title, synopsis, mean, rank, start_season, num_episodes, start_date, end_date, popularity",
    },
    headers: {
      "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID,
    },
  });

  return data;
}

