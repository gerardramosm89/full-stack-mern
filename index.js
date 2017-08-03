const PORT = process.env.PORT || 5000;
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');
const app = express();
// ClientID: 582898669223-j3liurdae1ts542ortcv1gc4qb65nj3s.apps.googleusercontent.com 
// ClientSecret: KQLJHgpZ8DWeam8Wxq7Yk4pq 
passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(accessToken)
    console.log(refreshToken)
    console.log(profie)
  }
  )
);

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback', passport.authenticate('google'));

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
});

// https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=582898669223-j3liurdae1ts542ortcv1gc4qb65nj3s.apps.googleusercontent.com