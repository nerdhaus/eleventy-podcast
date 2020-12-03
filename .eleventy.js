const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginNavigation = require('@11ty/eleventy-navigation')
const markdownIt = require('markdown-it')

const filters = require('./utils/filters.js')
const collections = require('./utils/collections.js')

module.exports = function (eleventyConfig) {
		// Plugins
		eleventyConfig.addPlugin(pluginRss)
		eleventyConfig.addPlugin(pluginNavigation)
		
		// Collections
		Object.keys(collections).forEach((collectionName) => {
				eleventyConfig.addCollection(collectionName, collections[collectionName])
		})

		// Filters
		Object.keys(filters).forEach((filterName) => {
				eleventyConfig.addFilter(filterName, filters[filterName])
		})
	
		// Asset Watch Targets
		eleventyConfig.addWatchTarget('./src/assets')

		/* Markdown Configuration */

		let options = {
			html: true,
			breaks: true,
			linkify: true,
			typographer: true
		};
		
		// Markdown
		eleventyConfig.setLibrary("md", markdownIt(options))

		// Layouts
		eleventyConfig.addLayoutAlias('base',			'base.njk')
		eleventyConfig.addLayoutAlias('simple',		'simple.njk')
		eleventyConfig.addLayoutAlias('update',		'simple.njk')
		eleventyConfig.addLayoutAlias('episode',	'episode.njk')

		// Pass-through files
		eleventyConfig.addPassthroughCopy('src/admin')
		eleventyConfig.addPassthroughCopy('src/assets')

		// Deep-Merge
		eleventyConfig.setDataDeepMerge(true)

		// Base Config
		return {
				dir: {
						input: 'src',
						output: 'dist',
						includes: '_includes',
						layouts: '_layouts',
						data: '_data'
				},
				templateFormats: ['njk', 'md', '11ty.js'],
				htmlTemplateEngine: 'njk',
				markdownTemplateEngine: 'njk'
		}
}
