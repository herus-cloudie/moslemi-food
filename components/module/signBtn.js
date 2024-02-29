import { useRouter } from "next/router";
import style from "./signBtn.module.css";

export default function SignBtn(){
    let router = useRouter()
    return(
        <button onClick={() => router.pathname == '/' ?  router.push('/register')
        : router.pathname == '/register' ?  router.push('/signin')
        : router.pathname == '/signin' ?  router.push('/register') : null} className={style.button}>
            {
                router.pathname == '/' ||  router.pathname == '/signin'
                ? 'Register' 
                : 'Sign In'
            }
            <div className={style.arrow_wrapper}>
                <div className={style.arrow}></div>
            </div>
        </button>
    )
}