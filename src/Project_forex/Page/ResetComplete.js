import * as React from 'react';
import '../../App.css';
import Logo from '../Img/Logo.png';
import ResetEmail from '../Img/ResetEmail.png'
import TextField from '@mui/material/TextField';
import BGL from '../Img/BGL.png';
import Fb from '../Img/Fb.png';
import Google from '../Img/Google.png'
import BGM5 from '../Img/BGM6.jpg';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { useEffect } from 'react';



function ResetComplete() {

    return (

        <div>



            <Grid container>


                <Grid item xs={12} sm={12} md={6}>
                    <section class="showcase inbgset2">
                        <img src={BGM5} className="im" />
                        <div class="overlay"></div>
                        <div class="text">
                            <h2>Start trading </h2>
                            <h3>and enjoy new things.</h3>
                            <p>
                                Increase your income anywhere with our services.</p>

                        </div>
                    </section>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>



                    <div class="indexlogin-bg">

                        <div class="" >



                            <div >

                                <img src={ResetEmail} className="imx2" style={{marginLeft:"31%",marginTop:"50px"}} />


                                
                                <div style={{textAlign:"center",marginLeft:"-60px"}}>
                                    <h3 className='font'>ส่งข้อความไปยัง Email ของท่านแล้ว</h3>
                                </div>






                            </div>




                        </div>


                    </div>


                </Grid>
            </Grid>



        </div >


    );
}


export default ResetComplete;