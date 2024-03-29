import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

import SigninPage from "@/components/template/SigninPage";

export default function Signin(){
    return <SigninPage />
}


export async function getServerSideProps({req , res}) {
    let session = await getServerSession(req , res , authOptions)
    if (session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    
      return {
        props: {},
      }
  }