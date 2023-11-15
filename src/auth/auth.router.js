const router=require('express').Router();

const postLogin =require('./auth.services')

router.post('/auth',postLogin)

module.exports = router