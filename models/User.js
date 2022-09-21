const mongoose = require ('mongoose') ;

const userSchema = mongoose.Schema ({

    name: {
        type : String,
        default : 'nameTest',
        required: true
    }, 
    email: {
        type : String,
        default: 'test@test.com',
        required: true
    },

    age:Number ,
    

})

module.exports = mongoose.model ('User',userSchema ) ;