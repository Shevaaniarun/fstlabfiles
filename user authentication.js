const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);


const users = {
  Shevaani: { password: '30' },
};


const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};


app.get('/', (req, res) => {
  res.send('<h2>Welcome! <a href="/login">Login</a> OR  <a href="/signup">Signup</a></h2>');
});

app.get('/login', (req, res) => {
  res.send('<form method="POST" action="/login">Username: <input type="text" name="username" /><br>Password: <input type="password" name="password" /><br><button type="submit">Login</button></form>');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username].password === password) {
    req.session.user = username;
    res.cookie('user', username, { maxAge: 60000 });
    res.redirect('/dashboard');
  } else {
    res.send('Invalid credentials. <a href="/login">Try again</a>');
  }
});

app.get('/signup', (req, res)=>{
  res.send('<form method="POST" action="/signup">Username: <input type="text" name="username" /><br>Password: <input type="password" name="password" /><br><button type="submit">Signup</button></form>');
})

app.post('/signup', (req, res)=>
{
  const { username, password } = req.body;
  if (users[username]) {
    return res.status(400).send('<h2>Oops! Username already taken</h2>');
  }
  users[username] = { password };  
  res.send('<h2>User created successfully! Please <a href="/login">log in</a></h2>');
})

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.send(`<h2>Welcome ${req.session.user}! <a href="/logout">Logout</a></h2>`);
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user');
    res.redirect('/');
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});