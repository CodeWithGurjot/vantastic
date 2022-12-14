const mongoose = require('mongoose');

const jobModel = mongoose.Schema(
  {
    barber: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    price: {
      type: mongoose.Decimal128,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.model('Job', jobModel);

module.exports = Job;
