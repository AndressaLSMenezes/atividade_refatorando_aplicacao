import app from "./app";
import "./routers/index.js";

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
