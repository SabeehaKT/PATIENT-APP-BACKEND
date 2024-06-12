const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {patientmodel} = require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())


app.post("/add",(req,res)=>{
    let input = req.body
    let patient = new patientmodel(input)
    patient.save()
    res.json({"status":"added"})
})


app.listen(8087,()=>{
    console.log("Server started")
})