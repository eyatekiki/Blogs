import {db} from '../db.js'
import bcrypt from 'bcryptjs'

export const register =(req, res)=>{

    //nthabtou  ke fama existing user
    const q="SELECT * FROM users WHERE email = ? OR username = ?"

db.query(q,[req.body.email,req.body.username],(err,data)=>{

if (err) return res.json (err);

if(data.length) return res.status (409).json("user already exists");
 //if user already exist we can't create it
// hashing the password and create a user 

//https://www.npmjs.com/package/bcryptjs
// To hash a password:
// var bcrypt = require('bcryptjs');
// var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync("B4c0/\/", salt);
const salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync(req.body.password,salt);




})

    }
    export const login =(req, res)=>{
    
    
    
    
    }
    export const logout =(req, res)=>{
    
    
    }
    
    