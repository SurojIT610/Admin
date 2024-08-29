import React, { useState, useRef } from 'react';
import '../../assets/css/kaiadmin.min.css';
import '../../assets/js/core/bootstrap.min.js'; // Ensure Bootstrap JS is included

// Import the logo image
import logoLight from '../../assets/img/kaiadmin/logo_light.svg';

const SideBar = () => {
  // State to track which item is open
  const [openItem, setOpenItem] = useState(null);

  // Refs for collapse elements
  const refs = {
    dashboard: useRef(null),
    base: useRef(null),
    sidebarLayouts: useRef(null),
    forms: useRef(null),
    tables: useRef(null),
    maps: useRef(null),
    charts: useRef(null),
    submenu: useRef(null),
  };

  // Toggle function for collapse
  const toggleCollapse = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="sidebar" data-background-color="dark">
      <div className="sidebar-logo">
        <div className="logo-header" data-background-color="dark">
          <a href="/" className="logo">
            <img src={logoLight} alt="navbar brand" className="navbar-brand" height="20" />
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

      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <ul className="nav nav-secondary">
            <li className="nav-item active">
              <a
                href="#dashboard"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('dashboard');
                }}
              >
                <i className="fas fa-home"></i>
                <p>Dashboard</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.dashboard}
                style={{ display: openItem === 'dashboard' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="/">
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h"></i>
              </span>
              <h4 className="text-section">Components</h4>
            </li>
            <li className="nav-item">
              <a
                href="#base"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('base');
                }}
              >
                <i className="fas fa-layer-group"></i>
                <p>Base</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.base}
                style={{ display: openItem === 'base' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="components/avatars.html">
                      <span className="sub-item">Avatars</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/buttons.html">
                      <span className="sub-item">Buttons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/gridsystem.html">
                      <span className="sub-item">Grid System</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/panels.html">
                      <span className="sub-item">Panels</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/notifications.html">
                      <span className="sub-item">Notifications</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/sweetalert.html">
                      <span className="sub-item">Sweet Alert</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/font-awesome-icons.html">
                      <span className="sub-item">Font Awesome Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/simple-line-icons.html">
                      <span className="sub-item">Simple Line Icons</span>
                    </a>
                  </li>
                  <li>
                    <a href="components/typography.html">
                      <span className="sub-item">Typography</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#sidebarLayouts"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('sidebarLayouts');
                }}
              >
                <i className="fas fa-th-list"></i>
                <p>Sidebar Layouts</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.sidebarLayouts}
                style={{ display: openItem === 'sidebarLayouts' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="sidebar-style-2.html">
                      <span className="sub-item">Sidebar Style 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="icon-menu.html">
                      <span className="sub-item">Icon Menu</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#forms"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('forms');
                }}
              >
                <i className="fas fa-pen-square"></i>
                <p>Forms</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.forms}
                style={{ display: openItem === 'forms' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="forms/forms.html">
                      <span className="sub-item">Basic Form</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#tables"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('tables');
                }}
              >
                <i className="fas fa-table"></i>
                <p>Tables</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.tables}
                style={{ display: openItem === 'tables' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="tables/tables.html">
                      <span className="sub-item">Basic Table</span>
                    </a>
                  </li>
                  <li>
                    <a href="tables/datatables.html">
                      <span className="sub-item">Datatables</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#maps"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('maps');
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
                <p>Maps</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.maps}
                style={{ display: openItem === 'maps' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="maps/googlemaps.html">
                      <span className="sub-item">Google Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="maps/jsvectormap.html">
                      <span className="sub-item">Jsvectormap</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                href="#charts"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('charts');
                }}
              >
                <i className="far fa-chart-bar"></i>
                <p>Charts</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.charts}
                style={{ display: openItem === 'charts' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a href="charts/charts.html">
                      <span className="sub-item">Chart Js</span>
                    </a>
                  </li>
                  <li>
                    <a href="charts/sparkline.html">
                      <span className="sub-item">Sparkline</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a href="widgets.html">
                <i className="fas fa-desktop"></i>
                <p>Widgets</p>
                <span className="badge badge-success">4</span>
              </a>
            </li>
            <li className="nav-item">
              <a href="../../documentation/index.html">
                <i className="fas fa-file"></i>
                <p>Documentation</p>
                <span className="badge badge-secondary">1</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#submenu"
                onClick={(e) => {
                  e.preventDefault();
                  toggleCollapse('submenu');
                }}
              >
                <i className="fas fa-bars"></i>
                <p>Menu Levels</p>
                <span className="caret"></span>
              </a>
              <div
                className="collapse"
                ref={refs.submenu}
                style={{ display: openItem === 'submenu' ? 'block' : 'none' }}
              >
                <ul className="nav nav-collapse">
                  <li>
                    <a
                      href="#subnav1"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCollapse('subnav1');
                      }}
                    >
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </a>
                    <div
                      className="collapse"
                      style={{ display: openItem === 'subnav1' ? 'block' : 'none' }}
                    >
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#subnav2"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleCollapse('subnav2');
                      }}
                    >
                      <span className="sub-item">Level 1</span>
                      <span className="caret"></span>
                    </a>
                    <div
                      className="collapse"
                      style={{ display: openItem === 'subnav2' ? 'block' : 'none' }}
                    >
                      <ul className="nav nav-collapse subnav">
                        <li>
                          <a href="#">
                            <span className="sub-item">Level 2</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <span className="sub-item">Level 1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
