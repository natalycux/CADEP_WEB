import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Se importan ambas rutas para que la aplicación las conozca
import indexRouter from "./routes/index.routes.js";
import pacientesRouter from "./routes/pacientes.routes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8081;

// Configurar Nunjucks
nunjucks.configure(path.join(__dirname, "views"), {
  autoescape: true,
  express: app,
  watch: true,
});

app.set("view engine", "njk");

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rutas
// Se registra la ruta principal
app.use("/", indexRouter);
// ¡Importante! Se registran las rutas de pacientes bajo el prefijo "/pacientes"
app.use("/pacientes", pacientesRouter);

// Manejo de Error 404
app.use((req, res) => {
  res.status(404).render("error.njk", { message: "Página no encontrada" });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor CADEP corriendo en http://localhost:${PORT}`);
});