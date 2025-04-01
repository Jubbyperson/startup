const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
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
