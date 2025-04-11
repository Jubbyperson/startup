const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('gymshare');
const userCollection = db.collection('user');
const workoutCollection = db.collection('workout');
const socialCollection = db.collection('social');
const mealPlanCollection = db.collection('mealPlan');

