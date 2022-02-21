import express from "express";
import "dotenv/config";
import { getRankingAnimes } from "./helper/getRankingAnimes.js";
import {
  NUMBER_OF_ANIMES_TO_DISPLAY,
  STARTING_RANK,
  TOTAL_NUMBER_OF_ANIMES_EXISTING,
} from "./constants.js";

const app = express();
const PORT = 5000;
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    // the root route and page == 1 is the same
    // all other page remain the same
    const page = req.query.page ? Math.ceil(req.query.page) : STARTING_RANK;
    if (page < 0) {
      res.status(500);
      res.render("error");
    }

    // we have to do page - 1 because our page starting from 1 and our ranking starting from 0
    // for example, page 3 will show ranks from 21 to 30
    const data = await getRankingAnimes(
      NUMBER_OF_ANIMES_TO_DISPLAY,
      NUMBER_OF_ANIMES_TO_DISPLAY * (page - 1)
    );
    res.render("index.ejs", {
      animes: data,
      currentPage: page,
      totalPages: Math.ceil(
        TOTAL_NUMBER_OF_ANIMES_EXISTING / NUMBER_OF_ANIMES_TO_DISPLAY
      ),
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("The server has started at " + PORT));
