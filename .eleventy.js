// .eleventy.js
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // 🔹 Plugin RSS
  eleventyConfig.addPlugin(pluginRss);

  // 🔹 Copiar archivos estáticos a la carpeta final _site
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });
  eleventyConfig.addPassthroughCopy({ "styles": "styles" }); // por compatibilidad con versiones previas

  // 🔹 Filtro para mostrar datos como JSON (para depuración)
  eleventyConfig.addFilter("toJSON", (v) => JSON.stringify(v, null, 2));

  // 🔹 Recarga automática cuando cambien archivos dentro de `src/pages/landing`
  eleventyConfig.addWatchTarget("./src/pages/landing/");

  // 🔹 Configurar ruta de includes
  // Eleventy buscará archivos de include dentro de:
  // src/components/landing/
  // src/components/
  // src/layouts/
  const nunjucks = require("nunjucks");
  const path = require("path");
  const env = new nunjucks.Environment(
    new nunjucks.FileSystemLoader([
      path.join(__dirname, "src/components"),
      path.join(__dirname, "src/components/landing"),
      path.join(__dirname, "src/layouts"),
    ])
  );
  eleventyConfig.setLibrary("njk", env);

  // 🔹 Alias para layout base
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  // 🔹 Configuración general
  return {
    dir: {
      input: "src",          // Carpeta de entrada
      output: "_site",       // Carpeta de salida
      includes: "components",// Donde buscará los includes por defecto
      layouts: "layouts",    // Carpeta para layouts
      data: "_data",         // Carpeta para datos
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
