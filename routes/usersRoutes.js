const express = require ('express');
const router = express.Router();

const db = require('../models')

// get all users
router.get('/', (req, res)=>{
    if (req.user.type == 'admin'){
        db.User.findAll({attributes: {exclude: ['password']}},)
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Listado de usuarios',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error'}))
    } else if (req.user.type == 'client'){
        db.User.findAll({where:{idUser: req.user.id}, attributes: { exclude: ['password', 'isAdmin', 'createdAt', 'updatedAt']}})
        .then((r) => {
            res.status(206).json({
                error: false,
                code: 206,
                mesage: 'Informacion de usuario',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver la lista de usuarios');
    }
}
);

// get user by id
router.get('/:idUser', (req, res)=>{
    if (req.user.type == 'admin'){
        db.User.findOne({where:{idUser: req.params.idUser}, attributes: { exclude: ['password'] }})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Detalles de usuario',
                answer: (r)
            })
            console.log(r)
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para ver los detalles del usuario');
    }
}
);


// put user
router.put('/:idUser', (req, res)=>{
    const {firstName,lastname,userName,password,email,phone,address,isAdmin}=req.body;
    if (req.user.type == 'admin'){
        db.User.update({firstName,lastname,userName,password,email,phone,address,isAdmin},{where:{idUser: req.params.idUser}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Usuario modificado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else if (req.user.type == 'client' && req.user.id == req.params.idUser){
        db.User.update({firstName,lastname,userName,password,email,phone,address},{where:{idUser: req.params.idUser}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Usuario modificado',
                answer: (r)
            })
        })
        .catch (err=>res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para modificar los detalles del usuario');
    }
}
);


// delete user
router.delete('/:idUser', (req, res)=>{
    if (req.user.type == 'admin'){
        db.User.destroy({where:{idUser: req.params.idUser}})
        .then((r) => {
            res.status(200).json({
                error: false,
                code: 200,
                mesage: 'Usuario borrado',
                answer: (r)
            })
        })
        .catch (err=>
            res.status(400).send({error: err || 'error' }))
    } else {
        res.status(401).send('No Autorizado para borrar el usuario. Solo admin');
    }
}
);

module.exports = router;