// require('dotenv').config();
const express = require ('express');
const router = express.Router();

const db = require('../models')

const {APP_KEY} = process.env;

const jwt = require('jsonwebtoken');

router.post('/login', async(req,res)=>{
    const {userName, email, password} = req.body;
    let query ={};
    let where = {}
    
    if (userName) {
        where.userName= userName;
    }else if (email) {
        where.email= email
    }
    
    query.where=where

    const validateUsername = await db.User.findOne(query)
    .catch(err=> console.log("error", err))
    if (!validateUsername) {
        return res.status(401).json({message: "Usuario y/o contraseña incorrecta"})
    }
    
    const validatePassword = await db.User.findOne({where:{password}})
    .catch(err=> console.log("error", err))
    if (!validatePassword) {
        return res.status(401).json({message: "Usuario y/o contraseña incorrecta"})
    }
    
    const o = {
        id : validateUsername.idUser ,
        name : validateUsername.firstName,
        type : validateUsername.isAdmin
    }
    
    const tkn = jwt.sign( o, APP_KEY, {algorithm: 'HS512'}, { expiresIn: '1h' });
    
    res.json({message: 'Bienvenido/a!' ,token : tkn });
})

//post user
router.post('/register', (req,res)=>{
    const {firstName,lastname,userName,password,email,phone,address} = req.body;
    if (firstName!== null && lastname!== null && userName!== null && password!== null && email!== null && phone!== null && address) {
        db.User.create({firstName,lastname,userName,password,email,phone,address})
        .then(ref => res.send({message: `Usuario añadido`}))
        .catch(err => {res.status(400).send({error: err || "error"})})
    }else{
        res.status(400).send({message: 'Datos incompletos'})
    }
})

module.exports = router;