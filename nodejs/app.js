// подключение зависимостей
var express = require("express"),
  axios = require("axios"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser");

// создаем объект приложения
var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const MAIN_URL = "http://localhost:63921";

var getToken = function(request){
  return request.body.token;
}

// определяем обработчик для маршрута "/"
app.get("/", function(request, response) {
  axios
    .post(
      `${MAIN_URL}/token`,
      null
    )
    .then(({data}) => {
      console.log("Your Data", data.access_token);
      response.send(data.access_token);
    })
    .catch(e => {
      console.log("error", e.toString());
    });
});

app.post("/value", function(request, response) {
  let token = getToken(request);
  console.log(token);
  axios
    .get(`${MAIN_URL}/api/values/getlogin`, {
      headers: { Authorization: "Bearer " + token }
    })
    .then(({data}) => {
      console.log("Your Data", data);
      response.send(data);
    })
    .catch(e => {
      console.log("error", e.toString());
    });
});

app.post("/allproducts", function(request, response) {
  let token = getToken(request);
  console.log(token);
  axios
    .get(`${MAIN_URL}/api/product/allproducts`, {
      headers: { Authorization: "Bearer " + token }
    })
    .then(({data}) => {
      console.log("Your Data", data);
      response.send(data);
    })
    .catch(e => {
      console.log("error", e.toString());
    });
});

app.post("/productbyid", function(request, response) {
  let token = getToken(request);
  var product = {
    ProductID: 5,
    ProductName: "Chef Anton's Gumbo Mix",
    UnitPrice: 21.35,
    UnitsInStock: 0,
    Discontinued: true
  };
  var data = JSON.stringify(product);
  axios
    .post(`${MAIN_URL}/api/product/productbyid`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
    .then(({data}) => {
      console.log("Your Data", data);
      response.send(data);
    })
    .catch(e => {
      console.log("error", e.toString());
    });
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
