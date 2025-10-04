// src/_data/pacientes.js
const fetch = require("node-fetch");

module.exports = async function () {
  console.log("🌐 Obteniendo pacientes del backend...");
  const res = await fetch("http://localhost:3000/api/patients");
  const json = await res.json();

  if (!json.success || !json.data || !json.data.patients) {
    return { list: [] };
  }

  // Quitar duplicados usando un Map
  const pacientesUnicos = [
    ...new Map(json.data.patients.map(p => [p.id, p])).values()
  ];

  console.log("✅ Pacientes únicos procesados:", pacientesUnicos.length);
  return { list: pacientesUnicos };
};
