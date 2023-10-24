import Link from 'next/link'
import style from './layout.module.css'

export default function Layout({component}){
    return(
        <div className={style.respons}>
        <header className={style.header}>
            <div className={style.left}>
                <Link href={'/'}>
                AmirFood
                </Link>
            </div>
            <div className={style.right}>
                <Link href={'/menu'}>
                menu
                </Link>
                <Link href={'/categuries'}>
                categuries
                </Link>
            </div>
        </header>

        <div className={style.container}>{component}</div>
        
        <div className={style.footer}>
            next course | AmirFood &copy;
        </div>
        </div>
    )                                                   
}
