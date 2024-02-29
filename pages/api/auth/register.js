import DBconnection from "@/utils/DBconnection";
import FoodUser from "@/utils/model";
import { hash } from "bcrypt";

export default async function handler(req, res) {
  
  if(req.method != 'POST') return res.status(500).json({ status : 'faild' , message : 'wrong method request'})
    let {Email , Password} = req.body;
  
    try {
      await DBconnection()
    } catch (err) {   
      console.log(err)
      return res.status(500).json({ status : 'faild' , message : 'problem at connecting to DB'})
    }

    let existUser = await FoodUser.findOne({Email : Email})
    if(existUser) return res.status(422).json({ status : 'faild' , message : 'the user does exist'})

    let hashedPassword = await hash(Password , 12)

    let user = await FoodUser.create({Email , Password : hashedPassword})
    res.status(200).json({ status : 'success' , message : 'user created' })
  }
  