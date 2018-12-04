const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
	{
		email: {
			type: String,
			unique: true,
			required: true
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('users', userSchema);
