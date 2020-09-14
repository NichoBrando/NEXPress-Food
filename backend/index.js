const express = require('express');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')

const app = express();

const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/nexpress',
  {useNewUrlParser: true, useUnifiedTopology: true }
);

const Food = require('./models/food');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

async function getFoods(req, res){
  var foodData = await Food.find({}, {_id: 0, __v: 0}).exec();
  return res.send(foodData);
}

async function clearFoods(req, res){
  var erasedData = await Food.deleteMany({});
  return res.send({'Data erased': erasedData.deletedCount});
}

async function createFoods(req, res){
  try{
    var product = req.body;
    var newFood = Food({title: product.title, price: product.price});
    newFood.save();
    return res.send({title: newFood.title, price: newFood.price, photo: newFood.photo});
  }
  catch{
    return res.send({"Status": "Error"})
  }
}

async function alterPhoto(req, res){
  var updated = await Food.findOneAndUpdate({title: req.body.title}, 
    {photo: req.body.photo}, {useFindAndModify: false});
  return res.send({photo: req.body.photo});
}
// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
app.get("/api/getFoods", getFoods);
app.delete("/api/clearFoods", clearFoods);
app.post("/api/createFood", createFoods);
app.put("/api/alterPhoto", alterPhoto);

app.listen(port, () => console.log(`Listening on port ${port}`))