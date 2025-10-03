const fetch = require("node-fetch");

module.exports = async function () {
  console.log("🌐 Obteniendo pacientes del backend...");
  try {
    const res = await fetch("http://localhost:3000/api/patients");
    const json = await res.json();

    // Extraer pacientes desde la estructura real
    const pacientes = json?.data?.patients || [];

    console.log(`✅ Pacientes recibidos: ${pacientes.length}`);

    // Eleventy necesita un objeto
    return { list: pacientes };
  } catch (err) {
    console.error("❌ Error al obtener pacientes:", err);
    return { list: [] };
  }
};
