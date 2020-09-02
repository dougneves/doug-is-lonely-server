import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World, from express" });
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Hello world app listening on port ${port}!`);
});
