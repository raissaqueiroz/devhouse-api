const { Schema, model } = require('mongoose');

const ReserveSchema = new Schema({
	date: {
		type: String,
		required: true,
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	house: {
		type: Schema.Types.ObjectId,
		ref: 'House',
	},
});

module.exports = model('Reserve', ReserveSchema);
