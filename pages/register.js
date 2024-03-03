import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

import RegisterPage from "@/components/template/RegisterPage";

export default function Register(){
    return <RegisterPage />
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