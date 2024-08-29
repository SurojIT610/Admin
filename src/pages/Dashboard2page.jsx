import React from 'react'
import Pannel from '../components/Dashboard2/Pannel'
import NavBar from '../components/NavbarSidebar/NavBar'
import SideBar from '../components/NavbarSidebar/SideBar'
import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure you import the bundle that includes Popper.js

const Dashboard2page = () => {
  return (
    <>
      <div className="wrapper">
        {/* Side Bar Common In all */}
        <SideBar />

        <div className="main-panel">
          <div className="main-header">
            <NavBar />
          </div>{" "}
          {/*div 1*/}
          <div className="container">
            <div className="page-inner">
             <Pannel/>

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




  )
}

export default Dashboard2page