const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  console.log("[11ty] Obteniendo datos de: Áreas");
  const API_URL = "http://localhost:3000/api/areas";
  try {
    const response = await EleventyFetch(API_URL, { duration: "1d", type: "json" });
    const areas = response?.data || [];
    console.log(`[11ty] Total áreas recibidas: ${areas.length}`);
    return { list: areas };
  } catch (err) {
    console.error("[11ty] Error obteniendo áreas:", err.message);
    return { list: [] };
  }
};