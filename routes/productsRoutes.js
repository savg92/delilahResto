const express = require ('express');
const router = express.Router();

const db = require('../models')

//post product
router.post('/', (req,res)=>{
    const {productName,shortName,unitPrice,description,imgProduct} = req.body;
    if (req.user.type == 'admin'){
        db.Product.create({productName,shortName,unitPrice,description,imgProduct})
        .then(r => res.send({message: `Producto creado`}))
        .catch(err => {
            console.error('Petition Error: ', err);
            res.status(400).send({error: err || "error"});
        })
    } else {
        res.status(401).send('No Autorizado para agregar un producto');
    }
})

// get all products
router.get('/', (req, res)=>{
    db.Product.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}})
    .then((r) => {
        res.status(200).json({
            error: false,
            code: 200,
            mesage: 'Listado de productos',
            answer: (r)
        })
    })
    .catch (err=>res.status(400).send({error: err || 'error' }))
}
);

//? get product by id
router.get('/:idProduct', (req, res)=>{
    db.Product.findOne({where:{idProduct: req.params.idProduct}, attributes: {exclude: ['createdAt', 'updatedAt']}})
    .then((r) => {
        res.status(200).json({
            error: false,
            code: 200,
            mesage: 'Detalles de producto',
            answer: (r)
        })
    })
    .catch (err=>res.status(400).send({error: err || 'error' }))
}
);


// put product
router.put('/:idProduct', (req, res)=>{
    const {productName,shortName,unitPrice,description,imgProduct}=req.body;
    if (req.user.type == 'admin'){
        db.Product.update({productName,shortName,unitPrice,description,imgProduct,},{where:{idProduct: req.params.idProduct}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Producto modificado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error'}))
    } else {
        res.status(401).send('No Autorizado para modificar un producto');
    }
}
);


// delete product
router.delete('/:idProduct', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Product.destroy({where:{idProduct: req.params.idProduct}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Producto borrado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para borrar producto');
    }
}
);

module.exports = router;