
export default function NavBarComp() {
  return(
    <nav className="px-5 navbar bg-body-white py-3">
      <div className="container">
        <div className="h-100 d-flex px-3 bg-white border rounded-5">
            {/* <img src="unstop-logo.jpg" alt="img" className="nav nav-brand"/> */}
          <input className="border-0 p-2 rounded-5 w-100" type="text" placeholder="Search Jobs"/>
        </div>
        <div>
          <button type="button" class="btn fw-medium py-2 text-black text-opacity-75 rounded-5">Interships</button>
          <button type="button" class="btn px-3 fw-medium py-2 btn-outline-primary  rounded-5">Jobs</button>
          <button type="button" class="btn fw-medium py-2 text-black text-opacity-75 rounded-5">Compete</button>
          <button type="button" class="btn fw-medium py-2 text-black text-opacity-75 rounded-5">Mentorship</button>
          <button type="button" class="btn fw-medium py-2 text-black text-opacity-75 rounded-5">Courses</button>
          <button type="button" class="btn fw-medium py-2 text-black text-opacity-75 rounded-5">Practice</button>
          <button type="button" class="btn px-4 fw-medium py-2 btn-primary rounded-5">Login</button>
          <button type="button" class="btn mx-1 px-4 border fw-medium py-2 rounded-5">Host</button>
          <button type="button" class="btn mx-1 px-4 border fw-medium py-2 rounded-5 bg-warning-subtle border border-warning">For Business</button>
        </div>
      </div>
    </nav>
  )
}
