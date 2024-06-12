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


app.post("/search",(req,res)=>{
    let input = req.body
    patientmodel.find(input).then(
        (data=>{
            res.json(data)
        })
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input = req.body
    patientmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"deleted"})
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
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