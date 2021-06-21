const express = require("express");
const cors = require("cors");

// custom import
const auth = require("./routes/auth");
const users = require("./routes/users");

const app = express();

app.use(express.json());
app.use(cors({ exposedHeaders: ["auth-token"] }));
app.use("/api/auth", auth);
app.use("/api/users", users);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
