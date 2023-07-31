const { db, Sequelize } = require("./db");
/* Write a route to serve up all pokemon Write a pokemon model with the following information:
name - not empty or null
type - not empty or null
trainer - not empty or null
date - not empty or null
imageUrl - with a default value */
// require each of your models
const Pokemon= db.define("Pokemon",{
  name:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{
      notEmpty: true,
    },
  },
  type:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  trainer:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  
  imageURL:{
    type:Sequelize.STRING,
    allowNull: true,
  },

});
/* Write a route to serve up all trainers Write a trainers model with the following information:
firstName - not empty or null
lastName - not empty or null
team - not empty or null
imageUrl - with a default value
Pokemon may be associated with at most one trainer
Likewise, trainers may be associated with many pokemon */

const Trainer=db.define("Trainer",{
firstName:{
  type:Sequelize.STRING,
  allowNull:false,
},
lastName:{
  type:Sequelize.STRING,
  allowNull:false,
},
team:{
type:Sequelize.STRING,
allowNull:false,
},
imageURL:{
type:Sequelize.STRING,
allowNull:true,
},
});

// place your associations here!
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);
// export your models below

module.exports = {
  db,Pokemon, Trainer
};
