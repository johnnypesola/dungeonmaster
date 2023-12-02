const express = require("express");
const router = express.Router();
const Model = require("../models/model");
const multer = require("multer");
const path = require("path");

// Configure file upload options using multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, req.params.roomNumber + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes
router.get("/init", async (req, res) => {
  const count = await Model.countDocuments({ room_number: 0 });

  if (count) {
    res.status(500).json({ message: "database is already initialized" });
    return;
  }
  const data = require("../dungeon.rooms.json");
  await Model.collection.insertMany(data);

  res.status(201).json({ message: "database initialized successfully" });
});

router.get("/room/:roomNumber", async (req, res) => {
  try {
    const data = await Model.findOne({
      room_number: Number(req.params.roomNumber),
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/room", async (req, res) => {
  const newRoom = new Model(req.body);

  const count = await Model.countDocuments({
    room_number: newRoom.room_number,
  });

  if (count) {
    res
      .status(500)
      .json({
        message: `a room with room_number ${newRoom.room_number} already exists`,
      });
    return;
  }

  try {
    await newRoom.save();
    res.status(201).json({ message: "room successfully created" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/room/:roomNumber/img", upload.single("img"), async (req, res) => {
  const count = await Model.countDocuments({ room_number: req.params.roomNumber });

  if (!count) {
    res.status(500).json({ message: "no room with that number exists" });
    return;
  }

  console.log("File uploaded for room: " + req.roomNumber, req.file);
  res.status(200).json({ message: `file successfully uploaded` });
});

router.delete("/room/:roomNumber", async (req, res) => {
  try {
    const result = await Model.deleteOne({
      room_number: Number(req.params.roomNumber),
    });

    if (result.deletedCount) {
      res.status(200).json({ message: "room successfully deleted" });
    } else {
      throw new Error("could not delete room");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
