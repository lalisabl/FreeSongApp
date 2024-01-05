require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const songRoutes = require("./routers/songRoutes");
app.use("/api/songs", songRoutes);
app.listen(PORT, () => {
  `Server running on${PORT} port!`;
});
