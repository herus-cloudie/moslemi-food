import DBconnection from "@/utils/DBconnection"
import FoodUser from "@/utils/model"
import { compare } from "bcrypt"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
 
    providers: [
        Credentials({
          async authorize(credentials) {
             let {Email , Password} = credentials;

            try {
              await DBconnection()
            }catch (error) {
              throw new Error('problem at connecting to DB')
            }
            
            let existUser = await FoodUser.findOne({Email : Email})
            if(!existUser) throw new Error('the user does not exist')
            
            if(!await compare(Password , existUser.Password)) throw new Error('the password is not correct')
            
            return {email : Email}
          }
        })
      ]
}

export default NextAuth(authOptions)