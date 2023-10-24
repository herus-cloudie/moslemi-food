import Card from '../module/card'
import style from './menuPage.module.css'
export default function MenuPage({data}){
    
    return(
        <>
        <div className={style.container}>
            <h2>Menu</h2>
            <div className={style.subContainer}>
                {data.map(food => <Card {...food} key={food.key}/>)}
            </div>
        </div>
        </>
    )
}