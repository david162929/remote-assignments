const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "pug");


//mysql module
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "davidtest",
  password: "123qweasdzxc",
  database: "assignment"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

/*   con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
	console.log(result);
  });  */
    
});



app.get("/", (req, res) => {
	const signStatus = req.cookies.signStatus;
	res.render("index", {textFailed: signStatus});
	
});

app.get("/member", (req, res) => {
	res.render("member");
	
});

app.post("/sign-up", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	
	//access table and search
	con.query(`SELECT * FROM user WHERE email = "${email}"`, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		console.log(result.length);
		
		if (result.length === 0) {
			console.log("INSERT");
				//INSERT sign-up
				con.query(`INSERT INTO user (email, password) VALUES ('${email}', '${password}')`, function (err, result) {
					if (err) throw err;
					console.log("1 record inserted");
				});
				res.redirect("/member");
		}
		else {
				res.cookie("signStatus", `Sing up failed, someone used ${email}.`);
				res.redirect("/");
		}
	
	}); 
	
	
	
	
	/* //access table 
	con.query("SELECT * FROM user", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		//console.log(result[0]);
		//console.log(result[0].id);
		//console.log(result[0].email);
		//console.log(result[0].password);
		//console.log(result.length);
		
		function match(check, callback) {
			for (let i=0 ; i<result.length ; i++) {
				//var check = 0;
				if (email === result[i].email) {
					console.log("no");
					check += 1;
				}
				else {
					console.log("yes");
				}
			}
			callback(check);
		}
		
		function checkMatch (check) {
			if (check === 0 ) {
				console.log("INSERT");
				//INSERT sign-up
				con.query(`INSERT INTO user (email, password) VALUES ('${email}', '${password}')`, function (err, result) {
					if (err) throw err;
					console.log("1 record inserted");
				});
				res.redirect("/member");
			}
			else {
				res.cookie("signStatus", "Sing up failed");
				res.redirect("/");
			}
		}
		
		match(0, checkMatch);

	
	});  */
		
});

app.post("/sign-in", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	
	//access table and search
	con.query(`SELECT * FROM user WHERE email = "${email}"`, function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		console.log(result.length);
		
		if (result.length === 0) {
			console.log("do not match");
			res.cookie("signStatus", "Email not found.");
			res.redirect("/");
		}
		else if (result[0].password !== password) {
			console.log("wrong password");
			res.cookie("signStatus", "Wrong password.");
			res.redirect("/");
		}
		else {
			res.redirect("/member");
		}
	
	}); 
	
	
	/* //access table 
	con.query("SELECT * FROM user", function (err, result, fields) {
		if (err) throw err;
		console.log(result);
		
		function match(check, callback) {
			for (let i=0 ; i<result.length ; i++) {
				//var check = 0;
				if (email === result[i].email) {
					console.log("good");
					check += 1;
				}
				else {
					console.log("x");
				}
			}
			callback(check);
		}
		
		
		function checkMatch(check) {
			if (check === 0 ) {
			console.log("do not match");
			res.cookie("signStatus", "Sing in failed");
			res.redirect("/");
			}
			else {
			res.redirect("/member");
			}
		}
		
		match(0,checkMatch);
	
	});  */
		
});



app.listen(3000, () => {
	console.log("this app is running on port 3000.");
});
