const Yup = require('yup');
const User = require('../models/User');

class SessionController {
	async store(req, res) {
		const schema = Yup.object().shape({
			email: Yup.string().email().required(),
		});

		const { email } = req.body;

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha na validação.' });

		let user = await User.findOne({ email });

		if (!user) user = await User.create({ email });

		return res.json(user);
	}
}

module.exports = new SessionController();
