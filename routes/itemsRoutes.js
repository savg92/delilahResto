const express = require ('express');
const router = express.Router();

const db = require('../models')

//post item
router.post('/', (req,res)=>{
    const {orderId,productId,quantity} = req.body;
    db.Item.create({orderId,productId,quantity})
    .then(r => res.send({message:`Item creado`}))
    .catch(err => {res.status(400).send({error: err || "error"});
    })
})

// get all items
router.get('/', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Item.findAll({include: [db.Order,db.Product]})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Listado de items',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver listado de items');
    }
}
);

//? get item by id
router.get('/:idItem', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Item.findOne({where:{idItem: req.params.idItem},include: [db.Order,db.Product]})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Detalles de item',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver item');
    }
}
);


// put item
router.put('/:idItem', (req, res)=>{
    const {orderId,productId,quantity}=req.body;
    if (req.user.type == 'admin'){
        db.Item.update({orderId,productId,quantity},{where:{idItem: req.params.idItem}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Item modificado',
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para borrar item');
    }
}
);


// delete item
router.delete('/:idItem', (req, res)=>{
    db.Item.destroy({where:{idItem: req.params.idItem}})
    .then((r) => {
        res.status(200).json({
            error: false,
            code: 200,
            mesage: 'Item borrado',
            answer: (r)
        })
    })
    .catch(err=>res.status(400).send({error: err || 'error' }))
}
);

module.exports = router;