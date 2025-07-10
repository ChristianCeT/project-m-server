import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

//rutas
app.use("/", (req, res) => {
  res.send("API is running");
});

export default app;
