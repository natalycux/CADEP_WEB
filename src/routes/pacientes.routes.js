import express from "express";
import { listarPacientes, detallePaciente } from "../controllers/pacientes.controller.js";

const router = express.Router();

router.get("/", listarPacientes);
router.get("/:id", detallePaciente);

export default router;
