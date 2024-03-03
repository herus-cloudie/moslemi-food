import { useRouter } from 'next/router';
import style from './cartCard.module.css'
import { BsTrash3 } from "react-icons/bs";

export default function CartCard(data){
    let router = useRouter()
    const deleteHandler = async () => {
        let progress = await fetch('/api/addItem' , {
            method : 'DELETE',
            body : JSON.stringify(data.id),
            headers : {"Content-Type": "application/json"}
          })
          let Data = await progress.json()
          router.reload()
    }

    return(
        <div className={style.card}>
            <div className={style.header}>
                <div className={style.card_img}><img className={style.img} src={`/images/${data.id}.jpeg`}/></div>
                <div className={style.card_title}>{data.name}</div>
            </div>
            <div className={style.card_footer}>
                <div className={style.card_price}><span>$</span>{data.price}</div>
                <button onClick={deleteHandler} className={style.card_btn}><BsTrash3 width={35} height={35}/></button>
            </div>
            <hr className={style.card_divider}/>
        </div>
    )
}