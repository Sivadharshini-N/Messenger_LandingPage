import React from 'react'


const PtagContainer = ({content}) => {
  return (
    <div>
        <div className="container col-sm-12 bg-white rounded ptagcontainer ph3 d-flex align-items-center justify-content-center">
            <p className='p-5 '>{content}</p>
        </div>
    
      
    </div>
  )
}

export default PtagContainer;
