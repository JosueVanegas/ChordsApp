import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import songRouter from "./routes/song.route.js";
import authRouter from "./routes/auth.route.js";
import path from "path";
const app = express();
app.use(cookieParser());
app.disable("x-powered-by");
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
const publicPath = path.join(process.cwd(), "public");
app.use("/public", express.static(publicPath));
app.use("/api", authRouter);
app.use("/api", songRouter);
app.use("/api", userRouter);
app.use((req, res, next) => {
  return res.status(404).json({
    message: "not found",
  });
});
export default app;
