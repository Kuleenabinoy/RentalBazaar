const User = require("./User");
const Categories = require("./Categories");
const Electronics = require("./Electronics");
const Furniture = require("./Furniture");
const Property = require("./Property");
const Vehicle = require("./Vehicle");
const Misc = require("./Misc");
//creating user - catergory relationship

User.hasMany(Categories, {
    foreignKey: "user_id",
    // onDelete: "CASCADE",
});
Categories.belongsTo(User, {
    foreignKey: "user_id",
});
//creating using vehicle relationship
//if a user is deleted then his vechile also need to be delete
User.hasMany(Vehicle, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Vehicle.belongsTo(User, {
    foreignKey: "user_id",
});
//user-furniture relationship
User.hasMany(Furniture, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Furniture.belongsTo(User, {
    foreignKey: "user_id",
});
//user-electronics
User.hasMany(Electronics, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Electronics.belongsTo(User, {
    foreignKey: "user_id",
});
//user -property
User.hasMany(Property, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Property.belongsTo(User, {
    foreignKey: "user_id",
});
//user-and all other Miscellaneous products
User.hasMany(Misc, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
});
Misc.belongsTo(User, {
    foreignKey: "user_id",
});
//category-property
Categories.hasMany(Property, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
});
Property.belongsTo(Categories, {
    foreignKey: "category_id",
});
Categories.hasMany(Electronics, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
});
Electronics.belongsTo(Categories, {
    foreignKey: "category_id",
});
Categories.hasMany(Furniture, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
});
Furniture.belongsTo(Categories, {
    foreignKey: "category_id",
});
Categories.hasMany(Vehicle, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
});
Vehicle.belongsTo(Categories, {
    foreignKey: "category_id",
});

Categories.hasMany(Misc, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
});
Misc.belongsTo(Categories, {
    foreignKey: "category_id",
});
module.exports = { User, Categories, Electronics, Furniture, Property, Vehicle, Misc };
