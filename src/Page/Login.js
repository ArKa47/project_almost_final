
import * as React from 'react';
import '../App.css';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import TextField from '@mui/material/TextField';
import BGL from '../Img/BGL.png';
import Fb from '../Img/Fb.png';
import Google from '../Img/Google.png';
import { Link } from 'react-router-dom';


function Login() {

    return (

        <div >
            
            <img src={BGL} className="BGL"/>
            <div class="center" >

                <img src={Logo} className="imx" />
                <img src={Greenlogo} className="imx2" />

                <div style={{ marginLeft: "25px" }}>
                    <h3>Sign in</h3><br />
                    <TextField id="standard-basic1" name='nm' label="Username" variant="standard" style={{ width: "90%" }} /><br /><br />
                    <TextField id="standard-basic2" label="Password" variant="standard" style={{ width: "90%" }} /><br /><br />
                    <div >

                    <Link to="/Index/Home" className='linklog'>
                        <button className="Btsignin linkx">
                            Continue
                        </button><br /><br />
                        </Link>
                        <p className='P1'>Forgot Password? <Link to="/Index/Reset" className='linklog'><span className='linklog'>Reset Password</span></Link> </p>


                    </div>

                    <p className='P1' >No account? <Link to="/Index/Signup" className='linklog'>Create now</Link></p>
                    <div style={{ height: "20px" }} />
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ marginLeft: "-35px" }}>or</h3>
                        <div style={{ height: "20px" }} />

                    </div>


                    <button className='FB' style={{ backgroundColor: "#1045A1", color: "#ffffff" }}><img src={Fb} className="icon" style={{width:"27px"}}/><span className='but1'>Continue with Facebook</span></button><br />
                    <button className='FB' style={{ backgroundColor: "#ffffff" }}><img src={Google} className="icon" style={{marginLeft:"-65px",width:"25px"}}/><span className='but2'>Continue with Google</span></button><br />


                </div>




            </div>

        </div>

    );
}

export default Login;