const dotenv = require("dotenv");

dotenv.config();

const app = require("./app");
const connectDB = require("./config/db");

const port = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  app.listen(port, () => {
    console.log(`ARYAVAX backend listening on port ${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start backend:", error.message);
  process.exit(1);
});
