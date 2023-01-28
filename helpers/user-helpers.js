var db = require('../config/connection');
var collection = require('../config/collections');
const async = require('hbs/lib/async');
const { response } = require('express');
var objectid = require('mongodb').ObjectId
const { ObjectId } = require('mongodb');
const dotenv = require("dotenv")
dotenv.config()


module.exports = {




  addUserData: (userData) => {
    return new Promise(async (resolve, reject) => {
      db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data) => {
        resolve(data.insertedId)
      })
    })
  },


  getAllUsers: () => {
    return new Promise(async (resolve, reject) => {
      let userdetails = await db.get().collection(collection.USER_COLLECTION).find().toArray()
      resolve(userdetails)
    })
  },

 


}