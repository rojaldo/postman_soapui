const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Base de datos simulada
const users = [];

// Clave secreta para JWT
const JWT_SECRET = 'clave_secreta_super_segura';

// Endpoint de registro de usuario
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: 'Usuario ya existe' });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

// Endpoint de login (autenticación)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }
  // Genera el token JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Middleware para proteger rutas
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

// Ruta protegida de ejemplo
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Acceso concedido a la ruta protegida', user: req.user });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
