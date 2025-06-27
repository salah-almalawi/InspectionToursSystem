const Manager = require('../models/manager');

exports.create = async (req, res) => {
  try {
    const manager = new Manager(req.body);
    await manager.save();
    res.status(201).json(manager);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.list = async (req, res) => {
  try {
    const managers = await Manager.find().populate('lastRounds');
    res.json(managers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.summary = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id).populate('lastRounds');
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    const InspectionRound = require('../models/inspectionRound');

    const allRounds = await InspectionRound.find()
      .populate('manager')
      .sort({ createdAt: 1 });

    res.json({ manager, allRounds });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const manager = await Manager.findById(req.params.id).populate('lastRounds');
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    res.json(manager);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { name, rank, department } = req.body;
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (rank !== undefined) updateData.rank = rank;
    if (department !== undefined) updateData.department = department;

    const manager = await Manager.findByIdAndUpdate(req.params.id, updateData, { new: true });
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }
    res.json(manager);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.remove = async (req, res) => {
  try {
    const manager = await Manager.findByIdAndDelete(req.params.id);
    if (!manager) {
      return res.status(404).json({ message: 'Manager not found' });
    }

    const InspectionRound = require('../models/inspectionRound');
    await InspectionRound.deleteMany({ manager: manager._id });

    res.json({ message: 'Manager deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};