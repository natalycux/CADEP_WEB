const EleventyFetch = require("@11ty/eleventy-fetch");
module.exports = async function() {
    const API_URL = "http://localhost:3000/api/areas";

    try {
        console.log(`[11ty] Obteniendo datos de: Áreas Médicas`);
        let response = await EleventyFetch(API_URL, { duration: "1d", type: "json" });
        return { list: response.data || response };
    } catch (error) {
        console.error("[11ty] Error al obtener Áreas:", error.message);
        return { list: [] };
    }
};