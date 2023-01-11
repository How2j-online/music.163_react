const cheerio = require('cheerio');
const fs = require('fs');

function get_$(file_name) {
    const html = fs.readFileSync(file_name, 'utf8');
    return cheerio.load(html);
}

module.exports = {
    get_$
}