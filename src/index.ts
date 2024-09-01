import express from "express";
import cors from "cors";
import body from "body-parser";

const app = express();

let server;

// setup cors.

app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// setup body parser.

app.use(body.json({ limit: "100kb" }));

// load all routes.

app.use("/recipes", require("./routes/recipes"));

async function startServer() {
  try {
    // Load express app to listen on config port.
    const port = 3000
    server = app.listen(port, () => {
      console.log(`Service ready on :${port}`)
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}

function stop() {
  console.log("Stopping server");
  server.close();
}

export { server, startServer, stop };

startServer();