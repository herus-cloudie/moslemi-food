import CateguriesPage from "@/components/template/categuriesPage";

export default function Categuries({data}){
    return(
        <CateguriesPage data={data}/>
    )
}

export async function getServerSideProps(){
    let mainData = await fetch(`${process.env.BASE_URL}/data`)
    let data = await mainData.json();
    return({
        props : {data}
    })
}

