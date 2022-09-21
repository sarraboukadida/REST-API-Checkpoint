const express = require ('express') ;
const app = express();
app.use(express.json()) ;
const dotenv = require('dotenv') ;
dotenv.config ({path:'./config/.env'}) ;
require ('./config/connectDB') ;



const userRoutes = require ('./routes/userRoutes') ;
app.use('/api/v1/users', userRoutes) ;


app.listen(5000, (err) => 
  err ? console.log(err) : console.log('server is running on port 5000')
);