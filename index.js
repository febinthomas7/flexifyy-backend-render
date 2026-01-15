require("dotenv").config();
require("./Models/db");
const { app, server } = require("./socket");
const cors = require("cors");
const bodyParser = require("body-parser");

const UserChat = require("./Routes/UserChat");

var corsOptions = {
  origin: process.env.BASE_URL,
  method: ["GET", "POST"],
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/chat", UserChat);
const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
