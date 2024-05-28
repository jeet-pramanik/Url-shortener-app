const express = require("express");
const shortid = require("shortid");
const path = require("path");

const app = express();
const port = 3000;

// In-memory storage for URL mappings
const urlMappings = {};

app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/shorten", (req, res) => {
  const originalUrl = req.body.url;
  const urlId = shortid.generate();
  urlMappings[urlId] = originalUrl;
  res.render("index", {
    shortUrl: `${req.protocol}://${req.get("host")}/go1/${urlId}`,
  });
});

app.get("/go1/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.render("redirect1", { urlId: urlId });
  } else {
    res.status(404).send("URL not found");
  }
});

app.get("/go2/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.render("redirect2", { urlId: urlId });
  } else {
    res.status(404).send("URL not found");
  }
});

app.get("/go3/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.render("redirect3", { urlId: urlId });
  } else {
    res.status(404).send("URL not found");
  }
});

app.get("/go4/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.render("redirect4", { urlId: urlId });
  } else {
    res.status(404).send("URL not found");
  }
});

app.get("/go5/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.render("redirect5", { urlId: urlId });
  } else {
    res.status(404).send("URL not found");
  }
});

app.get("/final_redirect/:urlId", (req, res) => {
  const urlId = req.params.urlId;
  if (urlId in urlMappings) {
    res.redirect(urlMappings[urlId]);
  } else {
    res.status(404).send("URL not found");
  }
});

app.listen(port, () => {
  console.log(`URL shortener app listening at http://localhost:${port}`);
});
