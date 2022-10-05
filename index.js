const  express= require("express");
const mongoose=require("mongoose");
const cors = require("cors");
require("dotenv").config();
const busRoutes=require('./src/routes/busRoutes')


const app = express();

const port = process.env.PORT||9000;


//middleware
app.use(express.json());
app.use(cors());


//routes
app.use("/api", busRoutes);
app.get('/',(req,res)=>{
    res.send({"message":"welcome to my rest-api,connected to MongoDB Atlas"})
    
})

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));



app.listen(port,()=>console.log('server listening on port:localhost:',port))


