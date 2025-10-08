const mongoose = require('mongoose');

const dashboardSchema = new mongoose.Schema({
title : {
    required : true ,
    type : String
},
value : {
    type : Object ,
    required : true 
} ,
descrition : {
    type:String ,
    required:true
}
})
mongoose.exports = mongoose.model('dashboardSchema',dashboardSchema);