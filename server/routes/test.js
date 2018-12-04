const express = require('express');
const mongoose = require('mongoose');
const Users = require('../../models/user');

const app = express();

app.post('/', (req, res) => {
	console.log(req.body);
	Users.create({ email: 'small' }, function(err, small) {
		// saved!
		console.log(small);
	});
});
module.exports = app;
