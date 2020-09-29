const express = require('express');
const path = require('path');

module.exports = function(app) {
app.use('/', express.static(path.resolve(__dirname, '../../public')));
app.set('views', path.resolve(__dirname, '../views'));
}