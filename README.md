# Some mongodb backend

This is a simple node.js backend that serves a simple api for getting and adding rooms.

## Getting it up and running locally

1. run `docker-compose up -d`
2. run `npm start`
3. initialize the database with basic room data by doing a GET request to `http://localhost:3000/api/init`
4. Check that it works by doing a GET request to `http://localhost:3000/api/room/0`

## Get a room

Make a GET request to `http://localhost:3000/api/room/0` where 0 is `room_number`

## Posting new rooms

Make a POST request to `http://localhost:3000/api/room` with some data:

```
{
  "room_number": 123,
  "description": "A very nice room",
  "N": 0,
  "E": 1,
  "W": 2,
  "S": 3
}
```

## Deleteing existing rooms

Make a DELETE request to `http://localhost:3000/api/room/0` where 0 is `room_number`

## Data schema

See
[models/model.js](models/model.js).
