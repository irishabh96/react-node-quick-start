const express = require('express');
const mongoose = require('mongoose');
const Users = require('../../models/user');

const app = express();

app.post('/', (req, res) => {
	Users.create({ email: 'small@yahoo.com' }, function(err, small) {
		console.log(small);
	});
});
module.exports = app;
