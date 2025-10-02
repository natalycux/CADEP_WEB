const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  const API_URL = "http://localhost:3000/api/patients";
  try {
    console.log("[11ty] Obteniendo datos de: Pacientes");
    let response = await EleventyFetch(API_URL, {
      duration: "1d",
      type: "json"
    });

    if (response && response.data && Array.isArray(response.data.patients)) {
      // 🔎 Extraer y mapear los pacientes
      const patients = response.data.patients;

      console.log(`[11ty] Total pacientes recibidos: ${patients.length}`);

      return {
        list: patients // 👈 Eleventy usará esto en pacientes.njk
      };
    }

    console.warn("[11ty] No se encontraron pacientes en la respuesta.");
    return { list: [] };

  } catch (error) {
    console.error("[11ty] Error al obtener Pacientes:", error.message);
    return { list: [] };
  }
};
