import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  {
    dialect:"postgres",
    define:{
      timestamps:false
    }  
  }
)

export default sequelize;
