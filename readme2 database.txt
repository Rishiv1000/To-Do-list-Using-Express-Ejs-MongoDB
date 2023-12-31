 MAKE A DATABASE FOR TODO LIST-

step 1 = delete the "items" array in js file

step 2 = install mongoose and connect mongoose
            
        const mongoose = require('mongoose)
        
        mongoose.connect('mongodb://127.0.0.1:27017/todolistdb',{useNewUrlParser: true});   //Database name - todolistdb

step 3 = write the schema of database "todolistdb"................

         const itemschema = {
                       mywork : String;
         }
         

         then make a model (collection) of that schema...................
             
               const ToDo = mongoose.model("Todo",itemsschema) .................."Todo" is the name of the collection in todolistdb DATABASE
                                        

************************** Below make model direct with schema....................
        
         const ToDo = mongoose.model("ToDo",{
                       mywork : String
          })


step 4 =   make & insert collection of some item like schema with ToDo model .
    
           const item1 = new ToDO({
                   mywork : "WAKE UP"
          })                              .............................................................. MAKE ONE BY  ONE

            const item1 = new ToDO({
                   mywork : "WAKE UP"
          })
            
          const items = [item1 ,item2]

           ToDo.insert(items,callback_function) ........................... INSERT

            **************************************************************
           NEW UPDATED INSERTMANY FUNCTION-

           ToDo.insertMany([{mywork : "Wakeup"},{mywork :"Breathing"},{mywork :"Exercise"}]).then(function(){ ............................. MAKE && INSERT DATA 
                 console.log("Data inserted")  // Success 
                  }).catch(function(error){ 
                 console.log(error)      // Failure 
             }) ;


step 5 = how to find data with the help of js in app.get.

         items.find({} , function(err, founditems){
               console.log(founditems)
         });

       ******************************************
         change "console.log(founditems)" to "res.render(".ejs file" ,{ newlistitems : founditems});

       ///////////////////////////////////////////
         edit in .ejs file-
      
          <%= newlistitems.mywork %>
       
     /////////////////////////////////////////
            newlistitems.forEach(function(data){
                   data.mywork
             })


step 6 = insert data from frontend to ToDO collection.

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

step 7 = delete data from frontend.
          
          in ejs file,   <input type="checkbox" name="check" value="<%= element._id %>" onchange="this.form.submit()">
            
          in js file,

               app.post('/delete',function(req,res){ // deleting data 
                            const del= req.body.check;
                            ToDo.findByIdAndRemove(del).then(function () {
                                  console.log("Successfully removed");
                             }).catch(function (err) {
                                  console.log(err);
                           });
              res.redirect("/");
             })

         

     





























     