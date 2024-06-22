const passport = require('passport');
const RedditStrategy = require('passport-reddit').Strategy;

require('dotenv').config()

passport.use(new RedditStrategy({
    clientID: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/reddit/redirect"
  },