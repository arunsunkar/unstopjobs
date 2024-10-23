
import React from 'react'

function JobOpsComp(props) {
  return(
    <div className='container border rounded-4 m-2 p-0'>
      <img src={props.imgSrc} alt="" className='img-fluid rounded-top-4' />
      <div className="container-fluid">
        <p className='text-black-50 my-2'>{props.mode} | {props.price}</p>
        <h6 className='col-10'>{props.title}</h6>
        <p className='m-0 text-black-50'>{props.registeredCount} Registered</p>
        <p className='text-black-50'>{props.daysLeft} days left</p>
      </div>
    </div>
  )
}

export default JobOpsComp;