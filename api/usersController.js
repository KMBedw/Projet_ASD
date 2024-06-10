const pool = require('./database');

// Fonction pour obtenir tous les utilisateurs
exports.getUsers = (req, res) => {
  pool.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// Fonction pour obtenir un utilisateur par ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results[0]);
  });
};

// Fonction pour créer un nouvel utilisateur
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  pool.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: results.insertId, name, email });
  });
};

// Fonction pour mettre à jour un utilisateur existant
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  pool.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, name, email });
  });
};

// Fonction pour supprimer un utilisateur
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  pool.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(204).end();
  });
};
