
const { DataTypes } = require("sequelize");
import sequelize from '@/db/config/config';

const User = sequelize.define(
    "users",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true,
        tableName: 'users_table',
    }
);

export default User;