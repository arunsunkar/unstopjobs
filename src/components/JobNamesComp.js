import React from "react";

function JobNamesComp(props) {
  return (
      <div className="d-flex justify-content-center">
        <p className="px-4 py-3 border rounded-5 m-2">{props.title}</p>
      </div>
  )
}

export default JobNamesComp;