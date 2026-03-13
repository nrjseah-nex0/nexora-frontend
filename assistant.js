const express = require("express")
const router = express.Router()

router.post("/api/assistant",(req,res)=>{

const question=req.body.question

res.json({

answer:"المساعد سيصبح ذكاء اصطناعي قريباً"

})

})

module.exports = router
