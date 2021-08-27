const express = require ('express');
const router = express.Router();

const db = require('../models')

//post order
router.post('/', (req,res)=>{
    const {status,userId,totalPrice,paymentMethod} = req.body;
    if (req.user.type == 'admin'){
        db.Order.create({status,userId,totalPrice,paymentMethod})
        .then(r => res.send({message: `Pedido creado`}))
        .catch(err => {res.status(400).send({error: err || "error"})})
    } else if (req.user.type == 'client'){
        db.Order.create(
            {
                userId: req.user.id,
                totalPrice,
                paymentMethod
            }
        )
        .then(r => res.send({message: `Pedido creado`}))
        .catch(err => {res.status(400).send({error: err || "error"})})
    } else {
        res.status(401).send('No Autorizado para crear pedido');
    }
})

// get all order
router.get('/', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Order.findAll(
            {include: [
                {
                    model:db.User,
                    attributes: { exclude: ['password']}
                },
                db.Item]})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Listado de pedidos',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.type == 'client'){
        db.Order.findAll({where:{userId: req.user.id}, attributes: {exclude: ['createdAt', 'updatedAt']}, include: [db.Item]
        })
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Listado de pedidos',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver la lista de pedidos');
    }
}
);

// get order by id
router.get('/:idOrder', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Order.findOne(
            {
                where:{idOrder: req.params.idOrder},
                include: [
                    {
                    model:db.User,
                    attributes: { exclude: ['password']}
                    }
                ,db.Item]
            }
        )
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Detalles de pedido',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.type == 'client'){
        db.Order.findOne({where:{idOrder: req.params.idOrder, userId: req.user.id}, include: [db.Item]})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Detalles de pedido',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver pedido');
    }
}
);


// put order
router.put('/:idOrder', (req, res)=>{
    const {status,totalPrice,paymentMethod}=req.body;
    if (req.user.type == 'admin'){
        db.Order.update({status,totalPrice,paymentMethod},{where:{idOrder: req.params.idOrder}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: `Pedido ${req.params.idOrder} modificada`,
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver o modificar pedido');
    }
}
);


// put order cancelation
router.put('/:idOrder/cancelation', (req, res)=>{
    const {status}=req.body;
    if (req.user.type == 'admin'){
        db.Order.update({status: 'cancelado'},{where:{idOrder: req.params.idOrder}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: `Pedido ${req.params.idOrder} cancelado`,
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.type == 'client'){
        db.Order.update({status: 'cancelado'},{where:{idOrder: req.params.idOrder, userId: req.user.id}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: `Pedido ${req.params.idOrder} cancelado`,
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    }else {
        res.status(401).send('No Autorizado para ver pedido');
    }
}
);


// delete order
router.delete('/:idOrder', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Order.destroy({where:{idOrder: req.params.idOrder}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Pedido borrado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para borrar un pedido');
    }
}
);

module.exports = router;