const path = require('path');

// this refers to the main module that is started in the root of the project
module.exports = path.dirname(process.mainModule.filename);