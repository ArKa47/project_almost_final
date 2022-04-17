import * as React from 'react';
import '../App.css';
import Logo from '../Img/Logo.png';
import Greenlogo from '../Img/Greenlogo.png'
import TextField from '@mui/material/TextField';
import BGL from '../Img/BGL.png';
import Fb from '../Img/Fb.png';
import Google from '../Img/Google.png'
import BGM5 from '../Img/BGM6.jpg';
import { Link } from 'react-router-dom';
import { Container, Grid, Paper } from '@mui/material';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,useHistory} from "react-router-dom";




function Signup() {

    const history = useHistory();
    const [error,setError] = useState(false);

    const handleSignIn = (e) =>{
        e.preventDefault()
        let u = document.getElementById("usr").value
        let l = document.getElementById("psw").value
        let m = document.getElementById("email").value
        let api_take="none"
        const ENDPOINT = "http://127.0.0.1:5000/signin/"+u+"/"+l+"/"+m
        fetch(ENDPOINT, {
          method: 'POST',
          mode: 'cors'
        })
          .then( response =>{
            if(response.ok){
              console.log("In OK fetch")
              return response.json()
            }
            throw response
          })
          .then(data =>{
            //console.log("DATA = ",data);
            api_take=data //string
            if(api_take.status == true){
                //console.log("pop")
                history.push("/Index/SignupComplete/")
              }
            else{
                setError(true)
            }
            //document.getElementById("sever_test").innerHTML=api_take.status //debug
          })
          .catch(error => {
            console.error("Error Fetching data" , error);
          })
    }

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
                                <h3>Sign up</h3><br />
                                <form onSubmit={handleSignIn}>
                                <TextField type={'text'} inputProps={{ pattern: "[A-Za-z0-9]{8,31}"}} required error={error} helperText={error ? "duplicate username":""} id="usr" label="Username" variant="standard" color='primary' style={{ width: "90%" }} /><br /><br />
                                <p className='format'>อนุญาตให้ใช้เฉพาะตัวอักษร (a-Z) ,ตัวเลข(0-9) และมีความยาว8-31ตัว </p>
                                <TextField type={'password'} inputProps={{ pattern: "[A-Za-z0-9]{6,}"}} required id="psw" label="Password" variant="standard" style={{ width: "90%" }} /><br /><br />
                                <p className='format'>อนุญาตให้ใช้เฉพาะตัวอักษร (a-Z) ,ตัวเลข(0-9) และมีความยาว 6 ตัวขึ้นไป </p>
                                <TextField type={'email'} inputProps={{ pattern: "[A-Za-zก-๙0-9@.]*"}} required id="email" label="Email" variant="standard" style={{ width: "90%" }} /><br /><br />

                                <div>
                                    <button type='submit' className="Btsignin linkx">
                                        Continue
                                    </button><br /><br />
                                </div>
                                </form>
                            
                                <div style={{ textAlign: "center" }}>
                                    <h3 style={{ marginLeft: "-60px" }}>or</h3>
                                    <div style={{ height: "20px" }} />

                                </div>


                                <button className='FB' style={{ backgroundColor: "#1045A1", color: "#ffffff" }}><img src={Fb} className="icon" style={{ width: "27px" }} /><span className='but1'>Continue with Facebook</span></button><br />
                                <button className='FB' style={{ backgroundColor: "#ffffff" }}><img src={Google} className="icon" style={{ marginLeft: "-65px", width: "25px" }} /><span className='but2'>Continue with Google</span></button><br />


                            </div>




                        </div>


                    </div>


                </Grid>
            </Grid>



        </div >


    );
}


export default Signup;