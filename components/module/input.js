import style from './input.module.css'

export default function Input({title}){
    return (
        <div className={style.coolinput}>
            <label for="input" className={style.text}>{title}:</label>
            <input type="text" placeholder="Write here..." name="input" className={style.input}/>
        </div>
    )
}