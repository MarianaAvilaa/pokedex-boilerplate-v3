const fs=require("fs");
//https://github.com/se7en-illa/TTP-Summer-2023/blob/main/02_Frontend/03_Fullstack/demo/bin/seed.js




const seed = async () => {
  await db.sync({ force: true });

  // create some pokemon

  // create some trainers

  db.close();
  console.log(`
    Seeding successful! Pokedex is ready.
    `);
};
