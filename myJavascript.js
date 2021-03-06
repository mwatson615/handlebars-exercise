//sample data modified from randomUser.me
// var randomUser = {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "ms",
//         "first": "stella",
//         "last": "meyer"
//       },
//       "location": {
//         "street": "7385 kapellenweg",
//         "city": "schmalkalden-meiningen",
//         "state": "saarland",
//         "postcode": 58225
//       },
//       "email": "stella.meyer@example.com",
//       "picture": {
//         "medium": "https:\/\/randomuser.me\/api\/portraits\/med\/women\/50.jpg"
//       },
//       "nat": "DE"
//     }
//   ]
// }
function getRandomUser() {
  return new Promise(function(resolve, reject) {
  $.ajax({
  url: 'https://randomuser.me/api/'
  })
  .done(function(data, textStatus, XHR) {
    console.log("data", data)
    resolve(data)
})
})
}
getRandomUser()
.then(function(val) {
console.log(val);


//handlebars step one: grap the html from the script tag
var htmlScript = $("#htmlInput").html();

//handlebars step two: compile it into a template
var entryTemplate = Handlebars.compile(htmlScript);

//handlebars step three:render the HTML by passing the data to the template
var htmlOutput = entryTemplate(val);

//handlebars step four: put the complete HTML into the DOM
$("#output").append(htmlOutput);

console.log(htmlOutput);

})
