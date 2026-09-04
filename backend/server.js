import express from 'express';
import cors from 'cors';



const app=express();

// var dynamicCorsOptions = function(req, callback) {
//   var corsOptions;
//   if (req.path.startsWith('/auth/')) {
//     // Access-Control-Allow-Origin: 'http://localhost:5173', Access-Control-Allow-Credentials: true, Vary: Origin
//     corsOptions = {
//       origin: 'http://localhost:5173',
//       credentials: true
//     };
//   } else {
//     // Access-Control-Allow-Origin: *
//     corsOptions = { origin: '*' };
//   }
//   callback(null, corsOptions);
// };

// app.use(cors(dynamicCorsOptions));

// Dynamic CORS: Request ke path ke according different CORS options apply karta hai.
// /auth/ ke liye specific origin + credentials, baaki routes ke liye origin: '*' allow karta hai.


// The default configuration is the equivalent of:
// {
//   "origin": "*",
//   "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//   "preflightContinue": false,
//   "optionsSuccessStatus": 204
// }

// preflightContinue: true = CORS ke preflight OPTIONS request ko automatically finish mat karo, usko next middleware/handler tak jaane do.

// Iska use tab hota hai jab tum preflight request ko khud handle/log/process karna chahte ho.

//mtlb ab corsmiddleware khud response nhi bhejega blki koi doosra middleware tk req phuchayega aur wo response bhejega



app.use(cors(
    {
  origin: ['http://localhost:5173','http://localhost:5000'],
  // Adds headers: Access-Control-Allow-Origin: <matched origin>, Vary: Origin
  //['origin1', 'origin2'] -> multiple origins ko allow krna 
  // * -> sbhi origin ko allow krna
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
))

app.get('/', (req, res) => {
    const frontendorigin = req.get('Origin');
    const backendOrigin =req.get('host') ;


    console.log("Backend Host:", backendOrigin );
    console.log("Frontend Host:",frontendorigin );


    // if (origin) {
    //     const url = new URL(origin);

        

    //     console.log("Protocol:", url.protocol);
    //     console.log("Domain:", url.hostname);
    //     console.log("Port:", url.port);
    // } // not necessary agr  protocol + domain/hostname + port alg alg na dekhna ho to sirf origin yani url bhi dekh skte

    res.json({
        name: "Gaurav",
        email: "gmail.com"
    });
});




const port = 3000 ;

app.listen(port,() => 
{
    console.log(`Server is running at port: ${port}`);
})