import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";

const app = express();
const port = 3000;

const __dirname = path
  .dirname(new URL(import.meta.url).pathname)
  .replace(/^\/+/, "");

//HTTP logger
app.use(morgan("dev"));

//Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources", "views"));
console.log("🚀 ~ __dirname:", __dirname);

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
