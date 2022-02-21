import axios from "axios";
import { getRankingAnimeIds } from "../getRankingAnimeIds";

const data = {
  data: {
    data: [
      {
        node: {
          id: 820,
          title: "Ginga Eiyuu Densetsu",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/13/13225.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/13/13225l.jpg",
          },
        },
        ranking: {
          rank: 11,
        },
      },
      {
        node: {
          id: 34096,
          title: "Gintama.",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/3/83528.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/3/83528l.jpg",
          },
        },
        ranking: {
          rank: 12,
        },
      },
      {
        node: {
          id: 35180,
          title: "3-gatsu no Lion 2nd Season",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/3/88469.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/3/88469l.jpg",
          },
        },
        ranking: {
          rank: 13,
        },
      },
      {
        node: {
          id: 28851,
          title: "Koe no Katachi",
          main_picture: {
            medium:
              "https://api-cdn.myanimelist.net/images/anime/1122/96435.jpg",
            large:
              "https://api-cdn.myanimelist.net/images/anime/1122/96435l.jpg",
          },
        },
        ranking: {
          rank: 14,
        },
      },
      {
        node: {
          id: 37987,
          title: "Violet Evergarden Movie",
          main_picture: {
            medium:
              "https://api-cdn.myanimelist.net/images/anime/1825/110716.jpg",
            large:
              "https://api-cdn.myanimelist.net/images/anime/1825/110716l.jpg",
          },
        },
        ranking: {
          rank: 15,
        },
      },
      {
        node: {
          id: 4181,
          title: "Clannad: After Story",
          main_picture: {
            medium:
              "https://api-cdn.myanimelist.net/images/anime/1299/110774.jpg",
            large:
              "https://api-cdn.myanimelist.net/images/anime/1299/110774l.jpg",
          },
        },
        ranking: {
          rank: 16,
        },
      },
      {
        node: {
          id: 918,
          title: "Gintama",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/10/73274.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/10/73274l.jpg",
          },
        },
        ranking: {
          rank: 17,
        },
      },
      {
        node: {
          id: 15335,
          title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien Nare",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/10/51723.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/10/51723l.jpg",
          },
        },
        ranking: {
          rank: 18,
        },
      },
      {
        node: {
          id: 47778,
          title: "Kimetsu no Yaiba: Yuukaku-hen",
          main_picture: {
            medium:
              "https://api-cdn.myanimelist.net/images/anime/1908/120036.jpg",
            large:
              "https://api-cdn.myanimelist.net/images/anime/1908/120036l.jpg",
          },
        },
        ranking: {
          rank: 19,
        },
      },
      {
        node: {
          id: 2904,
          title: "Code Geass: Hangyaku no Lelouch R2",
          main_picture: {
            medium: "https://api-cdn.myanimelist.net/images/anime/4/9391.jpg",
            large: "https://api-cdn.myanimelist.net/images/anime/4/9391l.jpg",
          },
        },
        ranking: {
          rank: 20,
        },
      },
    ],
    paging: {
      previous:
        "https://api.myanimelist.net/v2/anime/ranking?offset=0&ranking_type=all&limit=10",
      next: "https://api.myanimelist.net/v2/anime/ranking?offset=20&ranking_type=all&limit=10",
    },
  },
};

beforeEach(() => {
  jest.resetModules();
});

test("test getRankingAnimeIds with mocking request", async () => {
  const getMock = jest.spyOn(axios, "get");
  getMock.mockResolvedValue(data);

  const ids = await getRankingAnimeIds(10, 10);
  expect(ids).toEqual(data.data.data.map((anime) => anime.node.id));
});

test("test getRankingAnimeIds with actual request", async () => {
  const ids = await getRankingAnimeIds(10, 10);
  expect(ids).toEqual(data.data.data.map((anime) => anime.node.id));
});
