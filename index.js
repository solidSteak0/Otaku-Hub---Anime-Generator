import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://api.jikan.moe/v4";

app.use(express.static("public"));

app.get("/", async (req, res) => {

  try {
    const response = await axios.get(API_URL + "/random/anime");
    const anime = response.data.data;
    const recentGen = [
      {}
    ]

  // Assign the data
    const title = anime.title;
    const images = anime.images;
    const type = anime.type;
    const episodes = anime.episodes;
    const status = anime.status;
    const rating = anime.rating; // Maturity rating (e.g., PG-13)
    const score = anime.score;
    const scored_by = anime.scored_by; // Number of people who scored it
    const rank = anime.rank;
    const popularity = anime.popularity;
    const season = anime.season;
    const year = anime.year;
    const background = anime.background;
    const synopsis = anime.synopsis;
    const genres = anime.genres;
    const duration = anime.duration;

    // Pass all data to EJS template
    res.render("index.ejs", {
      anime, // Pass the entire object
      // Also pass individual properties for easier access 
      title,
      images,
      type,
      episodes,
      status,
      rating,
      score,
      scored_by,
      rank,
      popularity,
      season,
      year,
      background,
      synopsis,
      genres,
      duration
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
 try {
    const response = await axios.get(API_URL + "/random/anime");
    const anime = response.data.data;
    console.log(anime);

  // Assign the data
    const title = anime.title;
    const images = anime.images?.jpg;
    const type = anime.type;
    const episodes = anime.episodes;
    const status = anime.status;
    const rating = anime.rating; // Maturity rating (e.g., PG-13)
    const score = anime.score;
    const scored_by = anime.scored_by; // Number of people who scored it
    const rank = anime.rank;
    const popularity = anime.popularity;
    const season = anime.season;
    const year = anime.year;
    const background = anime.background;
    const synopsis = anime.synopsis;
    const genres = anime.genres;
    const duration = anime.duration;

    // Pass all data to EJS template
    res.render("index.ejs", {
      anime, // Pass the entire object
      // Also pass individual properties for easier access cd
      title,
      images,
      type,
      episodes,
      status,
      rating,
      score,
      scored_by,
      rank,
      popularity,
      season,
      year,
      background,
      synopsis,
      genres,
      duration
    });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

