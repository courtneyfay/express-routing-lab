/* BONUS:
--Handle wrong responses with appropriate HTTP status and responses (404, 500, 422)
		https://github.com/den-materials/js-ajax-lesson
--Add some validations for create and update to make sure our candies have a name and a color
		loop through the array?
*/

var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{"id":1, "name":"Chewing Gum",	"color":"Red"},
	{"id":2, "name":"Pez",					"color":"Green"},
	{"id":3, "name":"Marshmallow",	"color":"Pink"},
	{"id":4, "name":"Candy Stick",	"color":"Blue"}
];

//What would need to go into candies
//in order to pass our first test?

// INDEX route
// finds the array of candies, parse, and display all the data
router.get('/', function(req,res) {
	console.log(res);
	res.json(candies);
});

// SHOW route
// finds the one item in our candies array whose id matches the id from the request URL
router.get('/:id', function(req,res){
	let myCandy = candies.filter(function(element){
		return element.id == req.params.id;
	});
	res.json(myCandy[0]);
});

// CREATE route
// adds the new candy to the array and display all the candies in the array
/* Body: {"id": 5, "name":"Jelly Belly","color":"Orange"} */
router.post('/', function(req,res){
	res.json("Candy saved!");
	candies.push(req.body);
	res.json(candies);
});

// UPDATE route
// finds the one item we want to update, changes the color property and displays only the updated element
router.put('/:id', function(req,res){
	let updatedCandy = candies.filter(function(element){
		if (element.id == req.params.id){
			element.color = 'white';
			candies.splice(2, 1, element);
			return element;
		};
	});
	res.json(updatedCandy[0]); 
});

// DESTROYYY route
router.delete('/:id', function(req,res){
	candies.filter(function(element){
		if (element.id == req.params.id){
			// removes 1 from the id so that it corresponds to the array index
			let index = element.id - 1;
			// removes the element and replaces it with a null value
			candies.splice(index, 1, null);
			return element;
		};
	});
	res.json({ message: 'Deleted' });
});

module.exports = router;