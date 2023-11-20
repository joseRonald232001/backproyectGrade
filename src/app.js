const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./utils/database");
const authRouter = require("./auth/auth.router");
const userRoutes = require("./users/users.routes");
const schedulesRoutes = require('./schudeles/schudeles.routes');
const sensorRoutes = require('./sensor/sensor.routes');
const emerRoutes = require('./emer/emer.routes');

const PORT = process.env.PORT || 3000;
require("dotenv").config();

db.authenticate()
  .then(() => console.log("Database Authenticated!"))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log("Database Synced!"))
  .catch((err) => console.log(err));
  

  
  app.use((req, res, next) => {
    console.log(`Solicitud recibida: ${req.method} ${req.url}`);
    next();
  });
  
app.use(express.json());
app.use(cors());

app.use('/itsa', sensorRoutes);
app.use('/itsa', userRoutes);
app.use("/itsa", authRouter);
app.use("/itsa", schedulesRoutes);
app.use('/itsa', emerRoutes);

app.get('/', (req, res) => {
  res.send('¡Hola! Esto es una respuesta desde el servidor.');
});

app.listen(PORT,'0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
