// .eleventy.js
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);

  // Copia estáticos a _site
  // ✅ si los CSS están dentro de src/styles
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/scripts": "scripts" });

  // ✅ por si aún tienes una carpeta styles en la raíz del repo
  eleventyConfig.addPassthroughCopy({ "styles": "styles" });

  eleventyConfig.addFilter("toJSON", (v) => JSON.stringify(v, null, 2));

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "components",
      layouts: "layouts",
      data: "_data",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    pathPrefix: "/",
  };
};
