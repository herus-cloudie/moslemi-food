import Link from 'next/link'
import { useState } from 'react';

import style from './layout.module.css'
import SignBtn from '../module/signBtn'

import { TfiMenu } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";
import { TfiShoppingCart } from "react-icons/tfi";

import { useSession } from 'next-auth/react';
import SignOutBtn from '../module/signOutBtn';
import { useRouter } from 'next/router';

export default function Layout({component}){
    let router = useRouter()
    let [menuStatus , setMenuStatus] = useState()
    let session = useSession()

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
                {
                    session.status == 'authenticated' 
                    ? <img src='/images/shopping-cart.png' style={{marginBottom: '20px'}} className={style.basket} onClick={() => router.push('/cart')}/>
                    : null
                }
                <div className={style.cart}> <TfiShoppingCart /></div>
                 
                {
                    session.status != 'authenticated' 
                    ? <div onClick={() => router.push('/register')} style={{marginTop: '25px'}}> <SignBtn /> </div>
                    : <SignOutBtn />
                }
                
                
            </div>
            <div style={session.status == 'authenticated' ? {width : '350px'} : null} className={style.right}>
                {
                    session.status == 'authenticated' 
                    ? <img src='/images/shopping-cart.png' className={style.basket} onClick={() => router.push('/cart')}/>
                    : null
                }
                <div>
                    <Link href={'/menu'}>
                    menu
                    </Link>
                    <Link href={'/categories'}>
                    categories
                    </Link>
                </div>
                {
                    session.status != 'authenticated' 
                    ? <SignBtn /> 
                    : <SignOutBtn />
                }
            </div>
        </header>

        <div className={style.container}>{component}</div>
        
        <div className={style.footer}>
            AmirMohammad Moslemi &copy;
        </div>
    </div>
    )                                                   
}
