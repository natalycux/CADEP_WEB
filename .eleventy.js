module.exports = function(eleventyConfig) {
  // Copiar assets, styles y scripts a la carpeta final (_site)
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/scripts");

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "layouts",
      includes: "components"
      // Los includes son relativos a la carpeta de input (src)
      // No necesitamos configurar 'includes' si están en la raíz de 'src'
      // pero si los pones en src/_includes, Eleventy los encuentra por defecto.
      // Para nuestra estructura (src/components), la ruta en el include `{% include "components/header.html" %}` funciona.
    },
    htmlTemplateEngine: "njk", // Usamos Nunjucks para los includes y layouts
    markdownTemplateEngine: "njk"
  };
};