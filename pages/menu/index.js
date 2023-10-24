import MenuPage from "@/components/template/menuPage";

export default function Menu({data}){
    return <MenuPage data={data}/>
}

export async function getStaticProps(){
    let mainData = await fetch(`${process.env.BASE_URL}/data`)
    let data = await mainData.json()
    return{
        props:{
            data,
        },
        revalidate : 10
    }
}