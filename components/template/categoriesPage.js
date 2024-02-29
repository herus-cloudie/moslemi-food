import {  useState } from 'react'
import style from './categoriesPage.module.css'
import { useRouter } from 'next/router'
import Card from '../module/card';
export default function CategoriesPage({data}){
    let [query , setQuery] = useState({Difficulty : "" , Time : ""});
    let router = useRouter();
    let queryTime = router.query.Time;    
    let queryDifficulty = router.query.Difficulty;
    let mainTime , nothingExist = true;
    let changeHandler= e => setQuery({ ...query , [e.target.name] : e.target.value})
    let clickHandler = () => router.push({ pathname : "/categories" , query })

    if (queryTime && queryDifficulty) {
        mainTime = data.filter(item => queryTime == 'More' 
        ? item.details[4]['Cooking Time'].split(" ")[0] >= 30 && item.details[2].Difficulty == queryDifficulty 
        : item.details[4]['Cooking Time'].split(" ")[0] <= 30 && item.details[2].Difficulty == queryDifficulty)

    } else if (queryDifficulty && !queryTime) {
        mainTime = data.filter(item => item.details[2].Difficulty == queryDifficulty)

    } else if (!queryDifficulty && queryTime) {
        mainTime = data.filter(item => queryTime == 'More' ? item.details[4]['Cooking Time'].split(" ")[0] >= 30 : item.details[4]['Cooking Time'].split(" ")[0] <= 30)

    } else if(!queryTime && !queryDifficulty){
        nothingExist = false;
    }

    return(
        <div className={style.container}>
            <h2>categories</h2>
            <div>
                <div className={style.select}>
                    <select onChange={changeHandler} name='Difficulty'>
                        <option>Difficulty</option>
                        <option value={'Easy'}>Easy</option>
                        <option value={'Medium'}>Medium</option>
                        <option value={'Hard'}>Hard</option>
                    </select>
                    <select onChange={changeHandler} name='Time'>
                        <option>Time cooking</option>
                        <option value={'More'}>More than 30min</option>
                        <option value={'Less'}>Less than 30min</option>
                    </select>
                    <button onClick={clickHandler} className={style.button}>Search</button>
                </div>
            </div>
            <div className={style.cards}>
            {
                nothingExist ?
                mainTime?.map(item => <Card {...item}/>)
                : <img src='images\search.png'/>
            }
            </div>
        </div>
    )
} 



