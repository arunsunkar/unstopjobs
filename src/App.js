import React from "react"

import NavBarComp from "./components/NavBarComp";
import BannerComp from "./components/BannerComp";
import JobCatData from "./components/JobCatData";
import JobOpsData from "./components/JobOpsData";
import JobNamesComp from "./components/JobNamesComp";
import JobOpeningsComp from './components/JobOpeningsComp';
import JobOpsComp from "./components/JobOpsComp";


function App() {
  const jobElements = JobCatData.map( jobData => {
    return <JobNamesComp title={jobData.title}/>
  })

  const JobOpenings = JobCatData.map( jobData2 => {
    return <JobOpeningsComp JobCatTitle={jobData2.title} JobCatOpenings={jobData2.OpeningsCount} />
  })

  const jobOps = JobOpsData.map( jobData => {
    return <JobOpsComp imgSrc={jobData.imgSrc} mode={jobData.mode} price={jobData.price} title={jobData.title} registeredCount={jobData.registeredCount} daysLeft={jobData.daysLeft} />
  })
  

  return (

    <div className="container-fluid p-0">
      <NavBarComp/>
      <BannerComp/>
      
      <div className="container py-5">
        <h2 className="text-center my-4">Job Category</h2>
        <div className="d-flex justify-content-center">
          {jobElements}
        </div>
      </div>

      <div className="container">
        <h1 className="mx-2 d-block">Find the right role for you </h1>
        <p className="mx-2 text-secondary">Apply to these roles matching your skills from 500+ trending options</p>
        <div className="d-flex my-4">
          {JobOpenings}
        </div>
      </div>

      <div className="container">
        <h2 className="mx-2 my-2">Featured Opportunities</h2>
        <p className="mx-2 text-black-50">Check out the curated opportunities handpicked for you from top organizations.</p>
        <div className="my-4 d-flex justify-content-center">
          {jobOps}
        </div>
      </div>
      

    </div>
  )
}

export default App;