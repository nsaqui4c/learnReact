import React from 'react'

export default function ChangeColor(LowComponent){

   const colors=['red','blue','green','purplr']
   const num=( Math.floor(Math.random()*3))
   const selColor=colors[num]
   
   
   console.log(selColor)

    return(props)=>{return(
        <div style={{backgroundColor:selColor}}>
        <LowComponent {...props}/>
        </div>
    )}

}