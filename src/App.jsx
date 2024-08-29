import { useState } from 'react'

import './App.css'
import SideBar from './components/NavbarSidebar/SideBar'
import NavBar from './components/NavbarSidebar/NavBar'
import DashBoardRowA from './components/Dashboard/DashboardRowA'
import DashboardRowB from './components/Dashboard/DashboardRowB'
import DashboardRowC from './components/Dashboard/DashboardRowC'
import Dashboard from './pages/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import Dashboard3 from './components/Dashboard3/Dashboard3'
import UserTables from './components/Tables/UserTables'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <SideBar />

        <div className="main-panel">
          <div className="main-header">

            <div className="main-header-logo">

              <div className="logo-header" data-background-color="dark">
                <a href="" className="logo">
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
            </div>



            <NavBar />
          </div>
          <div className="container">
            <div className="page-inner">

{/* My components */}

{/* <Dashboard3/> */}


<UserTables/>


            <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
