const fs = require('fs');
const path = require('path');
let file = [];
function getData(dirname, file) {
    const data = fs.readdirSync(dirname);
    for (const item of data) {
        const innerdir = path.resolve(dirname, item);
        const file_stat = fs.statSync(innerdir);
        if (file_stat.isFile()) {
            file.push(innerdir);
        }
        else if (file_stat.isDirectory()) {
            file.push(innerdir);
            getData(innerdir, file);
        }
    }
}

getData("E:\\Backend engineering college", file);
console.log(file);