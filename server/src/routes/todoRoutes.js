import express from 'express'

const router = express.Router()

router.get('/todo',(req,res)=>{
    res.json({todo:"Hello there !"})
})

export default router