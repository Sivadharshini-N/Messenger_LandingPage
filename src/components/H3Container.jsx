import React from 'react'

const H3Container = ({content}) => {
  return (
    <div>
        <div className="container col-sm-12 rounded bg-white h1tagcontainer ph3 d-flex align-items-center">
            <h3 className='p-5'>{content}</h3>
        </div>
      
    </div>
  )
}

export default H3Container;
