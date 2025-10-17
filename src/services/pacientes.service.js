// Se importa el apiClient para centralizar las llamadas a la API
import { apiGet } from "../utils/apiClient.js";

// Ya no es necesario importar dotenv aquí, app.js lo hace por todo el proyecto.
const API_URL = process.env.API_BASE_URL || "http://localhost:3000";

export async function obtenerPacientes() {
  // Se utiliza la función apiGet para hacer el código más limpio y reutilizable
  const data = await apiGet(`${API_URL}/api/patients`);

  if (!data.success || !data.data?.patients) {
    return [];
  }

  // Se mantiene la lógica para obtener pacientes únicos
  const pacientesUnicos = [
    ...new Map(data.data.patients.map(p => [p.id, p])).values(),
  ];

  return pacientesUnicos;
}

export async function obtenerPacientePorId(id) {
  const pacientes = await obtenerPacientes();
  return pacientes.find(p => String(p.id) === String(id));
}