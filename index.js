require("dotenv").config();
const { app, server } = require("./socket"); // Your exported code

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`);
});
