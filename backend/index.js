import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("La Comanda API funcionando correctamente");
});

app.listen(4000, () => {
  console.log("Server listening...");
});
