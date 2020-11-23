const { DateTime } = require('luxon')
const markdownIt = require('markdown-it')
const md = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
});

module.exports = {
  // Date formatting (human readable)
	readableDate: function (value) {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
	},

  // Date formatting (machine readable)
	iTunesDate: function (value) {
		return DateTime.fromJSDate(value).toRFC2822();
	},
	
	markdownify: function (value, strip) {
		if (strip) {
			return md.render(String(value)).replace("<p>", "").replace("</p>", "");
		}
		else {
			return md.render(String(value));
		}
	}
}