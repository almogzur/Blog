"use client"
import { useEffect, useContext } from "react"
import { IsReviewSideBarCollapsedContext ,  PageWidthContext } from "../../util/Context/Context"
import Card from './Card'

export default function CardsWrapper({reviews, category}){

  const [isReviewSideBarCollapsed, setIsReviewSideBarCollapsed] = useContext(IsReviewSideBarCollapsedContext)
  const [diplayState,setDisplaystate] = useContext(PageWidthContext) 

    useEffect(()=>{
       
    },[])

 return (
       <div className="cards-wrapper"
        style={ 
          diplayState=== "mob" ?  // mon
           {
            position:"absolute",
            top:"250px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
           } 
           :
           diplayState === "tab" ?
           {  
            position:"absolute",
            top:"250px",
            transition:"ease 1s",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            justifyContent:"center",
           }
           :
           diplayState === "desk" ?
           { 
            position:"absolute",
            top:"100px",
            left:isReviewSideBarCollapsed? "80px" : "255px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            transition:"ease 1s",
       
           }
           : // desk and up 
           {
            position:"absolute",
            top:"100px",
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            left:isReviewSideBarCollapsed? "80px" : "255px",
            transition:"ease 1s",
           }
           }
          >     
          {
            reviews.map((review,i)=>{
            return <Card  key={i} review={review}  />
          })
          }
       </div>
   
  )
  
    

  
}


