const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin:"*"
}

app.use(cors(corsOptions));
app.use(express.json())

const db = require("./app/models")
db.mongoose.connect(db.url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then( () => {
    console.log("connected to db");
}).catch(err => {
    console.log("cannot connect to db",err)
    process.exit()
})

app.get("/test",(req,res) => {
    res.json({message:"welcome to NodeJS App"})
});

require("./app/routes/user.routes")(app);

const PORT = 8080;
app.listen(PORT,() => {
    console.log(`server running on port: ${PORT}`);
});