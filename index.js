const  express= require("express");
const mongoose=require("mongoose");
require("dotenv").config();
const cityRoutes=require('./src/routes/ciudades')

const app = express();
const port = process.env.PORT||9000;


//middleware
app.use(express.json());
app.use('/api',cityRoutes)


//routes

app.get('/',(req,res)=>{
    res.send("welcome to mi api")
})

//mongodb connection

mongoose.connect(
  process.env.MONGODB_URI
).then( ()=>console.log("Connected to MongoDB Atlas")).catch((error)=>console.error(error));



app.listen(port,()=>console.log('server listening on port:localhost:',port))


