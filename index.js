const express = require("express")
const app = express()

function isOldEnoughMiddleware(req, res, next){
    const age = req.query.age
    if(age >= 14){
        next()
    }
    else
    {
        res.status(411).json({
            msg: "Sorry you are not a age yet"
        })
    }
}

app.get("/", isOldEnoughMiddleware ,function(req, res){
    res.json({
        msg : "You have enjoy the ride"
    }) 
})


app.listen(3000)