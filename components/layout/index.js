import Link from 'next/link'
import { useState } from 'react';

import style from './layout.module.css'
import SignBtn from '../module/signBtn'

import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiShoppingCart } from "react-icons/tfi";

export default function Layout({component}){
    let [menuStatus , setMenuStatus] = useState()
    return(
        <div className={style.respons}>
        <header className={style.header}>
            <div className={style.left}>
                <Link href={'/'}>
                Moslemi Food
                </Link>
                
            </div>
            <div onClick={() => setMenuStatus(true)} className={style.menu}><TfiMenu /></div>
            <div className={style.menu_list} style={menuStatus ? {display : 'flex'} : {display : 'none'}}>
                <div className={style.close} onClick={() => setMenuStatus(false)} ><TfiClose /></div>
                <Link href={'/menu'}>
                     menu 
                </Link>
                <Link href={'/categories'}>
                    categories
                </Link>
                <div className={style.cart}> <TfiShoppingCart /></div>
                <div onClick={() => router.push('/register')} style={{marginTop: '25px'}}><SignBtn /></div>
                
            </div>
            <div className={style.right}>
                <div>
                    <Link href={'/menu'}>
                    menu
                    </Link>
                    <Link href={'/categories'}>
                    categories
                    </Link>
                </div>
                <SignBtn />
            </div>
        </header>

        <div className={style.container}>{component}</div>
        
        <div className={style.footer}>
            AmirMohammad Moslemi &copy;
        </div>
        </div>
    )                                                   
}
