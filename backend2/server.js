import express from 'express';

const app=express();

app.get('/', (req, res) => {
    const frontendorigin = req.get('Origin');
    const backendOrigin =req.get('host') ;


    console.log("Backend Host:", backendOrigin );
    console.log("Frontend Host:",frontendorigin );


    res.json({
        name: "Gaurav2",
        email: "gmail2.com"
    });
});




const port = 4000 ;

app.listen(port,() => 
{
    console.log(`Server is running at port: ${port}`);
})