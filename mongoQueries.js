/*
1.
db.restaurants.find()

2.
db.restaurants.find({},{_id:1,name:1,borough:1,cuisine:1})

3.
db.restaurants.find({}, {_id:0,name:1,borough:1,cuisine:1})

4.
db.restaurants.find({}, {_id:0,restaurant_id:1,name:1,borough:1,"address.zipcode":1})

5.
db.restaurants.find({"borough": "Bronx"})

6.
db.restaurants.find({"borough": "Bronx"}).limit(5)

7.
db.restaurants.find({"borough": "Bronx"}).skip(5).limit(5)

8.
db.restaurants.find({"grades.score":{$gt:90}})

9.
db.restaurants.find({"grades": {$elemMatch: {score: {$gt:80, $lt:100}}}})

10.
db.restaurants.find({"address.coord.0":{$lt:-95.754168}})

11.
db.restaurants.find({$and:[{"cuisine":{$ne:"American"}},{"grades.score":{$gt:70}},{"address.coord.1":{$lt:-65.754168}}]})

12.
db.restaurants.find({"cuisine": {$ne: "American"}, "grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}})

13.
db.restaurants.find({"cuisine": {$ne:"American"}, "grades.grade": 'A', "borough": {$ne: "Brooklyn"}}).sort({"cuisine":-1})

14.
db.restaurants.find({"name": {$regex:"^Wil"}},{"restaurant_id":1, "name":1, "borough":1, "cuisine":1, "_id":0})

15.
db.restaurants.find({"name": {$regex: "ces$"}},{"restaurant_id":1, "name": 1, "borough": 1, "cuisine": 1, "_id": 0})

16.
db.restaurants.find({"name": {$regex: "Reg"}},{"restaurant_id": 1, "name": 1, "borough": 1, "cuisine": 1, "_id":0})

17.
db.restaurants.find({"borough": "Bronx", $or: [{ "cuisine": "American"}, {"cuisine": "Chinese"}]})

18.
db.restaurants.find({"borough": {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }},{"restaurant_id":1, "name":1, "borough": 1, "cuisine": 1, "_id": 0})

19.
db.restaurants.find({"borough": {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] }},{"restaurant_id":1, "name":1, "borough": 1, "cuisine": 1, "_id": 0})

20.
db.restaurants.find({"grades.score": {$lt: 10}},{"restaurant_id":1, "name":1, "borough": 1, "cuisine": 1, "_id": 0})

21.
db.restaurants.find({"cuisine": "Seafood", $nor: [{"name": {$regex: "^Wil"}}]},{"restaurant_id":1, "name":1, "borough": 1, "cuisine": 1, "_id": 0})

22.
db.restaurants.find({"grades": {$elemMatch: {"grade": "A","score": 11,"date": ISODate("2014-08-11T00:00:00Z")}}},{"restaurant_id": 1, "name": 1, "grades": 1, "_id": 0})

23.
db.restaurants.find({"grades.1.grade": "A", "grades.1.score": 9, "grades.1.date": ISODate("2014-08-11T00:00:00Z")}, {restaurant_id: 1, name: 1, grades: 1, _id: 0})

24.
db.restaurants.find({"address.coord.1": {$gt: 42, $lt: 52}}, {restaurant_id: 1, name: 1, address: 1, _id: 0})

25.
db.restaurants.find().sort({"name": 1})

26.
db.restaurats.find().sort({"name": -1})

27.
db.restaurants.find().sort({"cuisine": 1, "borough": -1})

28.
db.restaurants.find({ "address.street": { $exists: true, $ne: ""}})

29.
db.restaurant.find({"address.coord": {$type: "double"}})

30.
db.restaurants.find({"grades.score": {$mod: [7, 0] }}, {restaurant_id: 1, name: 1, grades: 1, _id: 0})

31.
db.restaurants.find({"name": {$regex: "mon", $options: "i"}},{"name": 1, "borough": 1, "address.coord": 1, "cuisine": 1, "_id": 0})

32.
db.restaurants.find({"name": {$regex: "^Mad"}},{"name": 1, "borough": 1, "address.coord": 1,, "cuisine": 1, "_id": 0})










*/
