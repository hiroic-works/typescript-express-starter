import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import routes from "./routes";

const app = express();
const port = 8080;

// cors
app.use(
  cors({
    credentials: true,
  })
);

// 圧縮
app.use(compression());

// cookie
app.use(cookieParser());

//Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// serve
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`server running: http://localhost:${port}`);
});

// router
app.use("/", routes());
