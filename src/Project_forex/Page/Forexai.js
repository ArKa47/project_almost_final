import * as React from 'react';
import { Avatar, Container, Grid, Paper } from '@mui/material';
import '../../App.css';
import { height } from '@mui/system';
import BGM5 from '../Img/BGM6.jpg';
import MSD1 from '../Img/Stock.png';
import MSD2 from '../Img/MSD2.jpg';
import MSD3 from '../Img/MSD3.jpg';
import Logo from '../Img/Logow.png';
import Greenlogo from '../Img/GreenW.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import X2 from '../Img/Profile.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import Navebar from './Navebar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import SmartToyIcon from '@mui/icons-material/SmartToy';


function Forex() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <div >


      <Navebar />

      <section class="showcase5 showcase-bg">

        <div class="overlay"></div>

        <div class="fontforexai">
         
          <h3><SmartToyIcon className='iconrobot' style={{fontSize:"90px"}}/> <span className='ai-forextext'>Ai Forex</span></h3>

          <p className='font ' style={{fontSize:"35%"}}>
                แนะนำ Forex ที่น่าสนใจที่ทำให้คุณไม่ควรพลาด</p>

        </div>


      </section>


    </div >

  );
}

export default Forex;