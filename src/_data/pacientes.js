// src/_data/pacientes.js
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    const API_URL = "http://localhost:3000/api/patients";

    try {
        console.log(`[11ty] Obteniendo datos de pacientes desde: ${API_URL}`);
        
        let response = await EleventyFetch(API_URL, {
            duration: "1d", // Reactivamos la caché a 1 día
            type: "json"
        });

        // --- INICIO DE LA SOLUCIÓN ---
        // Accedemos directamente a la lista de pacientes dentro de la respuesta
        const patientList = response.data.patients;
        // --- FIN DE LA SOLUCIÓN ---

        // Verificamos si 'patientList' es realmente un array
        if (!Array.isArray(patientList)) {
            console.error("[11ty] ERROR: La propiedad 'data.patients' en la respuesta de la API no es un array.");
            return { list: [] };
        }
        
        console.log(`[11ty] Se encontraron ${patientList.length} pacientes.`);
        
        return {
            list: patientList
        };

    } catch (error) {
        console.error("[11ty] Error CRÍTICO al obtener datos del API:", error.message);
        return {
            list: []
        };
    }
};