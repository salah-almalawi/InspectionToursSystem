const InspectionRound = require('../models/inspectionRound');
const Manager = require('../models/manager');

exports.create = async (req, res) => {
  try {
    const round = new InspectionRound(req.body);
    await round.save();

    await Manager.findByIdAndUpdate(round.manager, { $push: { lastRounds: round._id } });

    res.status(201).json(round);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.list = async (req, res) => {
  try {
    const rounds = await InspectionRound.find().populate('manager');
    res.json(rounds);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getById = async (req, res) => {
  try {
    const round = await InspectionRound.findById(req.params.id).populate('manager');
    if (!round) {
      return res.status(404).json({ message: 'Inspection round not found' });
    }
    res.json(round);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};