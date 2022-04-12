import * as React from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import X2 from '../Img/Profile.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import '../Navbar.css';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import DnsIcon from '@mui/icons-material/Dns';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';


function Navebar(props) {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  let username = props.username


  return (

    <div>

      <>
        <IconContext.Provider value={{ color: '#fff' }}>

          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items Services'   >

              <div style={{ height: "95px" }} />
              <div className='Services'>
                <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services'><HomeIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>หน้าหลัก</span></p></Link>

              </div>


              <div>
                <hr className='line' />

                <div style={{ height: "1px" }} />
                <p className='All-Services'><h4>All Services</h4></p>
                <div className='Services'>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services'><DnsIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการข่าวสารหุ้น</span></p></Link>
                  <Link to="/Index/Forex" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><EqualizerIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>Forexและการแนะนำ</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><SmartToyIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>Ai Forex</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>
                  <Link to="/Index/Home" style={{ textDecoration: "none" }}><p className='font ser1 hover-services' style={{ marginTop: "-15px" }}><AutoAwesomeMotionIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>บริการเพิ่มเติม</span></p></Link>


                </div>

                <hr className='line' />

                <div style={{ height: "1px" }} />
                <p className='All-Services'><h4>All Services</h4></p>
                <div className='Services'>
                  <Link to="/" style={{ textDecoration: "none" }}><p className='font ser1 hover-services'><LogoutIcon className='icon-services' style={{ fontSize: "22px" }} /><span className='services-mt font'>ออกจากระบบ</span></p></Link>
                  
                </div>


              </div>


            </ul>
          </nav>

        </IconContext.Provider>

      </>

      <div className='Navebar zinx' >

        <div >
          <button className='MB' onClick={showSidebar}><MenuIcon /></button>
          <img src={Logo} className=" x10" />
          <img src={Greenlogo} className="LogoHome" />

        </div>

        <div>

          <button className='bbt bbt2'><Avatar src={X2}>H</Avatar></button>
          <Link to={"/Index/Profile/"+username} className='Hoverline'>
            <button className='bbt bbt3'><SettingsIcon /></button>
          </Link>
        </div>
      </div>

    </div>

  );
}

export default Navebar;