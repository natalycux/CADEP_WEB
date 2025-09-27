// Importamos el plugin correcto para RSS, que incluye el filtro 'slug'
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Añadimos el plugin a Eleventy. Esto nos dará acceso al filtro 'slug'.
  eleventyConfig.addPlugin(pluginRss);
  
  // El resto de tu configuración (que ya estaba correcta)
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
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};