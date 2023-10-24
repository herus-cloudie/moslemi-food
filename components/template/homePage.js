import style from './homePage.module.css'
import Banner from '../module/banner'
import Attributes from '../module/attribute'
import Definition from '../module/definition'
import Companies from '../module/companies'
import Instruction from '../module/instruction'
import Guide from '../module/guide'
import Restrictions from '../module/restrictions'
export default function HomePage(){
    return(
        <div className={style.container}> 
        <Banner/>
        <Attributes/>
        <Definition />
        <Companies />
        <Instruction />
        <Guide />
        <Restrictions />
        </div>
    )
}