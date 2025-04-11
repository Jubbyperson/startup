const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('gymshare');
const userCollection = db.collection('user');
const workoutCollection = db.collection('workout');
const socialCollection = db.collection('social');
const mealPlanCollection = db.collection('mealPlan');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connected to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addWorkout(workout) {
  return workoutCollection.insertOne(workout);
}

function getWorkouts() {
  return workoutCollection.find().toArray();
}

async function addSocialPost(post) {
  return socialCollection.insertOne(post);
}

function getSocialPosts() {
  return socialCollection.find().toArray();
}

async function addMealPlan(mealPlan) {
  return mealPlanCollection.insertOne(mealPlan);
}
