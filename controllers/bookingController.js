const { Booking, Resource } = require("../models");

exports.createBooking = async (req, res) => {
  const { user, date, resourceId } = req.body;
  const booking = await Booking.create({ user, date, ResourceId: resourceId });
  res.json(booking);
};

exports.cancelBooking = async (req, res) => {
  const { id } = req.params;
  await Booking.destroy({ where: { id } });
  res.json({ message: "Booking cancelled" });
};
