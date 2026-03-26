require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo DB Conectado"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

//Routes CRUD
app.use("/proyecto/asistencia", require("./routes/asistenciaRoutes"));
app.use("/proyecto/becas", require("./routes/becasRoutes"));
app.use("/proyecto/categorias", require("./routes/categoriasRoutes"));
app.use("/proyecto/citasMedicas", require("./routes/citasMedicasRoutes"));
app.use("/proyecto/entrenadores", require("./routes/entrenadoresRoutes"));
app.use("/proyecto/equipos", require("./routes/equiposRoutes"));

app.use("/proyecto/historialMedico", require("./routes/historialMedicoRoutes"));
app.use("/proyecto/jugadores", require("./routes/jugadoresRoutes"));
app.use("/proyecto/pagos", require("./routes/pagosRoutes"));
app.use("/proyecto/partidos", require("./routes/partidosRoutes"));
app.use("/proyecto/premios", require("./routes/premiosRoutes"));
app.use("/proyecto/torneos", require("./routes/torneosRoutes"));

app.listen(PORT, () => {
  console.log(`Servidor ejecutadonse ${PORT}`);
});