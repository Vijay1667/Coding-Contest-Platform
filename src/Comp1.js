import React from "react";
function Comp1(){
    const data=[
        {
            id:"1",
            title:"Avengers",
            description:"By Stanlee",
            image:"https://picsum.photos/200/300",
            price:"$5.00"

        },
        {
            id:"2",
            title:"Mission Impossible",
            description:"By Robert",
            image:"https://picsum.photos/200/300",
            price:"$6.00"

        },
        {
            id:"4",
            title:"Captain America Civil War",
            description:"By Russo",
            image:"https://picsum.photos/200/300",
            price:"$7.00"

        },
        {
            id:"3",
            title:"Door Lock",
            description:"By Ying chan",
            image:"https://picsum.photos/200/300",
            price:"$8.00"

        }
    ]
    const topmovies=data.map(movie=>{
        return{
            content:`${movie.title} - ${movie.description}`,
            price:movie.price
        }
    })
    const topmoviesdat=data.map(movie=>{
        const itemtext=`${movie.title} - ${movie.description}`
        
        return <li>{itemtext}</li>
    })
    console.log(topmovies)
    return(
        
        <div>
            Examine output in console
            {topmoviesdat}

        </div>
    )
}
export default Comp1