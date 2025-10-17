import { obtenerPacientes, obtenerPacientePorId } from "../services/pacientes.service.js";

export const listarPacientes = async (req, res) => {
  try {
    const pacientes = await obtenerPacientes();
    res.render("pacientes/index.njk", { title: "Pacientes", pacientes });
  } catch (error) {
    console.error("Error al listar pacientes:", error);
    res.status(500).render("error.njk", { message: "No se pudieron cargar los pacientes." });
  }
};

export const detallePaciente = async (req, res) => {
  try {
    const paciente = await obtenerPacientePorId(req.params.id);
    if (!paciente) {
      return res.status(404).render("error.njk", { message: "Paciente no encontrado." });
    }
    res.render("pacientes/detalle.njk", { title: "Perfil del Paciente", paciente });
  } catch (error) {
    console.error("Error al mostrar paciente:", error);
    res.status(500).render("error.njk", { message: "Error interno del servidor." });
  }
};
