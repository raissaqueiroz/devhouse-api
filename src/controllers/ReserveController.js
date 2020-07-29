const Reserve = require('../models/Reserve');
const User = require('../models/User');
const House = require('../models/House');

class ReserveController {
	async index(req, res) {
		const { user_id } = req.headers;

		const reserves = await Reserve.find({
			...req.query,
			user: user_id,
		}).populate('house');

		return res.json(reserves);
	}

	async store(req, res) {
		const { user_id } = req.headers;
		const { id } = req.params;
		const { date } = req.body;

		const house = await House.findById(id);

		if (!house)
			return res.status(400).json({ error: 'Essa casa não existe. ' });
		if (house.status !== true)
			res.status(400).json({ error: 'Solicitação Indisponível. ' });

		const user = await User.findById(user_id);

		if (!user || String(user._id) === String(house.user))
			res.status(401).json({ error: 'Reserva não permitida. ' });

		const reserve = await Reserve.create({
			user: user_id,
			house: id,
			date,
		});

		await reserve.populate(['house', 'user']).execPopulate();

		return res.json(reserve);
	}

	async destroy(req, res) {
		const { reserve_id } = req.body;
		const { user_id } = req.headers;
		// 5f1cca8765bdeb48c8a317b2

		const user = await User.findById(user_id);
		const reserves = await Reserve.findById(reserve_id);

		if (String(user._id) !== String(reserves.user))
			return res.status(401).json({ error: 'Não autorizado.' });

		await Reserve.findByIdAndDelete({ _id: reserve_id });

		return res.json({ message: 'Reserva excluída com sucesso.' });
	}
}

module.exports = new ReserveController();
