import React from "react";
import SideBar from "../../components/NavbarSidebar/SideBar";
import NavBar from "../../components/NavbarSidebar/NavBar";
import DashboardRowA from "../../components/Dashboard/DashboardRowA";
import DashboardRowB from "../../components/Dashboard/DashboardRowB";
import DashboardRowC from "../../components/Dashboard/DashboardRowC";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure you import the bundle that includes Popper.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Dashboard = () => {
  return (
    <>
      <div className="wrapper">
        {/* Side Bar Common In all */}
        <SideBar />

        <div className="main-panel">
          <div className="main-header">
            {/* {" "} */}
            {/*div 1*/}
            <div className="main-header-logo">
              {/* <!-- Logo Header --> */}
              <div className="logo-header" data-background-color="dark">
                <a href="index.html" className="logo">
                  <img
                    src="assets/img/kaiadmin/logo_light.svg"
                    alt="navbar brand"
                    className="navbar-brand"
                    height="20"
                  />
                </a>
                <div className="nav-toggle">
                  <button className="btn btn-toggle toggle-sidebar">
                    <i className="gg-menu-right"></i>
                  </button>
                  <button className="btn btn-toggle sidenav-toggler">
                    <i className="gg-menu-left"></i>
                  </button>
                </div>
                <button className="topbar-toggler more">
                  <i className="gg-more-vertical-alt"></i>
                </button>
              </div>
              {/* <!-- End Logo Header --> */}
            </div>
            {/* Navbar common in all */}
            <NavBar />
          </div>{" "}
          {/*div 1*/}
          <div className="container">
            <div className="page-inner">
              <DashboardRowA />
              <DashboardRowB />
              <DashboardRowC />

              {/*  */}

              <footer className="footer">
                <div className="container-fluid d-flex justify-content-between">
                  <nav className="pull-left">
                    <ul className="nav">
                      <li className="nav-item">
                        <a className="nav-link" href="http://www.themekita.com">
                          ThemeKita
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          {" "}
                          Help{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          {" "}
                          Licenses{" "}
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="copyright">
                    2024, made with{" "}
                    <i className="fa fa-heart heart text-danger"></i> by
                    <a href="http://www.themekita.com">ThemeKita</a>
                  </div>
                  <div>
                    Distributed by
                    <a target="_blank" href="https://themewagon.com/">
                      ThemeWagon
                    </a>
                    .
                  </div>
                </div>
              </footer>
            </div>
          </div>
          {/* // */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
