const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}, 
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
})

const Role = sequelize.define('roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.STRING, unique: true, defaultValue: "USER"},
    description: {type: DataTypes.INTEGER, allowNull: false},
})

const UserRole = sequelize.define('users_roles', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const UserForm = sequelize.define('forms', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    surname: {type: DataTypes.STRING, allowNull: false}, 
    education: {type: DataTypes.STRING, allowNull: false},
    work: {type: DataTypes.STRING, allowNull: false},
});



User.hasMany(UserRole)
UserRole.belongsTo(User)

Role.hasMany(UserRole)
UserRole.belongsTo(Role)

User.hasMany(UserForm)
UserForm.belongsTo(User)

module.exports = {
    User,
    UserRole,
    Role,
    UserForm
}