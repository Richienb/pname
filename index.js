"use strict"

const readPkg = require("read-pkg")

module.exports = readPkg.sync().name
