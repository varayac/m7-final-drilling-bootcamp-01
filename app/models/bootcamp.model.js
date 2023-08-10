const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db.config');

const Bootcamp = sequelize.define('bootcamp', {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	cue: {
		type: DataTypes.INTEGER,
		allowNull: false,
		validate: {
			isInt: true,
			min: 5,
			max: 10,
		},
	},
	description: {
		type: DataTypes.STRING(1000),
		allowNull: false,
	},
});

module.exports = { Bootcamp };
