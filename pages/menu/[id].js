import { useRouter } from "next/router";
import DetailsPage from "@/components/template/detailsPage";

export default function Details({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <span className="visually-hidden">Loading...</span>
    
    )
  }

  return <DetailsPage {...data} />;
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();
  const paths = data.map(item => ({params: { id: item.id.toString() }}));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {params : { id }} = context;
  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();
  return {
    props: { data }
  };
}
