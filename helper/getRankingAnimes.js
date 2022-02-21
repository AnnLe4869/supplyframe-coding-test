import { NUMBER_OF_ANIMES_TO_DISPLAY } from "../constants.js";
import { getMultipleAnimes } from "./getMultipleAnimes.js";
import { getRankingAnimeIds } from "./getRankingAnimeIds.js";

/**
 *
 * @param {number} numberOfAnimeDisplayed: number of animes that needed to be fetched
 * @param {number} fromRank: starting from the rank (excluding). For example, fromRank = 10 means start at rank 11
 */
export async function getRankingAnimes(
  numberOfAnimeDisplayed = NUMBER_OF_ANIMES_TO_DISPLAY,
  fromRank = 0
) {
  const ids = await getRankingAnimeIds(numberOfAnimeDisplayed, fromRank);
  return await getMultipleAnimes(ids);
}

