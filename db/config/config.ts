import { Sequelize } from "sequelize";

const sequelize = new Sequelize("users_db", "root", "admin",
    {
        host: "127.0.0.1",
        dialect: "mysql",
        dialectModule: require('mysql2')
    }
);

export default sequelize;