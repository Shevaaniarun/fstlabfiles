const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;


let users = {
    admin: { password: "123" }
};


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'your_secret_key',          
    resave: false,                       
    saveUninitialized: false,            
    cookie: {
        maxAge: 180000, //3min
        httpOnly: true,                   
        secure: false,
    }
}));


app.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (users[username]) {
        return res.status(400).send('<h2>Oops! Username already taken</h2>');
    }

    users[username] = { password };  

    res.send('<h2>User created successfully! Please <a href="/login">log in</a></h2>');
});


app.post('/login', async (req, res) => {
    const { username, password } = req.body;


    const user = users[username];
    if (!user) {
        return res.status(400).send('Invalid credentials');
    }


    const isMatch = password === user.password;
    if (!isMatch) {
        return res.status(400).send('Invalid credentials');
    }

    req.session.user = { username: user.username };
    res.cookie('user', username, { maxAge: 60000 });
    res.send('<h2>Logged in successfully! <a href="/logout">Logout</a></h2>');
});

/*app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send('You need to log in first');
    }

    res.send(`Hello, ${req.session.user.username}`);
});*/

app.get('/login', (req, res) => {
    res.send('<form method="POST" action="/login">Username: <input type="text" name="username" /><br>Password: <input type="password" name="password" /><br><button type="submit">Login</button></form>');
});

app.get('/signup', (req, res) => {
    res.send('<form method="POST" action="/signup">Username: <input type="text" name="username" /><br>Password: <input type="password" name="password" /><br><button type="submit">Sign Up</button></form>');
});

app.get('/', (req, res) => {
    res.send('<h2>Welcome! <a href="/login">Login</a> OR <a href="/signup">signup</a> </h2>');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.clearCookie('connect.sid'); 
        res.send('<h2>Logged out successfully. <a href="/">Go to home</a></h2>');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
