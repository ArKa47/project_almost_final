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
import { BrowserRouter as Router, Switch, 
    Route, Redirect,useHistory} from "react-router-dom";

function Reset_changepw() {
    const history = useHistory();
    const [open, setOpen] = React.useState(false)
    const [error, setError] = React.useState(false)

    const u = localStorage.getItem('username_forgetpsw');
    if( u == null){
      history.push("/")
    }

    const handleClick = (e) => {
        e.preventDefault()
        const psw = document.getElementById('psw').value
        const c_psw = document.getElementById('c_psw').value
        if(psw != c_psw){
            setError(true)
        }
        else{
            //call API
            const ENDPOINT = "http://127.0.0.1:5000/psw_cc_forget/"+u+"/"+c_psw
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
                if(data[0].status == "sucsess"){
                    //alert(data.status)
                    localStorage.clear();
                    history.push('/Index/ResetpwSucsess/')
                }
                else{
                    //alert(data[0].status)
                    setOpen(false)
                }
            })
            .catch(error => {
                console.error("Error Fetching data" , error);
            })
        }
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
                                <h3>Reset Password</h3><br />
                                <p className='font'>ใส่ password ใหม่ของ {u}</p>
                                <div style={{height:"50px"}}/>        
                                <form onSubmit={handleClick}>
                                <TextField type={"password"} inputProps={{ pattern: "[A-Za-z0-9]{6,}"}} required disabled={open} id="psw" label="Password" variant="standard" style={{ width: "90%" }} /><br /><br />
                                <p className='format'>อนุญาตให้ใช้เฉพาะตัวอักษร (a-Z) ,ตัวเลข(0-9) และมีความยาว 6 ตัวขึ้นไป </p>
                                <TextField type={"password"} inputProps={{ pattern: "[A-Za-z0-9]{6,}"}} required disabled={open} id="c_psw" error={error} helperText={error ? "กรุณาใส่ password ให้เหมือนกับด้านบน":""} label="Confirm password" variant="standard" style={{ width: "90%" }} /><br /><br />
                                <div>
                                    <button type='submit' disabled={open} className="Btsignin linkx">
                                        Continue
                                    </button><br /><br />
                                </div>
                                </form>

                            </div>




                        </div>


                    </div>


                </Grid>
            </Grid>



        </div >
    );
}


export default Reset_changepw;