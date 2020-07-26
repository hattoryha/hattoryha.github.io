var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "510108",
  database: "customer"
});
con.connect(function(err) {
	if (err) throw err
});

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
let elements


app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.use(express.static(__dirname));

app.post("/new-todo", function(req, res) {
    console.log("da nhan yeu cau them the", req.body)
    if (req.body.img == "" || req.body.name == "" || req.body.email == "") {console.log("yeu cau nhap du truong");}
    else {
          var newID
          con.query("select max(id) as max_id from customerInfo", function (err, result) {
            if (err) throw err;
            newID = result[0].max_id + 1;
            console.log(result[0].max_id);
            console.log(newID);
            var sql = `INSERT INTO customerInfo (id,name,img,email) VALUES (${newID}, '${req.body.name}', '${req.body.img}', '${req.body.email}')`;
            console.log(sql);
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
              res.redirect("/todo")
            });
          });
    }
})

app.get("/todo", function(req, res) {
  con.query("SELECT * FROM customerInfo", function (err, result, fields) {
    if (err) throw err;
    elements = result;
    res.render("index.ejs", {elements: elements})
  });
  console.log("xem nhanh nay co hoat dong ko");
  
})
app.post("/xoa-the", function(req, res) {
    var sql = `DELETE FROM customerInfo WHERE name = '${req.body.name}'`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
      res.redirect("/todo")
    });
})

app.post("/edit_card", function(req, res) {
  console.log(req.body);
  var sql =`UPDATE customerInfo SET name = '${req.body.name}', email = '${req.body.email}', img = '${req.body.img}' WHERE name = '${req.body.old_name}'`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(`Number of records deleted: '${result.affectedRows}'`);
    res.redirect("/todo");
  })
})

app.listen(5000, function() {
    console.log("hello nodejs is running on port 5000")
})

