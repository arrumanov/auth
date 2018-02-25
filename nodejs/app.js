// подключение express
var express = require("express"),
  axios = require("axios"),
  cors = require("cors"),
  cookieParser = require('cookie-parser');
  
// создаем объект приложения
var app = express();
app.use(cookieParser());
app.use(cors());
// определяем обработчик для маршрута "/"
app.get("/", function(request, response) {
  axios
    .post(
      "http://localhost:63921/token",
      null
      //{headers:{"Accept":"application/json","Content-Type":"application/json","Authorization": ("Basic " + new Buffer("admin:{your password}").toString('base64'))}}
    )
    .then(data => {      
      // response.cookie('token', data.data.access_token);//"access_token=" + data.access_token + "; path=/;";
      // response.send("dataasfasgfgf gsdgf sd g");
      console.log("Your Data", data.data.access_token);
      response.send(data.data.access_token);
    })
    .catch(e => {
      console.log("error", e.toString());
    });

  // отправляем ответ
  //response.send("<h2>Привет Express!</h2>");
});

//const token =
  //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiYWRtaW4iLCJuYmYiOjE1MTk0Njk1NDgsImV4cCI6MTUxOTQ2OTYwOCwiaXNzIjoiTXlBdXRoU2VydmVyIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo2MzkyMS8ifQ.o1uoxGv8gRpoZGZVd-VRRTo6_XCIg0vfs7hrVWfpCi8";
var data = '';
app.post("/value", function(request, response) {
    var token = request.cookies['token'];
    console.log(request);
  axios
    .get("http://localhost:63921/api/values/getlogin", {
      headers: { Authorization: "Bearer " + token } 
    })
    .then(data => {
      console.log("Your Data", data);
      response.send(data.data);
    })
    .catch(e => {
      console.log("error", e.toString());
    });

    // отправляем ответ
    //response.send("data");
});

app.get("/allproducts", function(request, response) {
  var token = request.cookies.get("token");
axios
  .get("http://localhost:63921/api/product/allproducts", {
    headers: { Authorization: "Bearer " + token } 
  })
  .then(data => {
    console.log("Your Data", data);
    response.send(data.data);
  })
  .catch(e => {
    console.log("error", e.toString());
  });

  // отправляем ответ
  //response.send("data");
});

app.get("/productbyid", function(request, response) {
  var token = request.cookies.get("token");
  var product = {
    "ProductID": 5,
    "ProductName": "Chef Anton's Gumbo Mix",
    "UnitPrice": 21.35,
    "UnitsInStock": 0,
    "Discontinued": true,
};
  var data = JSON.stringify(product)
axios
  .post("http://localhost:63921/api/product/productbyid", data, {
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + token } 
  })
  .then(data => {
    console.log("Your Data", data);
    response.send(data.data);
  })
  .catch(e => {
    console.log("error", e.toString());
  });

  // отправляем ответ
  //response.send("data");
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
