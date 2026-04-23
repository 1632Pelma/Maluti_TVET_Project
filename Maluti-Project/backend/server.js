const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/programmes", require("./routes/programmes"));
//app.use("/api/events", require("./routes/events"));
//app.use("/api/announcements", require("./routes/announcements"));
//app.use("/api/campuses", require("./routes/campuses"));
//app.use("/api/vacancies", require("./routes/vacancies"));

app.get("/", (req, res) => {
  res.send("Maluti TVET API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});