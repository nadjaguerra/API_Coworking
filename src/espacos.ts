import { Sequelize, DataTypes } from "sequelize";
import { database } from "./db";

const SalaAgendamento = database.define("sala_agendamento", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  salaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // Adicione uma relação com a tabela de salas, se existir
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    // Adicione uma relação com a tabela de usuários, se existir
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataFim: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  // Adicione outros campos relevantes para um agendamento de sala
});

// Adicione relacionamentos, se necessário
// SalaAgendamento.belongsTo(Sala, { foreignKey: 'salaId' });
// SalaAgendamento.belongsTo(Usuario, { foreignKey: 'usuarioId' });

export default SalaAgendamento;
