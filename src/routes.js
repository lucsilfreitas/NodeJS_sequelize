const express = require('express');
const router = express.Router();

const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const CourseController = require('./controllers/CourseController');


const User = require('./models/User');

const authMiddleware = require('./middlewares/auth');

router.get('/',(request, response) => {
    return response.send("Ola mundo vc com rotas!")
    
});

//router.use(authMiddleware); se ativar todas as rotas serao autenticadas ou dentro da rota

router.get('/users', authMiddleware, UserController.index);
router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
router.get('/users/:user_id', UserController.byId);
router.get('/users/:nome', UserController.byNome);
router.post('/users/login', UserController.login);

router.use(authMiddleware);

router.get('/users/:user_id/address', AddressController.index);
router.post('/users/:user_id/address', AddressController.store);
router.delete('/users/:id/address', AddressController.delete);
router.put('/users/:id/address', AddressController.update);

router.get('/users/:user_id/courses', CourseController.index);
router.post('/users/:user_id/courses', CourseController.store);
router.delete('/users/:user_id/courses', CourseController.delete);


module.exports = router;
