import CategoriesPage from "@/components/template/categoriesPage";


export default function Categories({data}){
    return(
        <CategoriesPage data={data}/>
    )
}

export async function getServerSideProps(){
    let mainData = await fetch(`${process.env.BASE_URL}/data`)
    let data = await mainData.json();
    return({
        props : {data}
    })
}

