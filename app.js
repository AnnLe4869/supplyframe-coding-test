import express from "express";
import "dotenv/config";
import getRankingAnimes from "./helper/getRankingAnimes.js";
import { NUMBER_OF_ANIMES_TO_DISPLAY, STARTING_RANK } from "./constants.js";

const app = express();
const PORT = 5000;
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const page = req.query.page ? Math.ceil(req.query.page) : STARTING_RANK
    if(page < 0){
      res.status(500)
      res.render("error")
    }
    
    const data  = await getRankingAnimes(NUMBER_OF_ANIMES_TO_DISPLAY, NUMBER_OF_ANIMES_TO_DISPLAY * page)
    res.render("index.ejs", {
      animes: data
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("The server has started at " + PORT));
