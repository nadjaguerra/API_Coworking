import { Sequelize, DataTypes, Model } from "sequelize";

class Coworking extends Model {
  static init(sequelize: Sequelize) {
    return super.init(
      {
        reservaID: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        cliente: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        sala: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        horaInicio: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        horaFim: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Coworking",
      }
    );
  }
}
