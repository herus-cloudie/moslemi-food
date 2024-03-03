import { Schema , model , models  } from "mongoose";

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
    Cart : {
        type : [Object],
        default : []
    }
})

let FoodUser = models.FoodUser || model('FoodUser' , FoodUserSchema)

export default FoodUser;