require("dotenv").config();
const fetch = require("node-fetch");
const urlAPI = process.env.APIURL;
const apiKey = process.env.API_KEY;

const fetchFilm = async (titulo = "") => {
  const url = `${urlAPI}?t=${encodeURIComponent(titulo)}&apikey=${apiKey}`;
  try {
    const res = await fetch(url);
    const pelicula = await res.json();

    if (pelicula.Response === "False") {
      return null;
    }

    return pelicula;
  } catch (error) {
    return null;
  }
};

module.exports = fetchFilm;
