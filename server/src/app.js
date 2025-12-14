import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "10mb",
  })
);

app.use(urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

export default app;
