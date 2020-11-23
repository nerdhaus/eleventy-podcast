/*

  Custom collections can be generated from existing directory structures or filtered
  subsets of existing collections:

  collectionApi
    .getAll()
    .filter(item => item.url
                 && ! item.inputPath.includes('index.njk')
                 && item.inputPath.startsWith('./src/pages/')))

  Alternatives for populating the initial collection include getAll(), getAllSorted(),
  getFilteredByTag(tagName), and getFilteredByGlob(glob). A sandbox for glob testing
  is available at https://globster.xyz.
  
  Valid collection item properties include inputPath, outputPath, fileSlug, date, url,
  template, templateContent, and data (aka frontmatter vars).
*/

module.exports = {

    // Podcast episodes.
    episodes: function(collectionApi) {
      return collectionApi.getFilteredByGlob("./src/episodes/*.md");
    },

    // Standalone site pages
    pages: function(collectionApi) {
      return collectionApi.getFilteredByGlob("./src/pages/*.md");
    },

    // Plain old blog posts
    updates: function(collectionApi) {
      return collectionApi.getFilteredByGlob("./src/posts/*.md");
    }
}