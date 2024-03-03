import DBconnection from "@/utils/DBconnection";
import FoodUser from "@/utils/model";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  
    try {
      await DBconnection()
    } catch (err) {   
      console.log(err)
      return res.status(500).json({ status : 'faild' , message : 'problem at connecting to DB'})
    }
    let session = await getServerSession(req , res , authOptions)

    let existUser = await FoodUser.findOne({Email : session.user?.email})
    if(!existUser) return res.status(422).json({ status : 'faild' , message : 'log in please'})
    let {Cart} = existUser;
/*------------------------------------*/
    if(req.method == 'PATCH'){
      let data = req.body;

      if(Cart.find(item => item.id == data.id)) Cart.pop(data)
      else Cart.push(data)
      await existUser.save()

      res.status(200).json({ status : 'success' , data : Cart })
    }


    if(req.method == 'GET'){
      res.status(200).json({ status : 'success' , data : Cart })
    }

    if(req.method == 'DELETE'){
      let id = req.body;
      let elseItem = Cart.filter(item => item.id != id)
      existUser.Cart = elseItem

      await existUser.save()

      res.status(200).json({ status : 'success' , data : {Cart , existUser} })
    }
  }
  