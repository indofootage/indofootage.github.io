const jsonServer = require("json-server");
const axios = require('axios');
const bodyParser = require('body-parser');
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// cek master
server.use("/api/cekmaster/:akun", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined){
      
      axios.get('http://localhost:23000/user?acc=' + req.params.akun + '').then(resp16 => {
      res.jsonp(resp16.data);
      }).catch(error => {
      req.method = 'GET';
      res.statusCode = 777;
      });  
      

    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }
    
  }
  //next();
});

// data orders
server.use("/api/dataorders/:master", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined){
      //var id = req.body.id;
      axios.get('http://localhost:22000/order?master=' + parseInt(req.params.master) + '').then(resp12 => {
      res.jsonp(resp12.data);
      }).catch(error => {
      req.method = 'GET';
      res.statusCode = 777;
      });  
      //req.method = 'GET';
      //res.statusCode = 777;

    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }
    
  }
  //next();
});
// data order
server.use("/api/datatiket/:ticket/:master", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined && req.params.ticket !== undefined){
      //var id = req.body.id;
      axios.get('http://localhost:22000/order?ticket=' + parseInt(req.params.ticket) + '&master=' + parseInt(req.params.master) + '').then(resp11 => {
      res.jsonp(resp11.data);
      }).catch(error => {
      req.method = 'GET';
      res.statusCode = 777;
      });  
      //req.method = 'GET';
      //res.statusCode = 777;

    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }
    
  }
  //next();
});

// delete order baru
server.use("/api/delorder/:ticket/:master", (req, res, next) => {
  if (req.method === 'GET') {
    //console.log(req.params.ticket);
    if (req.headers['user-agent'] !== undefined && req.params.ticket !== undefined){
      var kgh;
      axios.get('http://localhost:22000/order?ticket=' + parseInt(req.params.ticket) + '&master=' + parseInt(req.params.master) + '').then(resp1 => {
      kgh = resp1.data[0].id;
      //console.log(kgh);
      axios.delete('http://localhost:22000/order/' + parseInt(kgh) + '', {"ticket": 723725}).then(resp2 => {
      res.jsonp(resp2.data);
      }).catch(error => {
      req.method = 'GET';
      res.statusCode = 777;
      });
      
      }).catch(error => {
      req.method = 'GET';
      res.statusCode = 777;
      //console.log(error.message);
      }); 
        
      

      
       

    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }
    
  }
  //next();
});

// add order baru
server.use("/api/addorder/:ticket/:time/:type/:size/:symbol/:price/:sl/:tp/:master", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined && req.params.ticket !== undefined){
      
        axios.post('http://localhost:22000/order', {"ticket": parseInt(req.params.ticket), "time": req.params.time, "type": req.params.type, "size": req.params.size, "symbol": req.params.symbol, "price": req.params.price, "sl": req.params.sl, "tp": req.params.tp, "master": parseInt(req.params.master)}).then(resp2 => {
        res.jsonp(resp2.data);
        }).catch(error => {
        req.method = 'GET';
        res.statusCode = 777;
        });  

 
    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }

    //next();
    
  }
});

// ubah order
server.use("/api/uporder/:ticket/:time/:type/:size/:symbol/:price/:sl/:tp/:master", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined && req.params.ticket !== undefined){
        var kgh;
        axios.get('http://localhost:22000/order?ticket=' + parseInt(req.params.ticket) + '&master=' + parseInt(req.params.master) + '').then(resp14 => {
        kgh5 = resp14.data[0].id;
        axios.put('http://localhost:22000/order/' + parseInt(kgh5) + '', {"ticket": parseInt(req.params.ticket), "time": req.params.time, "type": req.params.type, "size": req.params.size, "symbol": req.params.symbol, "price": req.params.price, "sl": req.params.sl, "tp": req.params.tp, "master": parseInt(req.params.master)}).then(resp2 => {
        res.jsonp(resp2.data);
        }).catch(error => {
        req.method = 'GET';
        res.statusCode = 777;
        });  

        }).catch(error => {
        req.method = 'GET';
        res.statusCode = 777;
        //console.log(error.message);
        }); 

 
    } else {
      req.method = 'GET';
      res.statusCode = 777;

    }

    //next();
    
  }
});


// block akses ke data asli
server.use("/user", (req, res, next) => {
  if (req.method === 'GET') {
    if (req.headers['user-agent'] !== undefined){
      
      res.jsonp({ });

    } else {
      res.jsonp({ });

    }
  }
  next();
});

server.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    req.method = 'GET';
    res.statusCode = 777;
  }
  next();

});

server.use((req, res, next) => {
  if (req.method === 'PATCH') {
    req.method = 'GET';
    res.statusCode = 777;
  }
  next();

});

server.use((req, res, next) => {
  if (req.method === 'COPY') {
    req.method = 'GET';
    res.statusCode = 777;
  }
  next();
});
server.use((req, res, next) => {
  if (req.method === 'HEAD') {
    req.method = 'GET';
    res.statusCode = 777;
  }
  next();
});
//server.use(function(req, res, next){
  //setTimeout(next, 5);
//});
router.render = function (req, res) {
  var data = res.locals.data
  if (res.statusCode >= 400) {
    data = {
      code: res.statusCode,
      message: 'Silent is gold'
    }
  }
  res.jsonp(data)
}
// Have all URLS prefixed with a /api
//server.use(
  //jsonServer.rewriter({
    //"/api/*": "/user/$1",
  //})
  
//);

server.use(router);
server.listen(21000, () => {
  console.log("JSON Server is running");
});
