import { Sequelize } from "sequelize";
import db from "../config/index.js";

const { DataTypes } = Sequelize;

const programModel = db.define(
  "program",
  {
    judul: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default programModel;

(async () => {
  await db.sync();
})();
