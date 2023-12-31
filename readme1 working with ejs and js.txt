Step 1 - First we install Express,Body-parser

Step 2 - Make Express Server 

Step 3 - Use app.get Method to SEND (WEEKEND AND WORKING DAY)

      app.get('/', (req, res) => {

           var today = new Date();
           var currentday = today.getDay()
               
           if ( currentday === 6 || currentday === 0){
                res.write(" WEEKEND ")
          else{
               res.write('WORKING DAY")

      })

Step 4 - Let's Make list.ejs in Views** folder 

        <h1 text-align ="centre">  <%= live %> </h1>  ['live' Give Dynamic String In Html]

        app.set('view engine','ejs')  [Paste In The Js File]


Step 5 - Use New Method TO Send Date in app.get() HTML With EJS 

           var today = new Date()
    
             var options = { 
               weekday : "long",
               month : "long",
               day : "numeric"
             };
          
        var mydate = today.toLocaleDateString("en-Us", options)

        res.render("list",{live : mydate})

Step 6 - Make list in list.ejs file and input and submit button
         
          <ul>
              <li> Buy Food </li>
              <li> <%= mylist %> </li>
          </ul>

          <form action="/" method="post">
                <input type="text" placeholder="Enter " name="write" autocomplete="off">
                <button> + </button>
          </form>

Step 7 - Use app.post and Body parser to Push new String in items

         var items = [] 

         app.post('/',function(req,res){
            var item = req.body.write
            items.push(item)
            res.redirect('/')
         })

         res.render("list",{live : mydate, myitems:items})

      **Them It Will Render The Enter NEW Element like This

          . Buy Food
          . Cook,Water,Eat

Step 8 -  For New Element Show in New Line, Applied Change In list.ejs

             <li> Buy Food </li>     ** Clear This Line **

            <%  for(var i=0 ; i<myitems.length ;i++){ %>
                  <li> <%= myitems[i] %> </li>
            <%  } %>

           Add items In This Array
                  var items = ["Buy Food",] 

Step 9 - Then WE Entered New Element In List Like This
          
          . Buy Food
          . Cook it
          . Eat Food

Step 10 - After All We Applied CSS in link.ejs
           
          <link rel="stylesheet" href="styles.css">
        
     After Reload Page it not Working
     then Make Public Folder And MOve style.css File into this Folder

Step 11- we write in index.js

       app.use(bodyParser.urlencoded({ extended: true }))
    ***app.use(express.static("Public"))*********

      Lets CSS WOrking Now


step 12 - Further , Lets Enclose date,list,form and Submit Button With <div>


     <div class="box" id = "heading">
        <h1 text-align ="centre"><%= live %></h1>
     </div>
    
......................................................

     <div class="box">
        <%  for (var i = 0 ; i < myitems.length ; i++){ %>
            <div class="item">  
                <input type="checkbox">  
                <p> <%= myitems[i] %></p>

            </div>

        <%  } %>

            <form action="/" method="post" class="item"> 

                <input type="text" placeholder="Enter " name="write" autocomplete="off">
                <button>+</button>
        
            </form>
       </div>



Step 13 - Create Date Module -------
          Make Date.js File 

Step 14 -  Create Funtion Of Date that return Date

          module.exports = date;

          function date(){
             var today = new Date()
    
          var options = {
              weekday : "long",
              month : "long",
              day : "numeric"
           };
          var mydate = today.toLocaleDateString("en-Us", options)
            return mydate
           }

Step 15 - in Index.js file Access Local Module from this

           const date = require(__dirname + "/date.js")
 

At Last -----

           var mydate = date()
           res.render("list",{live : mydate, myitems : items })  

 

