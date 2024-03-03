import { useRouter } from "next/router";
import style from "./signBtn.module.css";

export default function SignBtn(){
    let router = useRouter()
    return(
        <button onClick={() => router.pathname == '/register' ?  router.push('/signin') : router.push('/register') } className={style.button}>
            {
                router.pathname == '/register'
                ? 'Sign In'
                : 'Register' 
            }
            <div className={style.arrow_wrapper}>
                <div className={style.arrow}></div>
            </div>
        </button>
    )
}