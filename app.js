const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {patientmodel} = require("./models/patient")

const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://sabeeha02:sabeehamongodb@cluster0.05m7a.mongodb.net/patientdb?retryWrites=true&w=majority&appName=Cluster0")
app.post("/add",(req,res)=>{
    let input = req.body
    let patient = new patientmodel(input)
    patient.save()
    res.json({"status":"added"})
})

app.get("/view",(req,res)=>{
    patientmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch()
})

app.listen(8087,()=>{
    console.log("Server started")
})