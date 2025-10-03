module.exports = async function () {
  console.log("[11ty] Obteniendo datos de: Sucursales");
  try {
    const res = await fetch("http://localhost:3000/api/branches"); // 👈 corregido
    const json = await res.json();

    if (json && json.data && Array.isArray(json.data.branches)) {
      console.log(`[11ty] Total sucursales recibidas: ${json.data.branches.length}`);
      return { list: json.data.branches }; // uniforme con list
    }

    console.warn("[11ty] No se encontraron sucursales.");
    return { list: [] };
  } catch (err) {
    console.error("[11ty] Error obteniendo sucursales:", err.message);
    return { list: [] };
  }
};
