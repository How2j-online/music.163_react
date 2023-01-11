const fs = require('fs');
const path = require('path');

const getFile = (fileName) => {
    let data = fs.readFileSync(path.join(__dirname, `../../db_json/${fileName}`), 'utf8');
    data = JSON.parse(data);
    return data;
}

module.exports = getFile;