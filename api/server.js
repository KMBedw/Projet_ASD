const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const usersController = require('./usersController');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

// Routes
app.get('/api/users', usersController.getUsers);
app.get('/api/users/:id', usersController.getUserById);
app.post('/api/users', usersController.createUser);
app.put('/api/users/:id', usersController.updateUser);
app.delete('/api/users/:id', usersController.deleteUser);

// Error Handling
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!');
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
