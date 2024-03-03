import { useRouter } from "next/router";
import style from "./signOutBtn.module.css";
import { signOut } from "next-auth/react";

export default function SignOutBtn(){
    return(
        <button onClick={() => signOut()} className={style.button}>
            Log out
            <div className={style.arrow_wrapper}>
                <div className={style.arrow}></div>
            </div>
        </button>
    )
}