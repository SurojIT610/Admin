import React, { useEffect } from 'react';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/jsvectormap.min.css';
import 'jsvectormap/dist/maps/world.js';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/plugins.min.css';
import '../../assets/css/kaiadmin.min.css';
import '../../assets/css/demo.css';
import '../../assets/js/kaiadmin.min.js'
import '../../assets/js/kaiadmin.js'

const DashboardRowB = () => {
  useEffect(() => {
    // Initialize the map once the component mounts
    const worldMap = new jsVectorMap({
      selector: "#world-map",
      map: "world",
      zoomOnScroll: false,
      regionStyle: {
        hover: {
          fill: '#435ebe'
        }
      },
      markers: [
        { name: 'Indonesia', coords: [-6.229728, 106.6894311], style: { fill: '#435ebe' } },
        { name: 'United States', coords: [38.8936708, -77.1546604], style: { fill: '#28ab55' } },
        { name: 'Russia', coords: [55.5807481, 36.825129], style: { fill: '#f3616d' } },
        { name: 'China', coords: [39.9385466, 116.1172735] },
        { name: 'United Kingdom', coords: [51.5285582, -0.2416812] },
        { name: 'India', coords: [26.8851417, 75.6504721] },
        { name: 'Australia', coords: [-35.2813046, 149.124822] },
        { name: 'Brazil', coords: [-22.9140693, -43.5860681] },
        { name: 'Egypt', coords: [26.834955, 26.3823725] },
      ],
      onRegionTooltipShow(event, tooltip) {
        tooltip.css({ backgroundColor: '#435ebe' });
      }
    });

    // Cleanup on unmount
    return () => {
      worldMap.destroy();
    };
  }, []);

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-round">
          <div className="card-header">
            <div className="card-head-row card-tools-still-right">
              <h4 className="card-title">Users Geolocation</h4>
              <div className="card-tools">
                <button className="btn btn-icon btn-link btn-primary btn-xs">
                  <span className="fa fa-angle-down"></span>
                </button>
                <button className="btn btn-icon btn-link btn-primary btn-xs btn-refresh-card">
                  <span className="fa fa-sync-alt"></span>
                </button>
                <button className="btn btn-icon btn-link btn-primary btn-xs">
                  <span className="fa fa-times"></span>
                </button>
              </div>
            </div>
            <p className="card-category">Map of the distribution of users around the world</p>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <div className="table-responsive table-hover table-sales">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/id.png" alt="indonesia" /></div></td>
                        <td>Indonesia</td>
                        <td className="text-end">2,320</td>
                        <td className="text-end">42.18%</td>
                      </tr>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/us.png" alt="united states" /></div></td>
                        <td>USA</td>
                        <td className="text-end">240</td>
                        <td className="text-end">4.36%</td>
                      </tr>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/au.png" alt="australia" /></div></td>
                        <td>Australia</td>
                        <td className="text-end">119</td>
                        <td className="text-end">2.16%</td>
                      </tr>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/ru.png" alt="russia" /></div></td>
                        <td>Russia</td>
                        <td className="text-end">1,081</td>
                        <td className="text-end">19.65%</td>
                      </tr>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/cn.png" alt="china" /></div></td>
                        <td>China</td>
                        <td className="text-end">1,100</td>
                        <td className="text-end">20%</td>
                      </tr>
                      <tr>
                        <td><div className="flag"><img src="assets/img/flags/br.png" alt="brazil" /></div></td>
                        <td>Brazil</td>
                        <td className="text-end">640</td>
                        <td className="text-end">11.63%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mapcontainer">
                  <div id="world-map" className="w-100" style={{ height: "300px" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardRowB;
