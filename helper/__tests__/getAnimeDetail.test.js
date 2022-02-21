import axios from "axios";
import { getAnimeDetail } from "../getAnimeDetail";

const data = {
  data: {
    id: 35180,
    title: "3-gatsu no Lion 2nd Season",
    main_picture: {
      medium: "https://api-cdn.myanimelist.net/images/anime/3/88469.jpg",
      large: "https://api-cdn.myanimelist.net/images/anime/3/88469l.jpg",
    },
    synopsis:
      "Now in his second year of high school, Rei Kiriyama continues pushing through his struggles in the professional shogi world as well as his personal life. Surrounded by vibrant personalities at the shogi hall, the school club, and in the local community, his solitary shell slowly begins to crack. Among them are the three Kawamoto sisters—Akari, Hinata, and Momo—who forge an affectionate and familial bond with Rei. Through these ties, he realizes that everyone is burdened by their own emotional hardships and begins learning how to rely on others while supporting them in return. \n\nNonetheless, the life of a professional is not easy. Between tournaments, championships, and title matches, the pressure mounts as Rei advances through the ranks and encounters incredibly skilled opponents. As he manages his relationships with those who have grown close to him, the shogi player continues to search for the reason he plays the game that defines his career.\n\n[Written by MAL Rewrite]",
    mean: 8.96,
    rank: 13,
    start_season: {
      year: 2017,
      season: "fall",
    },
    num_episodes: 22,
    start_date: "2017-10-14",
    end_date: "2018-03-31",
    popularity: 525,
  },
};

beforeEach(() => {
  jest.resetModules();
});

test("test getAnimeDetail with mocking request", async () => {
  const getMock = jest.spyOn(axios, "get");
  getMock.mockResolvedValue(data);

  const anime = await getAnimeDetail(35180);
  expect(anime).toEqual(data.data);
});


test("test getAnimeDetail with actual request", async () => {
    const anime = await getAnimeDetail(35180);
    expect(anime).toEqual(data.data);
  });