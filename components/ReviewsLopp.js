import { useEffect, useState } from "react"
import { builder ,BuilderComponent } from '@builder.io/react';
import Footer from "./Footer";
import Card from './Card'

export default function ReviewsLoop({reviews}){

    useEffect(()=>{
     //   console.log( reviews)
    },[reviews])

 return (
       <div className="cards-wrapper">
          {
            reviews.map((review,i)=>{
              console.log(review,"cardsloop")
            return <Card  key={i} review={review} />
          })
          }
       </div>
  )
  
    

  
}


