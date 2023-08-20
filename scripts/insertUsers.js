const User = require('../app/models/user.model');
const sequelize = require('../app/config/db.config');

const users = [
	{
		firstName: 'Mateo',
		lastName: 'Díaz',
		email: 'mateo.diaz@correo.com',
	},
	{
		firstName: 'Santiago',
		lastName: 'Mejías',
		email: 'santiago.mejias@correo.com',
	},
	{
		firstName: 'Lucas',
		lastName: 'Rojas',
		email: 'lucas.rojas@correo.com',
	},
	{
		firstName: 'Facundo',
		lastName: 'Fernandez',
		email: 'facundo.fernandez@correo.com',
	},
];

(async () => {
	try {
		await User.bulkCreate(users, { validate: true });
		console.log('🎉 Usuarios agregados exisotamente');
	} catch (error) {
		console.error('🥺 ERROR al sincronizar users: ', error.message);
		console.log(error);
	} finally {
		await sequelize.close();
	}
})();
