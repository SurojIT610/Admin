// DashboardRowC.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const DashboardRowC = () => {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="card card-round">
          <div className="card-body">
            <div className="card-head-row card-tools-still-right">
              <div className="card-title">New Customers</div>
              <div className="card-tools">
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-clean me-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-list py-4">
              {[
                { imgSrc: 'assets/img/jm_denis.jpg', name: 'Jimmy Denis', role: 'Graphic Designer', initials: null, color: null },
                { imgSrc: null, name: 'Chandra Felix', role: 'Sales Promotion', initials: 'CF', color: null },
                { imgSrc: 'assets/img/talha.jpg', name: 'Talha', role: 'Front End Designer', initials: null, color: null },
                { imgSrc: 'assets/img/chadengle.jpg', name: 'Chad', role: 'CEO Zeleaf', initials: null, color: null },
                { imgSrc: null, name: 'Hizrian', role: 'Web Designer', initials: 'H', color: 'bg-primary' },
                { imgSrc: null, name: 'Farrah', role: 'Marketing', initials: 'F', color: 'bg-secondary' },
              ].map((user, index) => (
                <div className="item-list" key={index}>
                  <div className="avatar">
                    {user.imgSrc ? (
                      <img
                        src={user.imgSrc}
                        alt="..."
                        className="avatar-img rounded-circle"
                      />
                    ) : (
                      <span
                        className={`avatar-title rounded-circle border border-white ${user.color}`}
                      >
                        {user.initials}
                      </span>
                    )}
                  </div>
                  <div className="info-user ms-3">
                    <div className="username">{user.name}</div>
                    <div className="status">{user.role}</div>
                  </div>
                  <button className="btn btn-icon btn-link op-8 me-1">
                    <i className="far fa-envelope"></i>
                  </button>
                  <button className="btn btn-icon btn-link btn-danger op-8">
                    <i className="fas fa-ban"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card card-round">
          <div className="card-header">
            <div className="card-head-row card-tools-still-right">
              <div className="card-title">Transaction History</div>
              <div className="card-tools">
                <div className="dropdown">
                  <button
                    className="btn btn-icon btn-clean me-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table align-items-center mb-0">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Payment Number</th>
                    <th scope="col" className="text-end">Date & Time</th>
                    <th scope="col" className="text-end">Amount</th>
                    <th scope="col" className="text-end">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                    { number: '#10231', dateTime: 'Mar 19, 2020, 2.45pm', amount: '$250.00', status: 'Completed' },
                  ].map((transaction, index) => (
                    <tr key={index}>
                      <th scope="row">
                        <button className="btn btn-icon btn-round btn-success btn-sm me-2">
                          <i className="fa fa-check"></i>
                        </button>
                        Payment from {transaction.number}
                      </th>
                      <td className="text-end">{transaction.dateTime}</td>
                      <td className="text-end">{transaction.amount}</td>
                      <td className="text-end">
                        <span className="badge badge-success">{transaction.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRowC;
