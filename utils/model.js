const { Schema, model, models } = require("mongoose");


let FoodUserSchema = new Schema({
    Email : {
        type : String,
        require : true
    },
    Password : {
        type : String,
        require : true
    },
    SecondPassword : {
        type : String
    },
})

let FoodUser = models.FoodUser || model('FoodUser' , FoodUserSchema)

export default FoodUser;