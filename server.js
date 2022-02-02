const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

//config
dotenv.config({ path: "config/config.env" });

// connecting to database
connectDB();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
