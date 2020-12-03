const { DateTime } = require('luxon')
const markdownIt = require('markdown-it')
const fs = require("fs");

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
  
    // Take a string and process it as markdown. If inline is true, ignore block tags.
    markdownify: function (value, inline) {
        if (strip) {
            return md.renderInline(String(value));
        }
        else {
            return md.render(String(value));
        }
    },
  
    // TODO: Extremely not cool way to get filesize. Need a better approach.
    filesize: function(filePath) {
        const stats = fs.statSync(filePath);
        return stats.size;  
    },
  
    // Escape ampersands, split caret-delimited strings into two elements,
    // and output proper <itunes:category> tags.
    categoryTag: function(category) {
        return: category;
    }
}

