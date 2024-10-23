
import React from 'react'

function JobOpeningsComp(props) {
  return(
    <div className='container border rounded-4 m-2'>
      <h4 className='m-2 pt-3 d-flex align-items-center'>{props.JobCatTitle}</h4>
      <p className='m-2 text-body-tertiary d-flex align-items-center pb-5'>{props.JobCatOpenings} openings</p>
    </div>
  )
}

export default JobOpeningsComp;