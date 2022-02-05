const express = require('express');
const app = express();
const mongoose = require('mongoose');
// import route from './routes/route';
const route = require('./routes/route');
const cors = require('cors');
// const res = require('express/lib/response');
// const bodyParser = require('body-Parser');

// const corsOptions ={
//         "origin": "*",
//         "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//         "preflightContinue": false,
//         "optionsSuccessStatus": 204
//       }


// app.use(bodyParser.json( {extended:true} ));
app.use(express.json( {extended:true} ));
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));

app.use('/users',cors(),route);
// app.use(cors({
    // origin: "http://localhost:3000"
    // origin: "*"
// }));
// app.use(cors());
// app.use(cors(corsOptions));

const PORT = process.env.PORT || 8008;

if (process.env.NODE_ENV === "production"){
    app.use(express.static("frontened/build"))
    const path = require('path')
    app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'frontened','build','index.html'));
})
}


const URI = env.URI;
// const URI = 'mongodb://localhost:27015/crud-op?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

// const db = mongoose.connection
// db.once('open', _ => {
//   console.log('Database connected:', url)
// })

// db.on('error', err => {
//   console.error('connection error:', err)
// })

//    app.listen(PORT,()=>{
//     console.log(`App is running on ${PORT} PORT`);
//     console.log('This is really awesome');
//     const connect = async ()=>{
//         await mongoose.connect(URI);     
//     }
// });

mongoose.connect(URI).then(()=>{
    app.listen(PORT,()=>{
            console.log(`App is running on ${PORT} PORT`);
            console.log('This is really awesome');
    })
}).catch(err => 
    console.log(err)
);

