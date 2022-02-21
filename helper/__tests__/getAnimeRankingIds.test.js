import axios from "axios";

jest.mock("axios");

test("test getRankingAnime", async () => {
  axios.get
    .mockImplementationOnce(() =>
      Promise.resolve({
        name: "hello",
      })
    )
    .mockImplementationOnce(() =>
      Promise.resolve({
        age: 10,
      })
    );
});
