var express = require('express');
var csv = require("fast-csv");
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var multer  = require('multer');
var Store  = mongoose.model('Stores');
var path = require('path');

//var csvfile = __dirname + "/../public/files/CSVfile.csv";
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/files');
    },
    filename: function (req, file, cb) {
      cb(null, 
      file.fieldname + path.extname(file.originalname));
    }
  });
var upload = multer({ 
    storage: storage,
   }).single('CSVfile');
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

})
var csvfile = __dirname + "/../public/files/CSVfile.csv"; 
var stream = fs.createReadStream(csvfile);
router.post('/upload',(req,res,next)=>
{ upload(req,res,(error)=>{
    if(error){
        res.render('index',{
            message:error
        })
    }else{
        res.render('index',{
            message:"Successfully uploaded",
            filename:`files/${req.file.filename}`
    })
    child_process.exec(['killall -9 node && node --expose-gc /root/application.js'], 
    function (error, stdout, stderr) { }
);
}
  })
  
})


var stream = fs.createReadStream(csvfile);
router.get('/import', function(req, res, next) {

    var  stores  = []
    var csvStream = csv()
        .on("data", function(data){
         
         var item = new Store({
            customer_no: data[0],
            date: data[1],
            time_in1: data[3],
            time_out1: data[4],
            age_group1:data[5],
            gender1:data[6],
            time_in2: data[8],
            time_out2: data[9],
            age_group2:data[10],
            gender2:data[11],
          });
         
          item.save(function(error){
            console.log(item);
              if(error){
                   throw error;
              }
          }); 

    }).on("end", function(){

    });
  
    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});
     
  }).get('/fetchdata', function(req, res, next) {
    
    Store.find({}, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
  
})
router.get('/query1', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},{ $and :[
                {gender1:"F"},  
                {age_group1:{$lt : 35}},
                  ]}
        ]
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
    
});
router.get('/query12', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},{ $and :[
                {gender2:"F"},  
                {age_group2:{$lt : 35}},
                  ]}
        ]
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    })
});

router.get('/query2', function(req, res, next) {
    var  query = {
        $or :[
            {date:"date"},
            { $and :[
                     {gender1:"M"},  
                     {age_group1:{$lt : 38}},
                     {time_in1:{$gte:"14:00:00"}},
                     {time_out1:{$lte:"17:00:00"}}
                    
                 ]
              
             
                }  
          ]
        }
        
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});

router.get('/query22', function(req, res, next) {
   Store.aggregate()
    var  query = {
        $or :[
            {date:"date"},
            { $and :[
                     {gender2:"M"},  
                     {age_group2:{$lt : 38}},
                     {time_in2:{$gte:"14:00:00"}},
                     {time_out2:{$lte:"17:00:00"}},
                     
                    ]
                
          }]
        }
        
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});
router.get('/query31', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},{ $and :[
                
                {age_group1:{$lt : 38,}},
                 {age_group1:{$gte:24}} ]}
        ]
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});
router.get('/query32', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},
                {age_group1:{$lt : 24,}},
                
        ]
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});
router.get('/query33', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},{ $and :[
                
                {age_group2:{$lt : 38,}},
                {age_group2:{$gte:24}} ]}
        ]
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});

router.get('/query34', function(req, res, next) {
    var  query = {
       
        $or :[
            {date:"date"},
             {age_group2:{$lt : 24,}}]
                
        
        };
     Store.find(query, function(err, docs) {
        if (!err){ 
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else { 
            throw err;
        }
    });
});

module.exports = router;
