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