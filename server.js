require('dotenv').config();

const express = require('express');
const app = express();

const helmet = require('helmet');
const cors = require('cors')
const expressJwt = require('express-jwt');

const db = require('./models')

const {HOST_PORT, APP_KEY} = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(helmet())
app.use(cors())

app.use(expressJwt({secret: APP_KEY, algorithms:['HS512'] }).unless({path: ['/login', '/register']}));


app.use('/', require('./routes/authRoute'))
app.use('/users', require('./routes/usersRoutes'))
app.use('/products', require('./routes/productsRoutes'))
app.use('/orders', require('./routes/ordersRoutes'))
app.use('/items', require('./routes/itemsRoutes'))
app.use('/favorites', require('./routes/favoritesRoutes'))


db.sequelize.sync().then(()=>{
    app.listen(HOST_PORT, ()=> console.log(`Server listening on port ${HOST_PORT}`));
})
