
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode("explorerNote", () => {
      return "<p><em>Exploration Log: Data entry successfully posted.</em></p>";
  });

  eleventyConfig.addPassthroughCopy("styles");
  return {
      dir: {
          input: "main_blog",
          includes: "_includes",
          layouts: "basic_layouts",
          output: "_site"
      }
  };
};
