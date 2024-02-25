Resource Book:
/api/book -> Base URL

{
    "_id": <Unique_id of book>,
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}

GET /api/book --> This would get all book 
GET /api/book?categories=science -> Would get you books with science category

Response 
status code: 200
[{
    "_id": <Unique_id of book>,
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
},
{
    "_id": <Unique_id of book>,
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}....]

GET /api/book/:bookid -->GET /api/user/12 this would single use
Response
Status 200
{
    "_id": <Unique_id of book>,
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}


POST /api/book //body
Response -> 200
Request Body ->
{
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}

Response Body
{
    "_id" : "sdfvdfv"
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}

PUT /api/book/<bookid> //body
Request Body ->
{
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}

Response Body
{
    "_id" : "sdfvdfv"
    "name": "Name of the book",
    "description": "",
    "author name": "",
    "category": "Science | Fiction"
}

DELETE /api/book/<bookid>
200 OK

Mongo Queries

1. **`find`:** The primary method for querying data in MongoDB. It allows you to retrieve documents from a collection based on specified criteria.
   ```javascript
   db.collection.find({ criteria })
$eq: Matches values that are equal to a specified value.
db.collection.find({ field: { $eq: value } })

$ne: Matches values that are not equal to a specified value.
db.collection.find({ field: { $ne: value } })

$gt, $gte, $lt, $lte: Greater than, greater than or equal to, less than, and less than or equal to, respectively.
db.collection.find({ field: { $gt: value } })

$in: Matches any of the values specified in an array.
db.collection.find({ field: { $in: [value1, value2] } })

$in: Takes array and any one value of that array should match
$all: Takes array and all one value of that array should match
$nin: Takes array and none one value of that array should match

$and, $or, $not: Logical operators for combining multiple conditions.
db.collection.find({ $and: [ { condition1 }, { condition2 } ] })

$regex: Allows you to use regular expressions for pattern matching.
db.collection.find({ field: { $regex: /pattern/ } })

$exists: Matches documents that have the specified field.
db.collection.find({ field: { $exists: true } })

sort: Sorts the results based on a field.
db.collection.find().sort({ field: 1 }) // 1 for ascending, -1 for descending
