const express = require('express');
const room_booked=require("./datas/room.json")
const customer_booked=require("./datas/customer.json")
const bookedroom=require('./datas/bookedroom.json');
const web_server=express();

//body parser
web_server.use(express.json());

web_server.post("/createRoom",(req,res)=>{
    return res.status(200).json({
        message:"Room created successfully",
        data:req.body
    })
})

web_server.post("/bookingRoom",(req,res)=>{
    return res.status(200).json({
        message:"Booking room created successfully",
        data:req.body
    })
})

web_server.get("/roombooked",(req,res)=>{
    res.status(200).json({
       message:"custer booked room successfully",
       data:room_booked
    })
})

web_server.get("/customerbooked",(req,res)=>{
    res.status(200).json({
       message:"list all customer booked data  successfully",
       data:customer_booked
    })
})
web_server.get("/customerbooked/:bookedcount",(req,res)=>{
    //console.log(bookedroom)
    const datacopy=[...bookedroom];
    //console.log(datacopy)
    const matchingdata=datacopy.find((data)=>data.id == req.params.bookedcount)
    //console.log(bookedroom)
    //console.log(matchingdata)
    if(matchingdata){
        res.status(200).json({
            message:"customer booked data  successfully",
            data:matchingdata
         })
    }else
    res.status(200).json({
       message:"No customer booked data found",
       data:{}
    })
})
web_server.listen(3001,"localhost",()=>{
    console.log("server started");
    console.log("http://localhost:3001");
})
//routers injection
/* web_server.use('/foods',foodrouter);
web_server.use("/todos",todorouter);
 */
/* 
web_server.get("/",(req,res)=>{ */
    //console.log("harishni");
  /*   res.send("Home page");
})
web_server.get("/about",(req,res)=>{
    return res.send(`<html>
        <head><title>aboutpage</title></head>
        <body>About page</body>
        </html>`) 
}) */
