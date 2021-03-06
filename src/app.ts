import express from "express";
import bunyan from "bunyan";
import path from "path";
import os from "os";

export const app = express();

const logger = bunyan.createLogger({
  name: "logging-app",
  streams: [
    {
      level: "info",
      stream: process.stdout,
    },
    {
      level: "info",
      path: path.join(__dirname, "..", "logs", `logging-app-${os.hostname()}.log`),
    },
  ],
});

app.get("/api/v1/foo", (req, res) => {
  logger.info("/api/v1/foo");
  res.end("bar");
});
