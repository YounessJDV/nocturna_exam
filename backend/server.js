// Configuration du serveur Express :
const express = require('express');
const cors = require('cors'); // Importez le middleware CORS

const app = express();

// Ajoutez le middleware CORS à votre application
app.use(cors());

//  Configuration de la connexion à la base de données
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Mettez le mot de passe de votre base de données MySQL ici
  database: 'examen_nocturna' // Mettez le nom de votre base de données MySQL ici
});

connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données : ', err);
  } else {
    console.log('Connexion à la base de données réussie.');
  }
});

// Middleware pour le traitement des données JSON
app.use(express.json());

// Route pour l'inscription d'un utilisateur
const bcrypt = require('bcrypt');

app.post('/api/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Hacher le mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(password, 10); // Le deuxième argument est le coût du hachage (10 est une valeur raisonnable)

    // Insérer l'utilisateur dans la base de données avec le mot de passe haché
    connection.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hashedPassword, email], (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'inscription : ', err);
        res.status(500).send('Erreur lors de l\'inscription.');
      } else {
        console.log('Utilisateur inscrit avec succès.');
        res.status(200).send('Utilisateur inscrit avec succès.');
      }
    });
  } catch (error) {
    console.error('Erreur lors du hachage du mot de passe : ', error);
    res.status(500).send('Erreur lors du hachage du mot de passe.');
  }
});


// Route pour la connexion d'un utilisateur
const jwt = require('jsonwebtoken');

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Vérifier les informations de connexion dans la base de données
  connection.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
    if (err) {
      console.error('Erreur lors de la connexion : ', err);
      res.status(500).send('Erreur lors de la connexion.');
    } else {
      if (result.length > 0) {
        const user = result[0];
        // Vérifier si le mot de passe correspond en utilisant bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (passwordMatch) {
          // Générer un token JWT
          const token = jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '1h' });

          console.log('Connexion réussie.');
          res.status(200).json({ token });
        } else {
          console.log('Identifiants invalides.');
          res.status(401).send('Identifiants invalides.');
        }
      } else {
        console.log('Utilisateur non trouvé.');
        res.status(404).send('Utilisateur non trouvé.');
      }
    }
  });
});

//authMiddleware
const authenticateToken = require('./authMiddleware');

// Route pour récupérer les informations de l'utilisateur connecté
app.get('/api/user', authenticateToken, (req, res) => {
  const userId = req.user.id; // Obtenez l'ID de l'utilisateur à partir du token JWT
  connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la récupération des informations utilisateur : ', err);
      res.status(500).send('Erreur lors de la récupération des informations utilisateur.');
    } else {
      const user = result[0];
      res.status(200).json(user);
    }
  });
});



app.get('/api/protected', authenticateToken, (req, res) => {
  res.send('Cette route est protégée');
});

//Écoute du serveur sur un port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur le port ${PORT}.`);
});