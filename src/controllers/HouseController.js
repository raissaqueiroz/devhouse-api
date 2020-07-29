const Yup = require('yup');
const House = require('../models/House');
const User = require('../models/User');

class HouseController {
	async index(req, res) {
		const houses = await House.find({ ...req.query });

		return res.json(houses);
	}

	async store(req, res) {
		const schema = Yup.object().shape({
			description: Yup.string().required(),
			price: Yup.number().required(),
			location: Yup.string().required(),
			status: Yup.boolean().required(),
		});

		const { filename } = req.file;
		const { description, price, location, status } = req.body;
		const { user_id } = req.headers;

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha na validação.' });

		const house = await House.create({
			user: user_id,
			thumbnail: filename,
			description,
			price,
			location,
			status,
		});

		return res.json(house);
	}

	async update(req, res) {
		const schema = Yup.object().shape({
			description: Yup.string().required(),
			price: Yup.number().required(),
			location: Yup.string().required(),
			status: Yup.boolean().required(),
		});

		const { filename } = req.file;
		const { id } = req.params;
		const { description, price, location, status } = req.body;
		const { user_id } = req.headers;

		if (!(await schema.isValid(req.body)))
			return res.status(400).json({ error: 'Falha na validação.' });

		const user = await User.findById(user_id);
		const houses = await House.findById(id);

		if (String(user._id) !== String(houses.user))
			return res.status(401).json({ error: 'Não autorizado.' });

		await House.updateOne(
			{ _id: id },
			{
				user: user_id,
				thumbnail: filename,
				description,
				price,
				location,
				status,
			}
		);

		return res.send();
	}

	async destroy(req, res) {
		const { house_id } = req.body;
		const { user_id } = req.headers;
		// 5f1cca8765bdeb48c8a317b2

		const user = await User.findById(user_id);
		const houses = await House.findById(house_id);

		if (String(user._id) !== String(houses.user))
			return res.status(401).json({ error: 'Não autorizado.' });

		await House.findByIdAndDelete({ _id: house_id });

		return res.json({ message: 'House excluída com sucesso.' });
	}
}

module.exports = new HouseController();
