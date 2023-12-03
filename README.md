# Some mongodb backend

This is a simple node.js backend that serves a simple api for getting and adding rooms.

If you are new to frontend web development, check out [this document](docs/futher-reading.md) for more valuable information.

## Getting it up and running locally

Prerequisites: You need to have `docker` and `node.js` installed locally.

1. Open up a terminal, make sure you are in this folder and run `docker-compose up -d`
2. Run `npm start`
3. Initialize the database with basic room data by doing a GET request to `http://localhost:3000/api/init`
4. Check that it works by doing a GET request to `http://localhost:3000/api/room/0`

## Get a room

Make a GET request to `http://localhost:3000/api/room/0` where 0 is `room_number`

## Posting new rooms

Make a POST request to `http://localhost:3000/api/room` with some data:

```
{
  "room_number": 123,
  "description": "A very nice room",
  "N": { "to_room": 0 },
  "E": { "to_room": 1 },
  "W": { "to_room": 2 },
  "S": { "to_room": 3 }
}
```

## Deleteing existing rooms

Make a DELETE request to `http://localhost:3000/api/room/0` where 0 is `room_number`

## Posting images to rooms

Make a POST request to `http://localhost:3000/api/room/0/img` with `multi-part form data` containing a input type file field with a the attribute name="img":
`<input name="img" type="file" />`

## Data schema

See [models/model.js](models/model.js).
