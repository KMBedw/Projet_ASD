const express = require('express');
const router = express.Router();
const usersController = require('./usersController');

// Routes
router.get('/api/users', usersController.getUsers);
router.get('/api/users/:id', usersController.getUserById);
router.post('/api/users', usersController.createUser);
router.put('/api/users/:id', usersController.updateUser);
router.delete('/api/users/:id', usersController.deleteUser);

// Route de test
router.get('/api/test', (req, res) => {
  res.send('API is working fine!');
});

// Exportation du routeur
module.exports = router;
