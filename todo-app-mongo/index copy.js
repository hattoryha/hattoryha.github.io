const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var elements


app.use(bodyParser.urlencoded({extended:true}))
const MongoClient = require("mongodb").MongoClient
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log(err)
    }
    var dbo = client.db("hw")
    dbo.collection("newtodo").find({}).toArray(function(err, result) {
      if (err) throw err;
      // console.log(result);
      elements = result;
      test = 2;
      console.log("Đã kết nối tới database")
      app.get("/todo", function(req, res) {
        elements = result;
        res.render("index.ejs", {elements: elements})
        console.log("xem nhanh nay co hoat dong ko");
      })
      app.post("/new-todo", function(req, res) {
        console.log("da nhan yeu cau them the", req.body)
        var customer_infor = { name: req.body.name, email: req.body.email, img: req.body.img };
        dbo.collection("newtodo").insertOne(customer_infor, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });
        res.redirect("/todo")
    })
    })
})
app.set("view engine", "ejs")
app.use(express.static(__dirname));

// app.post("/new-todo", function(req, res) {
//     console.log("da nhan yeu cau them the", req.body)

// })

// app.get("/todo", function(req, res) {
//   elements = result;
//   res.render("index.ejs", {elements: elements})
//   console.log("xem nhanh nay co hoat dong ko");  
// })
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

