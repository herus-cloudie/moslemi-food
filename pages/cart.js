
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

import CartPage from "@/components/template/cartPage";

export default function Home() { 
  return <CartPage/>
}

export async function getServerSideProps({req , res}) {
    let session = await getServerSession(req , res , authOptions)
    if (!session) {
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