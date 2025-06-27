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