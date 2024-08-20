import React from 'react'
import medal from "./../assets/images/medal.png"


const Highlight = ({ style, heading }) => {
  return (
    <div className='container'>
      <div className="container rounded" style={style}>
        <div className="text-center ">
          <img src={medal} className="py-3" alt="" width={"100%"} />
        </div>
      </div>
      <h6>{heading}</h6>
    </div>
  )
}

export default Highlight
