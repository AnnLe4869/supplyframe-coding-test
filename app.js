import express from "express";

const app = express();
const PORT = 5000;
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index.ejs", {
        name: "hello world"
    })
});

app.listen(PORT, () =>
  console.log("The server has started at " + PORT)
);
