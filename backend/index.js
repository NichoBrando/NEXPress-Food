const express = require('express');
const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/nexpress',
  {useNewUrlParser: true}
);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const Food = require('./models/food');
var myFood = Food({title: "Hotdog", price: 5.40, photo: "hotdog"});
myFood.save();

async function getFoods(req, res){
  var foodData = await Food.find({}, {_id: 0, __v: 0}).exec();
  return res.send(foodData);
}

app.get("/api/getFoods", getFoods);
app.listen(port, () => console.log("Escutando..."))