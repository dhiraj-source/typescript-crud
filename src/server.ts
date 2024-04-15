import express from "express";
import cors from "cors";
import cookiesParser from "cookie-parser";
import http from "http";
import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";
import connectDB from "../src/config/db/db";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookiesParser());
app.use(bodyParser.json());

dotenv.config();

connectDB();

const server = http.createServer(app);

//router define
import Blog from "./routers/blogs/blogs";

//setting routes
app.use("/api/v1/blog", Blog);

server.listen(8080, () => {
  console.log(`server is runniing on port 8080`);
});
