const express = require("express");
const app = express();
const cors = require("cors");
const application = require("./routes/application");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/api/application", application);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is running at: http://localhost:${port}`);
});
