const ToDoList = (sequelize, DataTypes) => {
  const ToDoList = sequelize.define('ToDoList', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
},
    item: DataTypes.STRING,
    status: DataTypes.STRING,
  },
  {
    timestamps: false
  });

  return ToDoList;
};

module.exports = ToDoList;