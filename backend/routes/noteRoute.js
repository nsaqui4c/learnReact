let notes= require('../notes')
const express = require('express')
const { Router } = require('express')
const router = express.Router()
const jwt =require('jsonwebtoken')


const jwtkey='someUniqueKey'
const expirySec =300

const getNote=(req,res)=>{
    res.status(200).send(notes)
}
router.get('/getNotes',getNote)

const addNote=(req,res)=>{
    const {subject,desc}= req.body
    let id = random()
    notes.push({
        id:id,
        subject:subject,
        data:desc
    })
    for(i=0;i<1000000000;i++){}
    res.status(200).send(`${id}`)
}
router.post('/addNote',addNote)


const deleteNote=(req,res)=>{
    
    let id= req.params.id
    console.log(notes.length,id)
    notes= notes.filter(note=>parseInt(note.id)!==parseInt(id))
    console.log(notes.length)
    res.status(200).send(notes)
}
router.delete('/deleteNote/:id',deleteNote)




const login=async (req,res)=>{
    const {email,pass}= req.body
    //check if user exist
    const token=await jwt.sign({email},jwtkey,{algorithm:'HS256',expiresIn:expirySec})
    console.log(token)

    res.status(200).send(token)


}

router.post('/login',login)



const random=()=>{
    return (Math.floor(Math.random()*10000))
}

module.exports=router