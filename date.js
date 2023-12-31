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