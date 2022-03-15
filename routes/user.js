const router = require('express').Router()
const  { verifyTokenAndAuthorization} = require('../middleware/verifyToken')
router.put("/:id", verifyTokenAndAuthorization , (req,res) =>{
    if(req.body.passowrd) {
        
    }
})

module.exports = router