const router = require("express").Router();

const { db,Pokemon,Trainer } = require("../db");

// Connect your API routes here!
router.get("/pokemons",async(req,res,next) => {
    try{
        const Pokemons= await Pokemon.findAll();
        console.log(Pokemons);
        res.send(Pokemons);
    }catch(err){
        next(err);
    }
});
router.get("/trainers",async(req,res,next)=>{
    try{
        const Trainers= await Trainer.findAll();
        res.send(Trainers);
    }catch(err){
        next(err);
    }
});
router.get("/pokemons/:id",async(req,res,next)=>{
try{

    const pokemon= await Pokemon.findOne({
        where:{ id: req.params.id},
        include: Trainer,  
    });
    res.send(pokemon);
}catch(err){
    next(err);
}
});
router.get("/trainers/:id",async(req,res,next)=>{
        try{
        
            const trainer= await Trainer.findOne({
                where:{ id: req.params.id},
                include: Pokemon, 
            });
            res.send(trainer);
        }catch(err){
            next(err);
        }
        });

// Route to add a new Pokemon
router.post("/pokemons",async (req,res) => {
    const pokemon = await Pokemon.create(req.body);
    res.json(pokemon);
});

//Route to add a new Trainer
router.post("/trainers",async(req,res) => {
 const trainer = await Trainer.create(req.body);
 res.json(trainer);
});


//Removing a Pokemon based on ID
router.delete("/pokemon/:id", async(req, res) => {
    const pokemon= await Pokemon.findOne({
        where:{ id: req.params.id},
        
    }); 
    if(pokemon){
    await pokemon.destroy();
    res.status(204).send();
    }else{
        res.status(404).send("pokemon not found");
    }
});
//Removing a trainer based on ID
router.delete("/trainer/:id",async(req, res) => {
    const trainer= await Trainer.findOne({
        where: { id: req.params.id},

    });
    if(trainer){
        await trainer.destroy();
        res.status(204).send();
    }else{
        res.status(404).send("trainer not found");
    }
});

//Updating a Pokemon


module.exports = router;


