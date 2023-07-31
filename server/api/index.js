const router = require("express").Router();
const { ConnectionRefusedError } = require("sequelize");
const { db,Pokemon,Trainer } = require("../db");

// Connect your API routes here!
router.get("/pokemons",async(req,res,next) => {
    try{
        const Pokemons= await Pokemon.findAll();
        res.send(Pokemons);
    }catch(err){
        next(err);
    }
});
router.get("/trainer",async(req,res,next)=>{
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
router.post("/pokemon",async (req,res) => {
    const pokemon = await Pokemon.create(req.body);
    res.json(pokemon);
});
module.exports = router;
