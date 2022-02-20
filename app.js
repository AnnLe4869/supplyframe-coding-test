import express from "express";
import "dotenv/config";
import getRankingAnimes from "./helper/getRankingAnimes.js";

const app = express();
const PORT = 5000;
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const data  = await getRankingAnimes()
    res.render("index.ejs", {
      name: "hello world",
      image: "something"
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log("The server has started at " + PORT));
