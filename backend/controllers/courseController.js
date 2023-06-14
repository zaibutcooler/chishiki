const Model = require("../models/Course");

const getAll = async (req, res) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getOne = async (req, res) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const createOne = async (req, res) => {
  const {
    title,
    teachers,
    students,
    outline,
    startDate,
    endDate,
    time,
    zoomID,
    zoomPassword,
    classroomLink,
    classroomType,
    classroomPassword,
    limit,
    paid,
    created,
  } = req.body;

  try {
    const item = new Model({
      title,
      teachers,
      students,
      outline,
      startDate,
      endDate,
      time,
      zoomID,
      zoomPassword,
      classroomLink,
      classroomType,
      classroomPassword,
      limit,
      paid,
      created,
    });
    const savedItem = await item.save();
    res.status(200).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateOne = async (req, res) => {
  try {
    const {
      title,
      teachers,
      students,
      outline,
      startDate,
      endDate,
      time,
      zoomID,
      zoomPassword,
      classroomLink,
      classroomType,
      classroomPassword,
      limit,
      paid,
      created,
    } = req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      {
        title,
        teachers,
        students,
        outline,
        startDate,
        endDate,
        time,
        zoomID,
        zoomPassword,
        classroomLink,
        classroomType,
        classroomPassword,
        limit,
        paid,
        created,
      },
      { new: true }
    );
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteOne = async (req, res) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
};
