import React from 'react'

const Practice2 = ({value}) => {
    console.log("value in practice",value)
  return (
    <div>
        {value.map((elem,index)=>{
            return(<div key={index}>{elem}</div>)
        })}
    </div>
  )
}

export default Practice2