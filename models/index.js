const sequelize = require("../config/db");
const Resource = require("./Resource");
const Booking = require("./Booking");

Resource.hasMany(Booking);
Booking.belongsTo(Resource);

sequelize.sync({ alter: true });

module.exports = { sequelize, Resource, Booking };
