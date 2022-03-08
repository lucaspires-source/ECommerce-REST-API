const router = require('express').Router()

router.get("/usertest", (req, res) =>{
    res.send('hello world')
})

router.post('/userposttest', (req,res) =>{
    const username = req.body.username
    res.send("your username is " + username)
})

module.exports = router