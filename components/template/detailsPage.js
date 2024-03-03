import styles from "./detailsPage.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Loader from "../module/loader";
import { useRouter } from "next/router";

function DetailsPage(data) {
  const {id , name , price , discount , introduction , details , ingredients , recipe} = data;
  let [existing , setExisting] = useState(false)
  let [loading , setLoading] = useState(false)
  let session = useSession();
  let router = useRouter()

  function changeExitingState(Data){
    if(Data.data.find(item => item.id == id)) setExisting(true)
    else setExisting(false)
  }
  
  useEffect(() => {
    async function checkExiting(){
      let progress = await fetch('/api/addItem')
      let Data = await progress.json()
     
      changeExitingState(Data)
    }
    checkExiting()
  } , [])
  
  const addToCartHandler = async () => {
    setLoading(true)
    let progress = await fetch('/api/addItem' , {
      method : 'PATCH',
      body : JSON.stringify(data),
      headers : {"Content-Type": "application/json"}
    })
    setLoading(false)
    let Data = await progress.json()

    changeExitingState(Data)
  }

  return (
    <div className={styles.container}>
      <h2>Details</h2>
        <div className={styles.banner}>
          <img src={`/images/${id}.jpeg`} alt={name} />
          <div>
            <h3>{name}</h3>
            <span className={styles.location}>
              <Location />
              {details[0].Cuisine}
            </span>
            <span className={styles.price}>
              <Dollar />
              {discount ? (price * (100 - discount)) / 100 : price}$
            </span>
            {discount ? (
              <span className={styles.discount}>{discount}$ OFF</span>
            ) : null}
          </div>
        </div>
        <div className={styles.introduction}>
          <p>{introduction}</p>
        </div>
        <div className={styles.details}>
          <h4>Details</h4>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>
                <p>{Object.keys(detail)[0]}: </p>
                <span>{Object.values(detail)[0]}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.details}>
          <h4>Ingredients</h4>
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.recipe}>
          <h4>Recipe</h4>
          {recipe.map((item, index) => (
            <div key={index} className={index % 2 ? styles.odd : styles.even}>
              <span>{index + 1}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
        {
          session.status == 'authenticated' 

              ? loading 

                ? <div className={styles.button_container}><button className={styles.button_loader}><div className={styles.loader}><Loader /></div></button></div>  
                : <div className={styles.button_container}>
                    <button onClick={addToCartHandler} className={existing ? styles.button_red : styles.button_green}>
                    {
                      existing ? <p>Remove from Cart </p> : <p>Add to Cart</p>
                    }
                    </button>
                  </div>
                
              : <div className={styles.button_container}>
                  <button onClick={() => router.push('/register')} className={styles.button_green}>
                    <p>Sign up to order</p>
                  </button>
                </div>
          }
     </div>
  );
}

export default DetailsPage;
