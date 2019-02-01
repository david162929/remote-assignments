const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("index");
	
});

app.get("/getData", (req, res) => {
	const numberInput = req.query.number;
	let returnMessage = "";
	let sum = 1;
	let text = "1";
	//console.log(isNaN(numberInput));
	//console.log(parseInt(numberInput));
	//console.log(parseFloat(numberInput));
	
	if (numberInput === undefined) {
		returnMessage = "Lack of Parameter.";
	}
	else if (!isNaN(numberInput) && parseFloat(numberInput) === parseInt(numberInput) && parseInt(numberInput) > 0) {
		for (let i=2 ; i < parseInt(numberInput)+1 ; i++) {
			sum += i;
			text = text + "+" + i;
		}
		
		returnMessage = text + " = " + sum;
	}
	else {
		returnMessage = "Wrong Parameter.";
	}
	
	res.render("getdata", {returnMessage: returnMessage});	
});

app.get("/myName", (req, res) => {
	const name = req.cookies.username;
	if (name) {
		res.render("myName", {name: name});
	}
	else {
		res.render("myName");
	}
	
});

app.post("/trackName", (req, res) => {
	res.cookie("username", req.body.username);
	res.redirect("/myName");
});


app.listen(3000, () => {
	console.log("this app is running on port 3000.");
});