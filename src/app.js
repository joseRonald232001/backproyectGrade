const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./utils/database");
const authRouter = require("./auth/auth.router");
const userRoutes = require("./users/users.routes");
const actuatorRoutes = require("./actuators/actuator.routes");

const reportRoutes = require("./reports/reports.routes")
const initModels = require("./models/initModels");

const PORT = process.env.PORT || 9000;
require("dotenv").config();

db.authenticate()
  .then(() => console.log("Database Authenticated!"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database Synced!"))
  .catch((err) => console.log(err));
initModels();

app.use(express.json());
app.use(cors());

app.use("/api/v1", actuatorRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", authRouter);
app.use('/api/v1', reportRoutes);



app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
