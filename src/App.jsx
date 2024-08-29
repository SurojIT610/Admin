import { useState } from 'react'

import './App.css'
import SideBar from './components/NavbarSidebar/SideBar'
import NavBar from './components/NavbarSidebar/NavBar'
import DashBoardRowA from './components/Dashboard/DashboardRowA'
import DashboardRowB from './components/Dashboard/DashboardRowB'
import DashboardRowC from './components/Dashboard/DashboardRowC'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Dashboard/>
    {/* <DashBoardRowA/>
    <DashboardRowB/>
    <DashboardRowC/> */}
    {/* <NavBar/> */}
  {/* <SideBar /> */}
    </>
  )
}

export default App
