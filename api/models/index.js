const User = require("./user");
const Film = require("./film");
const Tv = require("./tv");

User.belongsToMany(Film, { as: "favorites", through: "favorites_films" });
Film.belongsToMany(User, { as: "favorites", through: "favorites_films" });
User.belongsToMany(Tv, { as: "favorites", through: "favorites_tv" });
Tv.belongsToMany(User, { as: "favorites", through: "favorites_tv" });

module.exports = { Film, User, Tv };
