export default function BannerComp () {
  return (
    <div className="d-flex justify-content-center bg-body-tertiary">
      <div className="row-10 d-flex justify-content-center align-items-center m-auto">
      <div className="col-4">
        <h1 className="py-3 fs-1 fw-Semibold">Unlock <span className="fw-bold text-primary-emphasis">Ambition</span></h1>
        <p className="text-black-50 mx-1 pe-4 py-2">Apply to a plethora of hiring opportunities & work with your dream companies!</p>
        <button type="button" class="btn px-4 fw-medium py-2 btn-primary rounded-5 ">Find Jobs</button>
        <button type="button" class="btn px-4 fw-medium py-2 mx-2 btn-outline-primary rounded-5">Post Jobs</button>
      </div>
      <div className="col-5 py-5">
        <img className="py-5 w-100" src="banner.png" alt="hel" />
      </div>
      </div>
    </div>
  )
}