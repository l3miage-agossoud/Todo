//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controller = require('../controllers/todo');

//CREATE
router.post("/todo", (req, res) => {

    controller.create(req, res);

});

//READ
router.get("/todos", (req, res) => {
    
    controller.reads(req, res);

});

router.get("/todo/:id", (req, res) => {
    
    controller.read(req, res);

});

//UPDATE
router.put("/todo", (req, res) => {
    res.json({"msg": "Update a Todo"});
});

//DELETE
router.delete("/todo/:id", (req, res) => {
    
    controller.delete(req, res);
    
});

module.exports = router;