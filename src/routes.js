const { Router } = require('express');
const multer = require('multer');

const MulterMiddleware = require('./middlewares/multer');

const SessionController = require('./controllers/SessionController');
const HouseController = require('./controllers/HouseController');
const DashboardController = require('./controllers/DashboardController');
const ReserveController = require('./controllers/ReserveController');

const routes = new Router();
const upload = multer(MulterMiddleware);

routes.post('/sessions', SessionController.store);
routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.get('/houses', HouseController.index);
routes.put('/houses/:id', upload.single('thumbnail'), HouseController.update);
routes.delete('/houses', upload.single('thumbnail'), HouseController.destroy);
routes.get('/dashboard', DashboardController.show);
routes.post('/houses/:id/reserve', ReserveController.store);
routes.get('/reserves', ReserveController.index);
routes.delete('/reserves/cancel', ReserveController.destroy);

module.exports = routes;
