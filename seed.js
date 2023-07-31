const fs=require("fs");
const {db}= require("./server/db/db");
const { Pokemon, Trainer } = require("./server/db");
//https://github.com/se7en-illa/TTP-Summer-2023/blob/main/02_Frontend/03_Fullstack/demo/bin/seed.js




const seed = async () => {
  await db.sync({ force: true });

  const Mariana= await Trainer.create({
    firstName: 'Mariana',
    lastName: 'Avila',
    team: "JohnJay",
  
  });

  // create some pokemon
  const pikachu= await Pokemon.create({
    name:" Pikachu",
    type:"Lighting",
    trainer:"Mariana",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png",
    TrainerId:  Mariana.id,
  });

  // create some trainers
 

  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);

} ;
seed();
