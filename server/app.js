const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);

app.use(cookieParser());

//user router
app.post('/users/auth', controllers.auth);
app.post('/users/signup', controllers.signup);
app.post('/users/signin', controllers.signin);
app.get('/users/signout', controllers.signout);
app.get('/users', controllers.users.get);
app.delete('/users', controllers.users.delete);
app.put('/users', controllers.users.put);

//post router
app.get('/posts', controllers.posts.get);
app.get('/posts/:id', controllers.posts.getId);
app.post('/posts', controllers.posts.post);
app.delete('/posts/:id', controllers.posts.delete);

//menu router
app.get('/menu', controllers.menu);

//likes router
app.post('/likes', controllers.likes.post);
app.delete('/likes/:id', controllers.likes.delete);

app.get('/', (req, res) => {
  res.status(201).send('Welcome to My Subway API Server!');
});

app.listen(port, () => {
  console.log(`서버가 ${port}번에서 작동중입니다.`);
});
