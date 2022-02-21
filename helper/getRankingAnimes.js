const { NUMBER_OF_ANIMES_TO_DISPLAY } =  require("../constants.js");
const { getMultipleAnimes } = require('./getMultipleAnimes.js');
const { getRankingAnimeIds } = require('./getRankingAnimeIds.js');

/**
 *
 * @param {number} numberOfAnimeDisplayed: number of animes that needed to be fetched
 * @param {number} fromRank: starting from the rank (excluding). For example, fromRank = 10 means start at rank 11
 */
async function getRankingAnimes(
  numberOfAnimeDisplayed = NUMBER_OF_ANIMES_TO_DISPLAY,
  fromRank = 0
) {
  const ids = await getRankingAnimeIds(numberOfAnimeDisplayed, fromRank)
  return await getMultipleAnimes(ids)
}


module.exports = {
    getRankingAnimes
}