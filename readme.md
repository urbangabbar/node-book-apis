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