# backend

This backend has been developed with Express and Mongoose, to work with NoSQL.

The API have four routes, that will do a function.

## getFoods
![getFoods](https://github.com/NichoBrando/Presentation/blob/master/APIget.png)
This route gives to clientside a JSON with all foods in Food Models.

## createFood
![createFoods](https://github.com/NichoBrando/Presentation/blob/master/APIpost.png)
This route creates a new Food, that will start with random photo, by default.

## clearFoods
![clearFoods](https://github.com/NichoBrando/Presentation/blob/master/APIdelete.png)
This route will delete all foods on the Food models.

## alterPhoto
![alterPhoto](https://github.com/NichoBrando/Presentation/blob/master/APIput.png)
This route will modify the photo of one Food, finding it with the title.
