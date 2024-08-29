import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
// import $ from 'jquery'; // Import for sparkline
// import 'sparkline-js'; // Sparkline

const UserStat = () => {
  
  // Data for the charts
  const statisticsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Subscribers",
        borderColor: '#f3545d',
        pointBackgroundColor: 'rgba(243, 84, 93, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(243, 84, 93, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [154, 184, 175, 203, 210, 231, 240, 278, 252, 312, 320, 374]
      },
      {
        label: "New Visitors",
        borderColor: '#fdaf4b',
        pointBackgroundColor: 'rgba(253, 175, 75, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(253, 175, 75, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [256, 230, 245, 287, 240, 250, 230, 295, 331, 431, 456, 521]
      },
      {
        label: "Active Users",
        borderColor: '#177dff',
        pointBackgroundColor: 'rgba(23, 125, 255, 0.6)',
        pointRadius: 0,
        backgroundColor: 'rgba(23, 125, 255, 0.4)',
        fill: true,
        borderWidth: 2,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 900]
      }
    ]
  };

  const dailySalesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September"],
    datasets: [
      {
        label: "Sales Analytics",
        fill: true,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderColor: "#fff",
        data: [65, 59, 80, 81, 56, 55, 40, 35, 30]
      }
    ]
  };

  // Sparkline setup using jQuery after component mounts
  useEffect(() => {
    $("#activeUsersChart").sparkline([112, 109, 120, 107, 110, 85, 87, 90, 102, 109, 120, 99, 110, 85, 87, 94], {
      type: 'bar',
      height: '100',
      barWidth: 9,
      barSpacing: 10,
      barColor: 'rgba(255,255,255,.3)'
    });
  }, []);

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="card card-round">
          <div className="card-header">
            <div className="card-head-row">
              <div className="card-title">User Statistics</div>
              <div className="card-tools">
                <a href="#" className="btn btn-label-success btn-round btn-sm me-2">
                  <span className="btn-label">
                    <i className="fa fa-pencil"></i>
                  </span>
                  Export
                </a>
                <a href="#" className="btn btn-label-info btn-round btn-sm">
                  <span className="btn-label">
                    <i className="fa fa-print"></i>
                  </span>
                  Print
                </a>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="chart-container" style={{ minHeight: '375px' }}>
              <Line data={statisticsData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <div id="myChartLegend"></div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card card-primary card-round">
          <div className="card-header">
            <div className="card-head-row">
              <div className="card-title">Daily Sales</div>
              <div className="card-tools">
                <div className="dropdown">
                  <button className="btn btn-sm btn-label-light dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Export
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-category">March 25 - April 02</div>
          </div>
          <div className="card-body">
            <div className="chart-container" style={{ minHeight: '200px' }}>
              <Line data={dailySalesData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        <div className="card card-primary card-round mt-4">
          <div className="card-header">
            <div className="card-title">Active Users</div>
          </div>
          <div className="card-body">
            <div id="activeUsersChart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStat;
