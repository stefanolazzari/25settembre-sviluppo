const express = require("express"); 
const app = express();

const statici = express.static('public');
app.use(statici);

app.get('/', (req,res)=>{
    res.send("ciao");
})

app.listen(3000,()=> console.log("in ascolto sulla porta 3000"));





