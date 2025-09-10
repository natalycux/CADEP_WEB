// Importamos el plugin que acabamos de instalar
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // Añadimos el plugin a Eleventy
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  
  // El resto de tu configuración...
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");

  eleventyConfig.addFilter("toJSON", function(value) {
    return JSON.stringify(value);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "layouts",
      includes: "components",
      data: "_data" // Buena práctica definir también la carpeta de datos
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};