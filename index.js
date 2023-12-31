const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/todolistdb',{useNewUrlParser: true});   //data base name - todolistdb

const port = 3000

// var items = ["WakeUP",];
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("Public"))

const ToDo = mongoose.model("ToDo",{
     mywork : String
})


app.get('/', (req, res) => {
  
      ToDo.find({}).then((element)=>{
           if(element.length === 0){
            ToDo.insertMany([{mywork : "Wakeup"},{mywork :"Breathing"},{mywork :"Exercise"}]).then(function(){ 
                 console.log("Data inserted")  // Success 
                  }).catch(function(error){ 
                 console.log(error)      // Failure 
             }) ;
             res.redirect('/')
           }
           else{
               var mydate =date()
              res.render("list",{live : mydate, myitems : element });
           }
    })
})

app.post('/',function(req,res){ // insert new data
    var newdata = req.body.write
    if (newdata.length !==0){
    const newitem = new ToDo({
      mywork : newdata
    })
    newitem.save();
  }
    res.redirect('/')
  
})

app.post('/delete',function(req,res){ // deleting data 
  const del= req.body.check;
  ToDo.findByIdAndRemove(del)
  .then(function () {
      console.log("Successfully removed");
  })
  .catch(function (err) {
      console.log(err);
  });
  res.redirect("/");
    })
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})