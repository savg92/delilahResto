const express = require ('express');
const router = express.Router();

const db = require('../models')

//post favorite
router.post('/', (req,res)=>{
    db.Favorite.create({userId: req.user.id,productId: req.body.productId})
    .then(ref => res.send({message:`Added Successfully`}))
    .catch(err => {
        console.error('Petition Error: ', err);
        res.status(400).send({error: err || "error"});
    })
})

// get all favorites
router.get('/', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Favorite.findAll(
            {
                include: [
                    {
                    model:db.User,
                    attributes: { exclude: ['password']}
                    },
                    db.Product
                ]
            }
        )
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Listado de favoritos',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.id){
        db.Favorite.findAll({where:{userId: req.user.id}, attributes: {exclude: ['idFavorite', 'userId']}, include: [db.Product]})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Su listado de favoritos',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } 
    else {
        res.status(401).send('No Autorizado para ver listado de favoritos');
    }
}
);


// get favorite by id
router.get('/:idFavorite', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Favorite.findOne(
            {
                where:{idFavorite: req.params.idFavorite}, 
                include: 
                    [{
                        model:db.User,
                        attributes: { exclude: ['password']}
                    },
                    db.Product]
            }
        )
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Detalles de favorito',
                answer: (r)
                })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver favorito');
    }
}
);


// put favorite
router.put('/:idFavorite', (req, res)=>{
    const {userId,productId}=req.body;
    if (req.user.type == 'admin'){
        db.Favorite.update({userId,productId},{where:{idFavorite: req.params.idFavorite}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Favorito modificado',
                })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para modificar item');
    }
}
);


// delete favorite
router.delete('/:idFavorite', (req, res)=>{
    if (req.user.type == 'admin'){
        db.Favorite.destroy({where:{idFavorite: req.params.idFavorite}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Favorito borrado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.type == 'client'){
        db.Favorite.destroy({where:{idFavorite: req.params.idFavorite, userId: req.user.id}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Favorito borrado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para eliminar favorito');
    }
}
);

module.exports = router;