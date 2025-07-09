import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/api", routes);

//rutas
app.use("/", (req, res) => {
  res.send("API is running");
});

export default app;
