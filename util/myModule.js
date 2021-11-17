
const fs = require('fs');

fs.readFile('bb-data.csv', 'utf8', function (err, data) {
    if (err) {
        console.log("There was a problem reading the file.");
    } else {
        console.log(data);
    }
});


module.exports = {
    fs
}