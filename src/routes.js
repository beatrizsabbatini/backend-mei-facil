const express = require('express');
const AuthenticationController = require('./controllers/AuthenticationController');
const CompanyController = require('./controllers/CompanyController');
const SessionControler = require('./controllers/SessionController');
const UserDataController = require('./controllers/UserDataController');
const authMiddleWare = require('./middlewares/auth');

const routes = express.Router();

routes.post('/authentication', AuthenticationController.store )
routes.post('/sessions', SessionControler.store);
routes.get('/user', authMiddleWare, UserDataController.show);
routes.get('/company', authMiddleWare, CompanyController.show);

module.exports = routes;
