const express = require('express');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serialización y deserialización de usuario
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Configura la estrategia de Google OAuth2
passport.use(new GoogleStrategy({
    clientID: 'TU_CLIENT_ID',
    clientSecret: 'TU_CLIENT_SECRET',
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    // Aquí puedes guardar el perfil del usuario en tu base de datos si lo necesitas
    return done(null, profile);
  }
));

// Rutas de autenticación
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Autenticación exitosa
    res.redirect('/profile');
  }
);

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.send(`Hola, ${req.user.displayName}`);
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
