const mongoose = require('mongoose');
const { Schema } = mongoose;

const HijriSchema = new Schema({
    year: Number,
    month: Number,
    day: Number,
    time: String
}, { _id: false });

const InspectionRoundSchema = new Schema(
    {
        manager: { type: Schema.Types.ObjectId, ref: 'Manager', required: true },
        location: { type: String, required: true },
        day: { type: String, required: true },
        Hijri: HijriSchema
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('InspectionRound', InspectionRoundSchema);