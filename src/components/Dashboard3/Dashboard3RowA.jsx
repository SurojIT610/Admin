import React from 'react'

const Dashboard3RowA = () => {
  return (
    <>
        

            <div className="row row-card-no-pd">
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6><b>Todays Income</b></h6>
                        <p className="text-muted">All Customs Value</p>
                      </div>
                      <h4 className="text-info fw-bold">$170</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-info w-75"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">75%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6><b>Total Revenue</b></h6>
                        <p className="text-muted">All Customs Value</p>
                      </div>
                      <h4 className="text-success fw-bold">$120</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-success w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">25%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6><b>New Orders</b></h6>
                        <p className="text-muted">Fresh Order Amount</p>
                      </div>
                      <h4 className="text-danger fw-bold">15</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-danger w-50"
                        role="progressbar"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">50%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h6><b>New Users</b></h6>
                        <p className="text-muted">Joined New User</p>
                      </div>
                      <h4 className="text-secondary fw-bold">12</h4>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-secondary w-25"
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p className="text-muted mb-0">Change</p>
                      <p className="text-muted mb-0">25%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </>
  )
}

export default Dashboard3RowA