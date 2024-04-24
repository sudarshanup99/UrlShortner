const express = require("express");
const cors = require("cors");
const mainRoutes = require("./Routes/app.route.js");
const sequelize = require("./Config/db.config.js");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
app.use("/", mainRoutes);

async function connectToDb() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("database connected");
  } catch (err) {
    console.error("Connection error", err);
   
    
  }
}

async function startServer() {
  await connectToDb();
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

startServer();
