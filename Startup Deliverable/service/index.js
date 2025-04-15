const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const { peerProxy } = require('./peerProxy');
const app = express();

const authCookieName = 'token';

let users = [];
let workouts = {
  'Arms': [],
  'Shoulders': [],
  'Back': [],
  'Chest': [],
  'Quad': [],
  'Hamstring/Calves': [],
  'Core': []
};
let socialPosts = [];
let mealPlans = [];

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('email', req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('email', req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      setAuthCookie(res, user.token);
      res.send({ email: user.email });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    delete user.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

apiRouter.get('/workouts', verifyAuth, (_req, res) => {
  res.send(workouts);
});

apiRouter.post('/workouts', verifyAuth, (req, res) => {
  const { name, content } = req.body;
  const category = req.body.category || 'Arms';
  if (workouts[category]) {
    workouts[category].push({ name, content });
    res.send(workouts);
  } else {
    res.status(400).send({ msg: 'Invalid category' });
  }
});

apiRouter.get('/social', verifyAuth, (_req, res) => {
  res.send(socialPosts);
});

apiRouter.post('/social', verifyAuth, (req, res) => {
  socialPosts.push(req.body);
  res.send(socialPosts);
});

apiRouter.get('/mealPlans', verifyAuth, (_req, res) => {
  res.send(mealPlans);
});

apiRouter.post('/mealPlans', verifyAuth, (req, res) => {
  mealPlans.push(req.body);
  res.send(mealPlans);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Start the HTTP server
const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Attach WebSocket functionality
peerProxy(httpService);
