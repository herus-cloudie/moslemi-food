import { useEffect, useState } from 'react'
import CartCard from '../module/cartCard'
import Input from '../module/input'
import style from './cartPage.module.css'

export default function CartPage(){
    let [state , setState] = useState()
    useEffect(() => {
        async function checkExiting(){
          let progress = await fetch('/api/addItem')
          let Data = await progress.json()
          setState(Data.data)
        }
        checkExiting()
      } , [])

    let Price = state?.map(item => item.price)

    const finalPrice = Price?.reduce((accumulator, currentValue) =>  accumulator + currentValue , 0);
    return(
        <div className={style.container}>
            <h2 className={style.h2}>Cart</h2>
            <div className={style.Cart}> 
                <div className={style.cart_group}>
                    {
                        state?.map((item , index) => <CartCard key={index} {...item}/>)
                    }
                    <div className={style.final_price}>Total price : ${finalPrice}</div>
                </div>
                <div className={style.input_group}>
                   <div>
                        <Input title={'Full name'}/> 
                        <Input title={'Email'}/> 
                        <Input title={'Address'}/> 
                        <Input title={'description'}/> 
                   </div>
                    <div className={style.button_container}>
                        <button className={style.button_green}>
                            <p>Choose payment method</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
       
    )

    
}